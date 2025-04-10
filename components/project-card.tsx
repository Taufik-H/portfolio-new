"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, defineNewProduct, formatDate } from "@/lib/utils";
import { Author, Project } from "@/sanity/types";
import { PencilRuler, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { DeleteProject } from "./delete-project";

export type ProjectCardType = Omit<Project, "author"> & { author?: Author };

const ProjectCard = ({
  post,
  sessionId,
}: {
  post: ProjectCardType;
  sessionId?: string;
}) => {
  const { _createdAt, author, title, image, slug, _id } = post;
  const category = post?.category || undefined;
  const isNew = defineNewProduct(_createdAt);
  const pathname = usePathname();
  const isAuthor = sessionId === author?._id;
  return (
    <>
      <div className="brutalism-border brutalism-hover transition-all duration-300 ease-in-out dark:hover:bg-neutral-900 group">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-2 items-center">
            {category?.slice(0, 1).map((c, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                {c}
              </Button>
            ))}
            {(category?.length ?? 0) > 1 && (
              <span className="text-xs text-neutral-500">
                +{(category?.length ?? 0) - 1}
              </span>
            )}
          </div>
          {isNew && (
            <p
              className={cn(
                buttonVariants({ variant: "yellow", size: "sm" }),
                "rounded-full group-hover:bg-amber-200 group-hover:border-amber-300"
              )}
            >
              🔥 New
            </p>
          )}
        </div>

        <Link href={`${pathname}/project/${slug?.current}`}>
          <div className="w-full h-50 rounded-xl overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={image || ""}
              alt={title + " image"}
              className="h-full w-full object-center object-cover"
            />
          </div>
        </Link>

        <Link href={`${pathname}/project/${slug?.current}`}>
          <p className="text-2xl font-semibold capitalize my-2 line-clamp-1">
            {title}
          </p>
        </Link>

        <div className="flex gap-1 items-center">
          <Link href={`/u/${author?.username}`}>
            <Avatar className="w-5 h-5">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
          <Link href={`/user/${author?.username}`}>
            <p className="text-neutral-500 font-semibold text-xs border-r-2 pr-1">
              {author?.name}
            </p>
          </Link>
          <p className="text-neutral-500 font-semibold text-xs">
            {formatDate(new Date(_createdAt))}
          </p>
        </div>

        <Separator className="my-3" />
        <div className="flex flex-wrap gap-2 justify-between items-center w-full ">
          <Link
            href={`${pathname}/project/${slug?.current}`}
            className={cn(
              buttonVariants({ variant: "amber" }),
              "rounded-lg flex-1 text-center w-full"
            )}
          >
            Details
          </Link>
          {isAuthor && (
            <>
              <Link
                href={`${pathname}/project/update/${slug?.current}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "rounded-lg text-center"
                )}
              >
                <PencilRuler />
              </Link>
              <DeleteProject id={_id} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
