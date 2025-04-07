import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("skills").title("Skills"),
      S.documentTypeListItem("user_status").title("User Status"),
    ]);
