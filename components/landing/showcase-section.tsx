import { SHOWCASE_PROJECT_QUERY } from "@/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Author } from "@/sanity/types";
import { Eye } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { cn, defineNewProduct } from "@/lib/utils";
import Link from "next/link";

const ShowcaseSection = async () => {
  const { data: authors } = await sanityFetch({
    query: SHOWCASE_PROJECT_QUERY,
  });
  const isNew = defineNewProduct(authors?._createdAt);
  return (
    <>
      <section id="showcase" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portfolio Showcase</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Check out these amazing portfolios created by our users
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Example 1 */}
            {authors.length > 0 ? (
              authors.map((author: Author) => (
                <div
                  key={author._id}
                  className="border-2 border-black rounded-xl overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="relative">
                    <Image
                      src={author.image || "https://placehold.co/600x400/png"}
                      alt={author?.username || "author"}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    {isNew && (
                      <p
                        className={cn(
                          buttonVariants({ variant: "yellow", size: "sm" }),
                          "rounded-full group-hover:bg-amber-200 group-hover:border-amber-300"
                        )}
                      >
                        🔥 New
                      </p>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                        <Image
                          src={
                            author.image || "https://placehold.co/600x400/png"
                          }
                          alt="User"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{author.name}</h3>
                        <p className="text-sm text-gray-600">
                          @{author.username}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end w-full items-center mt-4">
                      <Link
                        href={`/u/${author.username}`}
                        className={cn(buttonVariants({}), "")}
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No user</p>
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/showcase`}
              className="inline-block px-8 py-3 bg-[#FF8A00] border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              View More Portfolios
            </Link>
          </div>
        </div>
      </section>
      <SanityLive />
    </>
  );
};

export default ShowcaseSection;
