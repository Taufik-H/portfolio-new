import ProjectCard, { ProjectCardType } from "@/components/project-card";
import SearchForm from "@/components/search-form";
import { PROJECT_BY_USER_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
export const experimental_ppr = true;
export default async function User({
  searchParams,
  params,
}: {
  searchParams: Promise<{ query?: string }>;
  params: Promise<{ username: string }>;
}) {
  const query = (await searchParams).query;
  const username = (await params).username;
  const projects = await client.fetch(PROJECT_BY_USER_QUERY, {
    username,
    search: query || null,
  });

  return (
    <>
      <section className="flex justify-between items-center">
        <h4 className="font-bold text-neutral-500 tracking-widest">
          {query ? `Search result for "${query}"` : "PROJECTS"}
        </h4>
        <SearchForm query={query} username={username} />
      </section>
      <section>
        <ul className="mt-7 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5">
          {projects.length > 0 ? (
            projects.map((project: ProjectCardType) => (
              <ProjectCard key={project?._id} post={project} />
            ))
          ) : (
            <p>No Project Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
