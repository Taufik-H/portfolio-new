import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { MessageCircleMore, Share2 } from "lucide-react";

const NAVBAR_ITEMS = [
  {
    lable: "Blog",
    path: "/blog",
  },
  {
    lable: "about",
    path: "/about",
  },
];

const Navbar = async () => {
  const session = await auth();
  return (
    <div className=" flex justify-between items-center p-2 max-w-7xl py-5 mx-auto">
      <div className="flex gap-2 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">
          <h1 className="text-lg font-semibold">Taufik-H</h1>
          <p className="text-neutral-500 font-medium text-xs">
            Available to work
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {NAVBAR_ITEMS.map((navbar, index) => (
          <Link
            href={navbar.path}
            key={index}
            className={cn(buttonVariants({ variant: "ghost" }), "font-medium")}
          >
            {navbar.lable}
          </Link>
        ))}
        <Link
          className={cn(buttonVariants({ variant: "ghost" }))}
          href={"/messages"}
        >
          <MessageCircleMore size={20} />
        </Link>
        <Button variant={"ghost"}>
          <Share2 size={20} />
        </Button>
        <ModeToggle />
        {session && session?.user ? (
          <div className="flex gap-2 items-center">
            <Link href="/project/create" className={cn(buttonVariants({}))}>
              New Project
            </Link>
            <Link href={`/profile/${session.user.id}`}>
              {session.user.name}
            </Link>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <Button type="submit">Logout</Button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button type="submit">Login</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
