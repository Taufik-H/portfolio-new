import { SHOWCASE_PROJECT_QUERY } from "@/lib/queries";
import { cn, defineNewProduct } from "@/lib/utils";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import type { Author } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

// Pisahkan fetching data ke komponen lain
const ShowcaseContent = async () => {
  const { data: authors } = await sanityFetch({
    query: SHOWCASE_PROJECT_QUERY,
  });
  return <ShowcaseGrid authors={authors} />;
};

// Komponen untuk menampilkan grid showcase
const ShowcaseGrid = ({ authors }: { authors: Author[] }) => {
  return authors.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {authors.map((author) => (
        <div
          key={author._id}
          className="border-2 border-black rounded-lg sm:rounded-xl overflow-hidden bg-white dark:bg-neutral-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-[-5px]"
        >
          <div className="relative w-full">
            <Image
              src={author.image || "https://placehold.co/600x400/png"}
              alt={author?.username || "author"}
              width={500}
              height={300}
              className="w-full h-40 sm:h-48 object-cover"
            />
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
                <Image
                  src={author.image || "https://placehold.co/600x400/png"}
                  alt={`${author.name}'s avatar`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="font-bold text-sm sm:text-base truncate">
                  {author.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                  @{author.username}
                </p>
              </div>
            </div>
            <div className="mt-3 sm:mt-4">
              <Link
                href={`/u/${author.username}`}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "w-full justify-center text-xs sm:text-sm py-1.5 sm:py-2 font-medium"
                )}
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
      <p className="text-gray-600 dark:text-gray-400">No users found</p>
    </div>
  );
};

// Komponen utama dengan Suspense
const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="section-container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
            Check out these amazing portfolios created by our users
          </p>
        </div>

        {/* Suspense untuk loading state */}
        <Suspense
          fallback={
            <div className="flex flex-col gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-20 rounded-xl mb-2" />
              ))}
            </div>
          }
        >
          <ShowcaseContent />
        </Suspense>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            href={`/showcase`}
            className={cn(buttonVariants({ variant: "amber", size: "lg" }))}
          >
            View More Portfolios
          </Link>
        </div>
      </div>
      <SanityLive />
    </section>
  );
};

export default ShowcaseSection;
