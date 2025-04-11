import { auth } from "@/auth";
import { buttonVariants } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/enpty-state";
import { ABOUT_BY_USERNAME_QUERY } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import MarkdownIt from "markdown-it";
import { Fredoka } from "next/font/google";
import Link from "next/link";
const fredoka = Fredoka({
  subsets: ["latin"],
});
const About = async ({ params }: { params: Promise<{ username: string }> }) => {
  const username = (await params).username;
  const session = await auth();
  const about = await client
    .withConfig({ useCdn: false })
    .fetch(ABOUT_BY_USERNAME_QUERY, { username });

  console.log("about", about);

  // Pastikan data diambil dari array
  const aboutData = about?.[0];
  const md = new MarkdownIt();
  const parsedContent = md.render(aboutData?.about_description || "");

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
      {aboutData ? ( // Pastikan aboutData ada
        <div
          className={cn(
            fredoka.className,
            "prose w-full max-w-none break-all dark:prose-neutral dark:prose-headings:text-neutral-50 prose-a:text-amber-500 dark:prose-p:text-white dark:prose-strong:text-white prose-a:decoration-0"
          )}
        >
          <article
            dangerouslySetInnerHTML={{ __html: parsedContent }}
            className="w-full"
          />
        </div>
      ) : (
        <EmptyState
          currentUser={username}
          title="No about yet!"
          description="I am Sorry..."
          action={{
            label: "check",
            href: `/u/${username}/about/${session?.id}/create`,
          }}
        />
      )}
    </div>
  );
};

export default About;
