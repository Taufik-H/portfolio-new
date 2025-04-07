import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: () => "👩‍🎨",
  fields: [
    defineField({
      name: "id",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "profile_title",
      type: "string",
    }),
    {
      name: "role",
      type: "array",
      title: "Role",
      of: [{ type: "string" }], // Array of strings, bukan reference
    },
    {
      name: "skills",
      type: "array",
      title: "Skills",
      of: [{ type: "string" }], // Array of strings, bukan reference
    },
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
});
