import PostView from "@/components/post-view";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PROJECT_BY_SLUG_QUERY } from "@/lib/queries";
import { cn, formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { AlarmClock } from "lucide-react";
import markdownit from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import { Fredoka } from "next/font/google";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
const fredoka = Fredoka({
  subsets: ["latin"],
});
const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const post = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });

  if (!post) return notFound();
  const md = new markdownit();

  const parsedContent = md.render(post.pitch || "");

  return (
    <div>
      <div className="mt-15">
        <div className="flex flex-wrap justify-start items-start gap-2">
          {post.category.map((c: string, index: number) => (
            <p
              key={index}
              className={cn(
                buttonVariants({ variant: "yellow", size: "sm" }),
                "rounded-full mr-2"
              )}
            >
              {c}
            </p>
          ))}
        </div>
        <h1 className="text-2xl lg:text-4xl  font-semibold text-left text-amber-500 my-2">
          {post.title}
        </h1>
        <p className="text-neutral-400 font-medium">{post.description}</p>
      </div>
      <div className="w-full h-80 lg:h-120 rounded-3xl overflow-hidden relative my-5">
        <Image
          src={post.image}
          fill
          alt={post.title}
          className="absolute object-cover object-center"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.author.image} alt={post.author.username} />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <div className="">
            <p className="text-xs md:text-base lg:text-lg font-semibold leading-5 ">
              {post.author.name}
            </p>
            <p className="text-xs md:text-sm font-medium text-neutral-400">
              @{post.author.username}
            </p>
          </div>
        </div>
        <div className="flex items-end md:items-center justify-end md:gap-5 flex-col md:flex-row">
          {/* <Suspense fallback={<Skeleton className="w-10 h-5 rounded" />}>
            <PostView id={post._id} />
          </Suspense> */}
          <div className="text-neutral-400 font-medium flex gap-2  items-center text-xs md:text-base lg:text-lg">
            <AlarmClock size={15} strokeWidth={3} />{" "}
            {formatDate(new Date(post._createdAt))}
          </div>
        </div>
      </div>
      <hr className="my-10 divide-neutral-500" />
      <div className="my-10 w-full">
        {parsedContent ? (
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
          <p className="text-neutral-400 font-bold text-2xl my-50">
            No detail here!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
