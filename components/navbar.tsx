import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { Author } from "@/sanity/types";
import {
  AlignJustify,
  Ellipsis,
  LogOut,
  MessageCircleMore,
  Share2,
} from "lucide-react";
import Link from "next/link";
import AuthButton from "./auth/auth-button";
import { ModeToggle } from "./mode-toggle";

const NAVBAR_ITEMS = [
  {
    lable: "Blog",
    path: "/blog",
  },
  {
    lable: "About",
    path: "/about",
  },
];

const Navbar = async ({ user }: { user: Author }) => {
  const session = await auth();

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-[#FCFCFC] dark:bg-background border-b">
      <div className="flex justify-between items-center section-container py-3 sm:py-4 md:py-5 mx-auto px-4 sm:px-6">
        {/* Logo and User Info */}
        <div className="flex gap-2 items-center">
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black dark:border-neutral-600">
            <AvatarImage src={user.image} alt={user.name || "User"} />
            <AvatarFallback className="bg-[#FF8A00] text-black font-bold">
              {user.name?.charAt(0) || "P"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
              <Link href={`/u/${user.username}`}>{user.name || "Portify"}</Link>
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-neutral-500 dark:text-neutral-400 font-medium text-xs">
                Available to work
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex gap-2 items-center hidden">
          {NAVBAR_ITEMS.map((navbar, index) => (
            <Link
              href={navbar.path}
              key={index}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "font-medium"
              )}
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
                    "rounded-full border-2 border-black dark:border-neutral-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
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
                <DropdownMenuContent className="border-2 border-black dark:border-neutral-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <DropdownMenuLabel>
                    <div className="flex gap-2 items-center">
                      <Avatar className="w-5 h-5 border border-black dark:border-neutral-600">
                        <AvatarImage
                          src={
                            session?.user?.image ||
                            "https://github.com/shadcn.png"
                          }
                          alt="portolity"
                        />
                        <AvatarFallback className="bg-[#FF8A00] text-black text-xs font-bold">
                          {session?.username?.charAt(0) || "P"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="text-sm font-semibold">
                          <Link href={`/u/${session?.username}`}>
                            {session?.username || "Portify"}
                          </Link>
                        </h1>
                        <p className="text-neutral-500 dark:text-neutral-400 font-medium text-xs">
                          {session?.user.email}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <div className="mt-auto p-2">
                    <AuthButton
                      action="signout"
                      icon={<LogOut size={16} className="mr-2" />}
                      className="w-full"
                    >
                      Logout
                    </AuthButton>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <AuthButton action="signin" redirectToAuth={true} />
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-1 sm:gap-2 items-center lg:hidden">
          {session?.id === user._id && (
            <Link
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
              href={"/messages"}
            >
              <MessageCircleMore size={18} className="sm:size-20" />
            </Link>
          )}

          <Button variant={"ghost"} size={"icon"}>
            <Share2 size={18} className="sm:size-20" />
          </Button>

          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant={"amber"}
                size={"icon"}
                className="border-2 border-black dark:border-neutral-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <AlignJustify size={18} className="sm:size-20" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l-2 border-black dark:border-neutral-600 shadow-[-4px_0px_0px_0px_rgba(0,0,0,0.1)] p-0 w-[75%] sm:max-w-sm"
            >
              <div className="h-full flex flex-col p-6">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-4">
                  {NAVBAR_ITEMS.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="text-lg font-medium py-2 border-b border-neutral-200 dark:border-neutral-800 hover:text-[#FF8A00] transition-colors"
                    >
                      {item.lable}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 flex-grow">
                  {session && session?.user ? (
                    <>
                      <div className="flex items-center gap-3 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-4">
                        <Avatar className="w-10 h-10 border-2 border-black dark:border-neutral-600">
                          <AvatarImage
                            src={
                              session?.user?.image ||
                              "https://github.com/shadcn.png"
                            }
                            alt="User"
                          />
                          <AvatarFallback className="bg-[#FF8A00] text-black font-bold">
                            {session?.username?.charAt(0) || "P"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">
                            {session?.username || "User"}
                          </h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {session?.user.email}
                          </p>
                        </div>
                      </div>

                      {session?.id === user._id && (
                        <Link
                          href="/project/create"
                          className={cn(
                            buttonVariants({ variant: "amber" }),
                            "w-full justify-center mb-4 border-2 border-black dark:border-neutral-600 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                          )}
                        >
                          New Project
                        </Link>
                      )}
                    </>
                  ) : (
                    <AuthButton
                      action="signin"
                      redirectToAuth={true}
                      className="w-full"
                    />
                  )}
                </div>

                {session && session?.user && (
                  <div className="mt-auto pt-4">
                    <AuthButton
                      action="signout"
                      icon={<LogOut size={16} className="mr-2" />}
                      className="w-full justify-center"
                    >
                      Logout
                    </AuthButton>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
