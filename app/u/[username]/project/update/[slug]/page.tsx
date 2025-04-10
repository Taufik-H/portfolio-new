import React, { Suspense } from "react";
import EditProjectForm from "../_components/edit-project-form";
import { client } from "@/sanity/lib/client";
import { notFound, redirect } from "next/navigation";
import { CURRENT_USER_BY_USERNAME, PROJECT_BY_SLUG_QUERY } from "@/lib/queries";
import { auth } from "@/auth";
import { SanityLive } from "@/sanity/lib/live";

const UpdateProject = async ({
  params,
}: {
  params: Promise<{ slug: string; username: string }>;
}) => {
  const session = await auth();
  const username = (await params).username;

  // Ambil data user berdasarkan username
  const user = await client
    .withConfig({ useCdn: false })
    .fetch(CURRENT_USER_BY_USERNAME, { username });

  if (!user) return notFound(); // Jika user tidak ditemukan, tampilkan halaman 404
  if (session?.id !== user._id) return redirect("/"); // Jika bukan user yang sama, redirect

  const slug = (await params).slug;

  // Fetch project berdasarkan slug
  const post = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });

  if (!post) return notFound(); // Jika project tidak ditemukan, tampilkan halaman 404

  // Pastikan slug yang diakses sesuai dengan slug yang benar
  if (post.slug?.current && slug !== post.slug.current) {
    return redirect(`/u/${username}/project/${post.slug.current}`);
  }

  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <EditProjectForm previousData={post} />
      </Suspense>
      <SanityLive />
    </div>
  );
};

export default UpdateProject;
