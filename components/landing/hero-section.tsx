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
      <section className="container mx-auto px-4 py-16 md:py-30">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#E0F7FA] dark:bg-neutral-800 border-2 border-black dark:border-neutral-500 rounded-full font-medium">
              Launch Your Portfolio
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              Where <span className="text-[#FF8A00]">Creativity</span> Meets{" "}
              <span className="text-[#FF8A00]">Portfolio</span> Magic
            </h1>
            <p className="text-xl text-gray-700">
              Showcase your work, connect with others, and build your personal
              brand with our all-in-one portfolio platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {session && session.id ? (
                <div className="flex gap-2 items-center">
                  <Link
                    href={`/u/${session.username}`}
                    className={cn(
                      buttonVariants({ variant: "amber" }),
                      "rounded-full"
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
                >
                  <Button type="submit" variant={"amber"}>
                    Create Your Portfolio
                  </Button>
                </form>
              )}

              <Link
                className={buttonVariants({ variant: "outline" })}
                href="#testimonials"
              >
                See Testimonials
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#E0F7FA] dark:bg-neutral-500 border-2 border-black rounded-2xl"></div>
            <div className="relative border-2 border-black rounded-2xl overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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
