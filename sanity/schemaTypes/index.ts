import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { project } from "./project";
import { skills } from "./skills";
import { userStatus } from "./user-status";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, project, skills, userStatus],
};
