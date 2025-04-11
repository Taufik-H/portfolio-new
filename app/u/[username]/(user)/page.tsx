import { auth } from "@/auth";
import ProjectCard, { ProjectCardType } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/enpty-state";
import { CURRENT_USER_BY_USERNAME, PROJECT_BY_USER_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Suspense } from "react";

async function fetchUserData(params: { username: string }) {
  return await sanityFetch({
    query: CURRENT_USER_BY_USERNAME,
    params,
  });
}

async function fetchProjects(username: string, query?: string) {
  return await client
    .withConfig({ useCdn: false })
    .fetch(PROJECT_BY_USER_QUERY, {
      username,
      search: query || null,
    });
}

export default async function User({
  searchParams,
  params,
}: {
  searchParams: Promise<{ query?: string }>;
  params: Promise<{ username: string }>;
}) {
  const session = await auth();
  const sessionId = session?.id;
  const query = (await searchParams).query;
  const username = (await params).username;

  return (
    <>
      <Suspense fallback={<p>Loading user data...</p>}>
        <UserSkills params={{ username }} />
      </Suspense>

      <Suspense fallback={<p>Loading projects...</p>}>
        <UserProjects username={username} query={query} sessionId={sessionId} />
      </Suspense>

      <SanityLive />
    </>
  );
}

async function UserSkills({ params }: { params: { username: string } }) {
  const { data: user } = await fetchUserData(params);

  return (
    <section>
      {user?.skills && user.skills.length > 0 && (
        <>
          <h4 className="font-bold text-neutral-500 tracking-widest">SKILLS</h4>
          <div className="flex flex-wrap gap-4 my-4">
            {user.skills.map(
              (skill: { name: string; image?: string }, i: number) => (
                <Button key={i} className="brutalism-border" variant={"ghost"}>
                  {skill.image && (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-4 h-4 mr-2"
                    />
                  )}
                  {skill.name}
                </Button>
              )
            )}
          </div>
        </>
      )}
    </section>
  );
}

async function UserProjects({
  username,
  query,
  sessionId,
}: {
  username: string;
  query?: string;
  sessionId?: string;
}) {
  const projects = await fetchProjects(username, query);
  return (
    <section>
      <h4 className="font-bold text-neutral-500 tracking-widest">PROJECTS</h4>
      {projects.length > 0 ? (
        <div className="mt-7 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5">
          {projects.map((project: ProjectCardType) => (
            <ProjectCard
              key={project._id}
              post={project}
              sessionId={sessionId}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          currentUser={username}
          title="No project yet!"
          description="I am Sorry..."
          action={{
            label: "Create Project",
            href: `/u/${username}/project/create`,
          }}
        />
      )}
    </section>
  );
}
