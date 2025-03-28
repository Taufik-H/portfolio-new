import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(20)
          .error("Category must be between 3 and 20 characters"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author.name",
    },
  },
});
