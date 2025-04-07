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
      of: [{ type: "string" }],
    },
    {
      name: "skills",
      type: "array",
      title: "Skills",
      of: [{ type: "string" }],
    },
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "cover_image",
      title: "Cover Image",
      type: "url",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
    defineField({
      name: "status",
      title: "User Status",
      type: "reference",
      to: [{ type: "user_status" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
});
