import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.required().min(1).error("At least one category is required"),
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
