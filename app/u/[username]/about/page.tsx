import { Button, buttonVariants } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/enpty-state";
import { CURRENT_USER_BY_USERNAME } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
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
      <div className="flex gap-4 items-center my-8 ">
        <Link
          href={`/u/${username}`}
          className={buttonVariants({ variant: "brutalism" })}
        >
          Back
        </Link>
        <h2 className=" font-black  text-center">About</h2>
      </div>
      <EmptyState
        currentUser={username}
        title="No about yet!"
        description="I am Sorry..."
        action={{
          label: "check",
          href: "#",
        }}
      />
    </div>
  );
};

export default About;
