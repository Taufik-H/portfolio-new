import { auth, signIn } from "@/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

const Hero = async () => {
  const session = await auth();

  return (
    <>
      {/* Hero Section */}
      <section className="section-container mx-auto px-4 py-8 mt-20  lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ">
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1 text-center md:text-left">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 sm:mt-8 md:mt-10 bg-[#E0F7FA] dark:bg-neutral-800 border-2 border-black dark:border-neutral-500 rounded-full text-xs sm:text-base font-medium">
              Launch Your Portfolio
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight py-5">
              Where <span className="text-[#FF8A00]">Creativity</span> Meets{" "}
              <span className="text-[#FF8A00]">Portfolio</span> Magic
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Showcase your work, connect with others, and build your personal
              brand with our all-in-one portfolio platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              {session && session.id ? (
                <div className="flex gap-2 items-center w-full sm:w-auto">
                  <Link
                    href={`/u/${session.username}`}
                    className={cn(
                      buttonVariants({ variant: "amber" }),
                      "rounded-full w-full sm:w-auto justify-center"
                    )}
                  >
                    Create Your Portfolio
                  </Link>
                </div>
              ) : (
                <form
                  action={async () => {
                    "use server";
                    await signIn("github");
                  }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="submit"
                    variant={"amber"}
                    className="w-full sm:w-auto rounded-full"
                  >
                    Create Your Portfolio
                  </Button>
                </form>
              )}

              <Link
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full sm:w-auto justify-center rounded-full"
                )}
                href="#testimonials"
              >
                See Testimonials
              </Link>
            </div>
          </div>
          <div className="relative order-1 md:order-2 mx-auto md:mx-0 max-w-[90%] sm:max-w-[80%] md:max-w-full">
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-full h-full bg-[#E0F7FA] dark:bg-neutral-500 border-2 border-black rounded-xl sm:rounded-2xl"></div>
            <div className="relative border-2 border-black rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="https://placehold.co/600x400/png"
                alt="Portfolio showcase"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
