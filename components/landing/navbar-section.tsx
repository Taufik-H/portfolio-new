import { auth } from "@/auth";
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
import { AlignJustify, LogOut } from "lucide-react";
import Link from "next/link";
import AuthButton from "../auth/auth-button";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const NAVBAR_ITEMS = [
  {
    label: "Features",
    path: "#features",
  },
  {
    label: "Showcase",
    path: "#showcase",
  },
  {
    label: "Testimonials",
    path: "#testimonials",
  },
  {
    label: "How it works",
    path: "#how-it-works",
  },
];

const NavbarSection = async () => {
  const session = await auth();
  return (
    <header className="fixed top-0 w-full bg-[#FCFCFC] dark:bg-background z-50 left-0 ">
      <div className="section-container mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 h-8 sm:h-10 sm:w-10 bg-[#FF8A00] border-2 border-black dark:border-neutral-600 rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-black font-bold text-sm sm:text-base">P</span>
          </div>
          <span className="font-bold text-lg sm:text-xl">Portolity</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAVBAR_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "font-medium"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ModeToggle />

          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black dark:border-neutral-600 cursor-pointer">
                  <AvatarImage
                    src={
                      session?.user?.image || "https://github.com/shadcn.png"
                    }
                    alt={session?.username || "User"}
                  />
                  <AvatarFallback className="bg-[#FF8A00] text-black font-bold">
                    {session?.username?.charAt(0) || "P"}
                  </AvatarFallback>
                </Avatar>
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
                        {session?.user?.email}
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <div className="p-2">
                  <AuthButton
                    action="signout"
                    icon={<LogOut size={16} className="mr-2" />}
                    className="w-full justify-start"
                  >
                    Logout
                  </AuthButton>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <AuthButton
              action="signin"
              redirectToAuth={true}
              className="hidden sm:flex"
            >
              Login
            </AuthButton>
          )}

          {/* Mobile Menu */}
          <div className="lg:hidden">
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
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8 flex-grow">
                    {!session && (
                      <AuthButton
                        action="signin"
                        redirectToAuth={true}
                        className="w-full"
                      >
                        Login
                      </AuthButton>
                    )}
                  </div>

                  {session && (
                    <div className="mt-auto pt-4">
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
                            {session?.user?.email}
                          </p>
                        </div>
                      </div>

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
    </header>
  );
};

export default NavbarSection;
