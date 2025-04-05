"use client";
import { cn, defineNewProduct, formatDate } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { EyeIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Author, Project } from "@/sanity/types";
import { usePathname } from "next/navigation";
import Image from "next/image";

export type ProjectCardType = Omit<Project, "author"> & { author?: Author };

const ProjectCard = ({ post }: { post: ProjectCardType }) => {
  const {
    _createdAt,
    author,
    title,
    views,
    category,
    image,
    description,

    slug,
  } = post;

  const isNew = defineNewProduct(_createdAt);
  const pathname = usePathname();
  return (
    <li className="rounded-2xl border-2 border-r-3 border-b-6 p-3 transition-all duration-300 ease-in-out hover:bg-amber-500/10 hover:border-amber-500/20 group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2 items-center">
          <Link
            href={`${pathname}/?query=${category?.toLowerCase()}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full bg-transparent hover:bg-transparent"
            )}
          >
            {category}
          </Link>
          <p
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full bg-transparent hover:bg-transparent"
            )}
          >
            <EyeIcon size={20} />
            {views}
          </p>
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
          <Avatar className="w-3 h-3">
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
      <Link href={`${pathname}/project/${slug?.current}`}>
        <p className="text-sm text-neutral-500 line-clamp-2 my-2">
          {description}
        </p>
      </Link>
      <Link
        href={`${pathname}/project/${slug?.current}`}
        className={cn(
          buttonVariants({ variant: "amber" }),
          "w-full rounded-lg"
        )}
      >
        Details
      </Link>
    </li>
  );
};

export default ProjectCard;
