import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import { Author } from "@/sanity/types";
import { Mail, Share2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

export default async function PublicProfile({
  userData,
  children,
}: Readonly<{
  children: React.ReactNode;
  userData: Author;
}>) {
  // console.log("user data", userData);
  const session = await auth();
  const { bio, username, email, _id, profile_title, role } = userData;

  return (
    <>
      <div className="flex flex-col gap-5 py-10">
        <section className="mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ">
            <div className="space-y-4 sm:space-y-6  order-2 md:order-1 text-center md:text-left">
              {/* role */}
              <div className="flex gap-2 items-center text-xs md:text-base text-center md:text-left justify-center md:justify-normal">
                {role && role.length > 0 ? (
                  role.map((r, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <p className="uppercase font-semibold text-neutral-500">
                        {r}
                      </p>
                      {index < role.length - 1 && (
                        <div className="h-2 w-2 bg-neutral-500 rounded-full" />
                      )}
                    </div>
                  ))
                ) : (
                  <p className="uppercase font-semibold text-neutral-500">
                    your role
                  </p>
                )}
              </div>
              {/* title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight py-5 capitalize">
                {profile_title || "This is The Title You Should Set"}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
                {bio ||
                  "If you are logged in using GitHub, this bio will be displayed. If you are using Google, you will have to set it manually."}
              </p>
              {/* contact */}
              <div className="flex gap-5 items-center text-neutral-500 mt-5 justify-center md:justify-normal">
                <div className="flex items-center gap-2 text-xs md:text-base">
                  <Mail size={20} /> {email}
                </div>
                <div className="flex items-center gap-2 text-xs md:text-base">
                  <User size={20} /> {username}
                </div>
              </div>
              {/* social */}
              <div className="flex"></div>
              {/* button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button
                  variant={"amber"}
                  className="rounded-full  brutalism-btn"
                >
                  get in touch
                </Button>
                {_id === session?.id && (
                  <Link
                    href={`/u/${session?.username}/edit/profile`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "rounded-full brutalism-btn"
                    )}
                  >
                    edit profile
                  </Link>
                )}
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-full hidden md:flex  brutalism-btn"
                >
                  <Share2 />
                </Button>
              </div>
            </div>
            <div className="relative order-1 md:order-2 mx-auto md:mx-0 max-w-[90%] sm:max-w-[80%] md:max-w-full">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-full h-full bg-[#E0F7FA] dark:bg-neutral-500 border-2 border-black rounded-xl sm:rounded-2xl"></div>
              <div className="relative border-2 border-black rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] aspect-[4/3]">
                <Image
                  src={
                    userData.cover_image ||
                    "https://placehold.co/1600x1200?text=1600x1200\nRecomended+Ratio+(4:3)"
                  }
                  alt="profile image"
                  width={1600}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="pt-5 md:pt-0">{children}</div>
      </div>
    </>
  );
}
