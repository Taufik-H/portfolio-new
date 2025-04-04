import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Author } from "@/sanity/types";
import { Ellipsis, LogOut, MessageCircleMore, Share2 } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

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

const Navbar = async ({ user }: { user: Author }) => {
  const session = await auth();

  return (
    <div className=" flex justify-between items-center container py-5 mx-auto">
      <div className="flex gap-2 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src={user.image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">
          <h1 className="text-lg font-semibold">
            <Link href={`/u/${user.username}`}>{user.name || "Portify"}</Link>
          </h1>
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
        {session?.id === user._id && (
          <Link
            className={cn(buttonVariants({ variant: "ghost" }))}
            href={"/messages"}
          >
            <MessageCircleMore size={20} />
          </Link>
        )}
        <Button variant={"ghost"}>
          <Share2 size={20} />
        </Button>
        <ModeToggle />
        {session && session?.user ? (
          <div className="flex gap-2 items-center">
            {session?.id === user._id && (
              <Link
                href="/project/create"
                className={cn(
                  buttonVariants({ variant: "amber" }),
                  "rounded-full"
                )}
              >
                New Project
              </Link>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size={"icon"} variant={"ghost"}>
                  <Ellipsis />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <div className="flex gap-2 items-center">
                    <Avatar className="w-5 h-5">
                      <AvatarImage
                        src={
                          session?.user?.image ||
                          "https://github.com/shadcn.png"
                        }
                        alt="portolity"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="">
                      <h1 className="text-sm font-semibold">
                        <Link href={`/u/${session?.username}`}>
                          {session?.username || "Portify"}
                        </Link>
                      </h1>
                      <p className="text-neutral-500 font-medium text-xs">
                        {session?.user.email}
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/" });
                    }}
                  >
                    <Button
                      type="submit"
                      variant={"destructive"}
                      size={"sm"}
                      className="w-full justify-start"
                    >
                      <LogOut size={20} />
                      Logout
                    </Button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
