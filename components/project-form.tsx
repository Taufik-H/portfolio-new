"use client";
import { useEffect, useState, type KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button, buttonVariants } from "@/components/ui/button";
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import { formSchema } from "@/lib/validation";
import type { z } from "zod";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { createProject } from "@/lib/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectForm = () => {
  const [pitch, setPitch] = useState("");
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [categoryInput, setCategoryInput] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const { username } = useParams();
  console.log(categories.length);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: [],
      link: "",
      pitch: "",
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setValue("pitch", pitch);
  }, [pitch, setValue]);

  useEffect(() => {
    setValue("category", categories);
  }, [categories, setValue]);

  const handleAddCategory = () => {
    if (categoryInput.trim() && !categories.includes(categoryInput.trim())) {
      setCategories([...categories, categoryInput.trim()]);
      setValue("category", categories);
      setCategoryInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddCategory();
    }
  };

  const removeCategory = (category: string) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("link", data.link);

      const result = await createProject(formData, pitch, categories);
      console.log(result);

      if (result.status === "SUCCESS") {
        toast.success("Cool, you're done!");
        router.push(`/u/${username}/project/${result.slug.current}`);
      } else {
        toast.error("Please check your input & try again!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4 items-center mb-8 ">
        <Button type="button" onClick={() => router.back()} variant="brutalism">
          Back
        </Button>
        <h2 className=" font-black  text-center">Edit Project</h2>
      </div>

      <div className="mb-6">
        <label htmlFor="title" className="block text-lg font-bold mb-2">
          Title
        </label>
        <Input
          id="title"
          className="brutalism-input"
          placeholder="Add a Title (e.g. UIUX Guidline)"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-600 mt-1 font-bold">{errors.title.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-lg font-bold mb-2">
          Subtitle{" "}
          <span className="text-xs font-normal italic text-neutral-500">
            - it will be shown under your title
          </span>
        </label>
        <Textarea
          id="description"
          className="brutalism-input min-h-16"
          placeholder="e.g. UIUX Guidline for portolity..."
          {...register("description")}
        />
        {errors.description && (
          <p className="text-red-600 mt-1 font-bold">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="category" className="block text-lg font-bold mb-2">
          Categories
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category) => (
            <div
              key={category}
              className={cn(
                buttonVariants({ variant: "brutalism", size: "sm" }),
                "bg-amber-500"
              )}
            >
              <span>{category}</span>
              <button
                type="button"
                onClick={() => removeCategory(category)}
                className="text-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            id="category"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="brutalism-input"
            placeholder="e.g. React, UI Design (Press ENTER or Comma)"
          />
          <Button
            type="button"
            onClick={handleAddCategory}
            variant={"brutalism"}
            className="h-full"
          >
            Add
          </Button>
        </div>
        <input type="hidden" name="categories" value={categories.join(",")} />
        {errors.category && (
          <p className="text-red-600 mt-1 font-bold">
            {errors.category.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <label htmlFor="link" className="block text-lg font-bold mb-2">
          Image URL <br />
          <span className="text-xs font-normal italic text-neutral-500">
            - it might be hard to find, sorry it's about storage issues 🤭
          </span>
        </label>
        <Input
          id="link"
          className="brutalism-input"
          placeholder="https://example.com/cover.jpg"
          {...register("link")}
        />
        {errors.link && (
          <p className="text-red-600 mt-1 font-bold">{errors.link.message}</p>
        )}
      </div>

      {isClient && (
        <div className="mb-8" data-color-mode={theme || "system"}>
          <label htmlFor="pitch" className="block text-lg font-bold mb-2">
            Description <br />
            <span className="text-xs font-normal italic text-neutral-500">
              - describe your project down bellow, use markdown format,also you
              can preview it on the right top of the editor
            </span>
          </label>
          <MDEditor
            value={pitch}
            onChange={(value) => setPitch(value as string)}
            id="pitch"
            preview="edit"
            height={300}
            className={"brutalism-border pressable min-h-40 h-fit"}
            textareaProps={{
              placeholder: "Describe your project nicely!",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />
          {errors.pitch && (
            <p className="text-red-600 mt-1 font-bold">
              {errors.pitch.message}
            </p>
          )}
        </div>
      )}

      <Button
        type="submit"
        variant={"amber"}
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default ProjectForm;
