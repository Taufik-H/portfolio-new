"use client";
import { Button } from "@/components/ui/button";
import { createAbout } from "@/lib/actions";
import { aboutSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { Eye, PencilRuler } from "lucide-react";
import { useTheme } from "next-themes";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AboutForm = () => {
  const [aboutDescription, setAboutDescription] = useState("");
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const router = useRouter();
  const { username } = useParams();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      about_description: "",
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setValue("about_description", aboutDescription);
  }, [aboutDescription, setValue]);

  const onSubmit = async () => {
    try {
      const result = await createAbout(aboutDescription);
      console.log(result);

      if (result.status === "SUCCESS") {
        toast.success("Cool, you're done!");
        router.push(`/u/${username}/about/`);
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
      <div className="flex gap-4 items-center my-8 ">
        <Button type="button" onClick={() => router.back()} variant="brutalism">
          Back
        </Button>
        <h2 className="font-black text-center">Create About</h2>
      </div>

      {isClient && (
        <div className="mb-8" data-color-mode={theme || "system"}>
          <div className="flex justify-between items-center flex-col md:flex-row w-full">
            <label
              htmlFor="pitch"
              className="block text-lg font-bold mb-2 w-full"
            >
              About you <br />
              <span className="text-xs font-normal italic text-neutral-500 w-full">
                - describe your self down bellow as good as you can, use
                markdown format
              </span>
            </label>
            <div className="flex justify-end mb-2 w-full">
              <Button
                type="button"
                variant="ghost"
                className="w-full md:w-fit brutalism-btn"
                onClick={() => setIsPreviewMode(!isPreviewMode)}
              >
                {isPreviewMode ? (
                  <>
                    <PencilRuler size={20} /> Edit
                  </>
                ) : (
                  <>
                    <Eye size={20} /> Preview
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Jika mode preview, tampilkan full preview */}
          {isPreviewMode ? (
            <div className="p-4 brutalism-border bg-white dark:bg-gray-900 min-h-[300px]">
              <MDEditor.Markdown source={aboutDescription} />
            </div>
          ) : (
            <MDEditor
              value={aboutDescription}
              onChange={(value) => setAboutDescription(value as string)}
              id="pitch"
              height={300}
              preview="edit"
              className="brutalism-border pressable min-h-40 h-fit"
              textareaProps={{
                placeholder: "Describe your project nicely!",
              }}
              previewOptions={{
                disallowedElements: ["style"],
              }}
            />
          )}

          {errors.about_description && (
            <p className="text-red-600 mt-1 font-bold">
              {errors.about_description.message}
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
        {isSubmitting ? "Creating..." : "Create about"}
      </Button>
    </form>
  );
};

export default AboutForm;
