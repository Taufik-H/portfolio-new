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

// edit profile

export const editProfile = async (
  form: FormData,
  id: string,
  skills: any,
  role: any
) => {
  const {
    name,
    username,
    email,
    profile_title,
    bio,
    image,
    cover_image,
    status,
  } = Object.fromEntries(form);

  try {
    const updatedUser = await writeClient
      .patch(id) // Gunakan ID pengguna untuk patch
      .set({
        name,
        username,
        email,
        profile_title,
        bio,
        image,
        cover_image,
        status,
        skills,
        role,
      })
      .commit();

    return {
      data: updatedUser,
      error: "",
      status: "SUCCESS",
    };
  } catch (error) {
    console.error(error);
    return {
      error: JSON.stringify(error),
      status: "ERROR",
    };
  }
};
