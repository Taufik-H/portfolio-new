import { auth, signIn, signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
const NavbarSection = async () => {
  const session = await auth();
  return (
    <header className="fixed top-0 w-full bg-[#FCFCFC] dark:bg-neutral-900 z-50 left-0">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="font-bold text-xl">Portolity</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="font-medium hover:underline">
            Features
          </Link>
          <Link href="#testimonials" className="font-medium hover:underline">
            Testimonials
          </Link>
          <Link href="#how-it-works" className="font-medium hover:underline">
            How it works
          </Link>
          {/* <Link href="#faq" className="font-medium hover:underline">
          FAQ
        </Link> */}
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <>
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={
                        session?.user?.image || "https://github.com/shadcn.png"
                      }
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </>
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
                        {session?.user?.email}
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
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <Button type="submit" variant={"amber"}>
                Login
              </Button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavbarSection;
