"use client";
import { useEffect, useState, type KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";

const ProjectForm = () => {
  const [error, setError] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  //   const [categoryInput, setCategoryInput] = useState("");
  //   const [categories, setCategories] = useState<string[]>([]);

  //   const handleAddCategory = () => {
  //     if (categoryInput.trim() && !categories.includes(categoryInput.trim())) {
  //       setCategories([...categories, categoryInput.trim()]);
  //       setCategoryInput("");
  //     }
  //   };

  //   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  //     if (e.key === "Enter" || e.key === ",") {
  //       e.preventDefault();
  //       handleAddCategory();
  //     }
  //   };

  //   const removeCategory = (category: string) => {
  //     setCategories(categories.filter((cat) => cat !== category));
  //   };

  return (
    <form action={() => {}}>
      <h2 className="text-3xl font-black mb-8 text-center">Create Project</h2>

      <div className="mb-6">
        <label htmlFor="title" className="block text-lg font-bold mb-2">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="brutalism-border pressable"
          required
          placeholder="Enter project title"
        />
        {error.title && (
          <p className="text-red-600 mt-1 font-bold">{error.title}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-lg font-bold mb-2">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="brutalism-border pressable min-h-20"
          required
          placeholder="Describe your project"
        />
        {error.description && (
          <p className="text-red-600 mt-1 font-bold">{error.description}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="category" className="block text-lg font-bold mb-2">
          Category
        </label>
        <Textarea
          id="category"
          name="category"
          className="brutalism-border pressable"
          required
          placeholder="category"
        />
        {error.category && (
          <p className="text-red-600 mt-1 font-bold">{error.category}</p>
        )}
      </div>

      {/* <div className="mb-6">
        <label htmlFor="category" className="block text-lg font-bold mb-2">
          Categories
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gray-100 border-2 border-black rounded-lg px-3 py-1 flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <span>{category}</span>
              <button
                type="button"
                onClick={() => removeCategory(category)}
                className="text-black hover:text-red-600"
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
            className="brutalism-border pressable"
            placeholder="Type category and press Enter or comma"
          />
          <Button
            type="button"
            onClick={handleAddCategory}
            className="border-4 border-black bg-yellow-300 text-black font-bold rounded-lg h-14 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Add
          </Button>
        </div>
        <input type="hidden" name="categories" value={categories.join(",")} />
        {error.category && (
          <p className="text-red-600 mt-1 font-bold">{error.category}</p>
        )}
      </div> */}

      <div className="mb-8">
        <label htmlFor="link" className="block text-lg font-bold mb-2">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="brutalism-border pressable"
          required
          placeholder="Enter image URL"
        />
        {error.link && (
          <p className="text-red-600 mt-1 font-bold">{error.link}</p>
        )}
      </div>
      {isClient && (
        <div className="mb-8" data-color-mode={theme || "system"}>
          <label htmlFor="pitch" className="block text-lg font-bold mb-2">
            Let people know about your project
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
          {error.pitch && (
            <p className="text-red-600 mt-1 font-bold">{error.pitch}</p>
          )}
        </div>
      )}

      <Button type="submit" variant={"amber"} className="w-full">
        Submit Project
      </Button>
    </form>
  );
};

export default ProjectForm;
