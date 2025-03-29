import ProjectCard, { ProjectCardType } from "@/components/project-card";
import SearchForm from "@/components/search-form";
import { PROJECT_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: PROJECT_QUERY, params });

  return (
    <>
      <div className="section-container">
        <div className="h-50 flex justify-center items-center text-4xl border-b-2 mb-10">
          here's the text
        </div>
        <section className="flex justify-between items-center">
          <h4 className="text-2xl font-medium">
            {query ? `Search result for "${query}"` : "All Projects"}
          </h4>
          <SearchForm query={query} />
        </section>
        <section>
          <ul className="mt-7 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5">
            {posts.length > 0 ? (
              posts.map((post: ProjectCardType, index: number) => (
                <ProjectCard key={post?._id} post={post} />
              ))
            ) : (
              <p>No Project Found</p>
            )}
          </ul>
        </section>
      </div>
      <SanityLive />
    </>
  );
}
