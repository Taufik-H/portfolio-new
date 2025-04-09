import ProjectCard, { ProjectCardType } from "@/components/project-card";
import { EmptyState } from "@/components/ui/enpty-state";
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
      <section className="flex justify-between items-center lg:mt-10">
        <h4 className="font-bold text-neutral-500 tracking-widest">PROJECTS</h4>
      </section>
      <section>
        {projects.length > 0 ? (
          projects.map((project: ProjectCardType) => (
            <div
              key={project?._id}
              className="mt-7 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5"
            >
              <ProjectCard post={project} />
            </div>
          ))
        ) : (
          <EmptyState
            currentUser={username}
            title="No project yet!"
            description="I am Sorry..."
            action={{
              label: "Create Project",
              href: "#",
            }}
          />
        )}
      </section>
    </>
  );
}
