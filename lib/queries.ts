import { defineQuery } from "next-sanity";

export const PROJECT_QUERY = defineQuery(
  `*[_type =="project" && defined(slug.current) && !defined($search) || category match $search || author->name match $search || title match $search ] | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  author->{
    _id,name,image,bio
  },
  views,
  description,
  category,
  image
}`
);
export const PROJECT_BY_SLUG_QUERY = defineQuery(
  `*[_type =="project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  _createdAt,
  author->{
    _id,name,username,image,bio
  },
  views,
  description,
  category,
  image,
    pitch
}`
);

export const PROJECT_VIEW_QUERY = defineQuery(`
  *[_type =="project" && _id == $id][0]{
  _id, 
  views,
}
  `);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }
  `);
