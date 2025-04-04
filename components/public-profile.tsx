import { Mail, Share2, User } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Author } from "@/sanity/types";
import { auth } from "@/auth";

export default async function PublicProfile({
  userData,
}: Readonly<{
  userData: Author;
}>) {
  // console.log("user data", userData);
  const session = await auth();
  const { bio, username, email, name, image, _id } = userData;
  return (
    <div className="flex flex-col gap-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center gap-5">
        <div className="w-full">
          {/* badges */}
          <div className="flex gap-3 items-center">
            <p className="uppercase font-semibold text-neutral-500">
              frontend engineer
            </p>
            <div className="h-2 w-2 bg-neutral-500 rounded-full" />
            <p className="uppercase font-semibold text-neutral-500">
              UIUX DESIGNER
            </p>
          </div>
          {/* title */}
          <div className="my-10 ">
            <h1 className="text-6xl font-bold capitalize text-wrap">{bio}</h1>
            <div className="flex gap-5 items-center text-neutral-500 mt-5">
              <div className="flex items-center gap-2">
                <Mail size={20} /> {email}
              </div>
              <div className="flex items-center gap-2">
                <User size={20} /> {username}
                {}
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant={"amber"} className="rounded-full">
              get in touch
            </Button>
            {_id === session?.id && (
              <Button variant={"outline"} className="rounded-full">
                edit profile
              </Button>
            )}
            <Button variant={"outline"} size={"icon"} className="rounded-full">
              <Share2 />
            </Button>
          </div>
          {/* flex direction : button (edit, get in touch & share) */}
        </div>
        <div className="w-full flex justify-end items-center">
          <Image
            alt="hero image"
            width={500}
            height={500}
            className="rounded-4xl h-[350px] w-[500px] max-h-[350px]"
            src={
              "https://images.unsplash.com/photo-1741620979760-bccef3bb5b17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>
    </div>
  );
}
