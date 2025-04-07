import { defineField, defineType } from "sanity";

export const userStatus = defineType({
  name: "user_status",
  title: "User Status",
  type: "document",
  fields: [
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
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
  ],
});
