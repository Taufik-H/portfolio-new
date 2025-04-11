import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { project } from "./project";
import { about } from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, project, about],
};
