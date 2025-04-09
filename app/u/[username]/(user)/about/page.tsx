import { EmptyState } from "@/components/ui/enpty-state";
import { CURRENT_USER_BY_USERNAME } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";

const About = async ({ params }: { params: Promise<{ username: string }> }) => {
  const username = (await params).username;
  const user = await client
    .withConfig({ useCdn: false })
    .fetch(CURRENT_USER_BY_USERNAME, {
      username,
    });
  if (!user) return notFound();
  return (
    <div>
      <EmptyState
        currentUser={username}
        title="No about yet!"
        description="I am Sorry..."
      />
    </div>
  );
};

export default About;
