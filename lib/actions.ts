"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";
import { client } from "@/sanity/lib/client";
import { CURRENT_USER_BY_USERNAME } from "./queries";
import { Author } from "@/sanity/types";

export const currentUser = async (username: string) => {
  const user = await client.fetch(CURRENT_USER_BY_USERNAME, { username });
  return user as Author;
};

const generateUniqueSlug = async (baseSlug: string) => {
  let newSlug = baseSlug;
  let count = 1;
  let exists = await client.fetch(
    `count(*[_type == "project" && slug.current == $slug])`,
    { slug: newSlug }
  );

  while (exists > 0) {
    newSlug = `${baseSlug}-${count}`;
    exists = await client.fetch(
      `count(*[_type == "project" && slug.current == $slug])`,
      { slug: newSlug }
    );
    count++;
  }

  return newSlug;
};

export const createProject = async (
  form: FormData,
  pitch: string,
  categories: string[]
) => {
  const session = await auth();
  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  const { title, description, link } = Object.fromEntries(form);

  const baseSlug = slugify(title as string, { lower: true, strict: true });
  const uniqueSlug = await generateUniqueSlug(baseSlug);

  try {
    const project = {
      title,
      description,
      category: categories,
      image: link,
      slug: {
        _type: "slug",
        current: uniqueSlug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      pitch,
    };

    const result = await writeClient.create({ _type: "project", ...project });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
export const createAbout = async (about_description: string) => {
  const session = await auth();
  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  try {
    const about = {
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      about_description,
    };

    const result = await writeClient.create({ _type: "about", ...about });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
export const editProject = async (
  form: FormData,
  pitch: string,
  categories: string[],
  id: string
) => {
  const session = await auth();
  if (!session) {
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });
  }

  if (!id) {
    return parseServerActionResponse({
      error: "Project ID is required",
      status: "ERROR",
    });
  }

  const { title, description, link } = Object.fromEntries(form);

  if (!title || !description || !link) {
    return parseServerActionResponse({
      error: "Missing required fields",
      status: "ERROR",
    });
  }

  const baseSlug = slugify(title as string, { lower: true, strict: true });
  const uniqueSlug = await generateUniqueSlug(baseSlug);

  try {
    const project = {
      title,
      description,
      category: categories,
      image: link,
      slug: {
        _type: "slug",
        current: uniqueSlug,
      },
      author: {
        _type: "reference",
        _ref: session.id,
      },
      pitch,
    };

    const result = await writeClient.patch(id).set(project).commit();

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Edit Project Error:", error);
    return parseServerActionResponse({
      error: error instanceof Error ? error.message : JSON.stringify(error),
      status: "ERROR",
    });
  }
};

// edit profile
export const editProfile = async (
  form: FormData,
  id: string | null,
  skills: any,
  role: any
) => {
  const session = await auth();
  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });
  try {
    if (!id) {
      throw new Error("User ID is required");
    }

    const parsedForm = Object.fromEntries(form);

    const requiredFields = ["name", "username", "email"];
    for (const field of requiredFields) {
      if (!parsedForm[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    const {
      name,
      username,
      email,
      profile_title,
      bio,
      image,
      cover_image,
      status,
    } = parsedForm;

    const updatedUser = await writeClient
      .patch(id)
      .set({
        name,
        username,
        email,
        profile_title,
        bio,
        image,
        cover_image,
        status,
        skills: skills || [],
        role: role || [],
      })
      .commit();

    return {
      data: updatedUser,
      error: "",
      status: "SUCCESS",
    };
  } catch (error) {
    console.error("Edit Profile Error:", error);
    return {
      error: error instanceof Error ? error.message : JSON.stringify(error),
      status: "ERROR",
    };
  }
};

export const deleteProject = async (id: string) => {
  const session = await auth();
  if (!session) {
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });
  }

  if (!id) {
    return parseServerActionResponse({
      error: "Project ID is required",
      status: "ERROR",
    });
  }

  try {
    // Check if project exists
    const project = await client.fetch(
      `*[_type == "project" && _id == $id][0]`,
      { id }
    );

    if (!project) {
      return parseServerActionResponse({
        error: "Project not found",
        status: "ERROR",
      });
    }

    // Ensure the user is the project owner
    if (project.author?._ref !== session.id) {
      return parseServerActionResponse({
        error: "Unauthorized to delete this project",
        status: "ERROR",
      });
    }

    await writeClient.delete(id);

    return parseServerActionResponse({
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Delete Project Error:", error);
    return parseServerActionResponse({
      error: error instanceof Error ? error.message : JSON.stringify(error),
      status: "ERROR",
    });
  }
};
