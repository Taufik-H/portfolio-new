import { PROJECT_VIEW_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { after } from "next/server";
import { writeClient } from "@/sanity/lib/write-client";
import { Eye } from "lucide-react";
import React from "react";

const PostView = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(PROJECT_VIEW_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );
  return (
    <>
      <div className="text-neutral-400 font-medium flex gap-2  items-center">
        <Eye size={15} strokeWidth={3} /> <p>{totalViews}</p>
      </div>
    </>
  );
};

export default PostView;
