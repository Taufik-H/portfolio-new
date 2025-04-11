import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be at most 100 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(500, "Description must be at most 500 characters"),
  category: z
    .array(
      z
        .string()
        .min(3, "Category must be at least 3 characters")
        .max(20, "Category must be at most 20 characters")
        .regex(/^[a-zA-Z\s]+$/, "Category must only contain letters and spaces")
    )
    .min(1, "At least one category is required")
    .max(5, "A maximum of 5 categories are allowed"),
  link: z
    .string()
    .url("Invalid URL format")
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }, "Invalid image URL"),
  pitch: z.string().min(10, "Pitch must be at least 10 characters"),
});
export const aboutSchema = z.object({
  about_description: z
    .string()
    .min(10, "Description must be at least 10 characters"),
});

export const formProfileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  profile_title: z.string().optional(),
  bio: z.string().optional().optional(),
  image: z
    .string()
    .url("Invalid URL format")
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }, "Invalid image URL")
    .optional(),
  cover_image: z
    .string()

    .url("Invalid URL format")
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }, "Invalid image URL")
    .optional(),
  status: z.enum(["student", "available_for_hiring", "available_to_work"]),
});
