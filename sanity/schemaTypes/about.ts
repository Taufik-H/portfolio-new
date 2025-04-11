import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",

  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "about_description",
      type: "markdown",
    }),
  ],
});
