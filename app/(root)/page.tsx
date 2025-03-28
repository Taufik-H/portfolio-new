import ProjectCard from "@/components/project-card";
import SearchForm from "@/components/search-form";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date("2025-03-25T00:00:00.000Z"),
      views: 55,
      author: { _id: 1, name: "taufik-h" },
      _id: 1,
      description:
        "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ab, corporis et iusto, veniam nesciunt tenetur officia voluptatem aperiam quam sequi eligendi commodi dolorem molestias! Saepe dolores consequatur modi architecto!",
      image: "https://placehold.co/600x400",
      category: "agency",
      title: "uiux",
    },
  ];
  return (
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
            posts.map((post: PostCardType, index: number) => (
              <ProjectCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No Project Found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
