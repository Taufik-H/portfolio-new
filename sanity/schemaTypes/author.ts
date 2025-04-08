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
      of: [
        {
          type: "object",
          name: "skill",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "url",
              // Opsional, jadi tidak perlu `Rule.required()`
            }),
          ],
        },
      ],
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
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Student", value: "student" },
          { title: "Available for Hiring", value: "available_for_hiring" },
          { title: "Available to Work", value: "available_to_work" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
});
