import { auth } from "@/auth";
import ProjectForm from "@/components/project-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const CreateProject = () => {
  const session = auth();
  if (!session) redirect("/");

  return (
    <div>
      <Link
        href={"/"}
        className={cn(buttonVariants({ variant: "secondary" }), "rounded-2xl")}
      >
        <ChevronLeft size={20} /> Back
      </Link>
      <div className="my-5">
        <ProjectForm />
      </div>
    </div>
  );
};

export default CreateProject;
