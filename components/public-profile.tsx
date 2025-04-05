import { Mail, Share2, User } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Author } from "@/sanity/types";
import { auth } from "@/auth";

export default async function PublicProfile({
  userData,
  children,
}: Readonly<{
  children: React.ReactNode;
  userData: Author;
}>) {
  // console.log("user data", userData);
  const session = await auth();
  const { bio, username, email, _id } = userData;
  return (
    <div className="flex flex-col gap-5 py-10">
      <section className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ">
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1 text-center md:text-left">
            <div className="flex gap-2 items-center text-xs md:text-base text-center md:text-left justify-center md:justify-normal">
              <p className="uppercase font-semibold text-neutral-500">
                frontend engineer
              </p>
              <div className="h-2 w-2 bg-neutral-500 rounded-full" />
              <p className="uppercase font-semibold text-neutral-500">
                UIUX DESIGNER
              </p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight py-4 md:py-5">
              {bio}
            </h1>
            <div className="flex gap-5 items-center text-neutral-500 mt-5 justify-center md:justify-normal">
              <div className="flex items-center gap-2 text-xs md:text-base">
                <Mail size={20} /> {email}
              </div>
              <div className="flex items-center gap-2 text-xs md:text-base">
                <User size={20} /> {username}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button variant={"amber"} className="rounded-full">
                get in touch
              </Button>
              {_id === session?.id && (
                <Button variant={"outline"} className="rounded-full">
                  edit profile
                </Button>
              )}
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full hidden md:flex"
              >
                <Share2 />
              </Button>
            </div>
          </div>
          <div className="relative order-1 md:order-2 mx-auto md:mx-0 md:max-w-full flex justify-center lg:justify-end">
            <Image
              alt="hero image"
              width={500}
              height={500}
              className="rounded-4xl h-[300px] max-h-[300px] md:h-[350px] w-[500px] md:max-h-[350px] object-cover object-center"
              src={
                "https://images.unsplash.com/photo-1741620979760-bccef3bb5b17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
        </div>
      </section>

      <div className="pt-5 md:pt-0">{children}</div>
    </div>
  );
}
