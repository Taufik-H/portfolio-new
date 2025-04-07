import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import Link from "next/link";
import AuthButton from "../auth/auth-button";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const NavbarSection = async () => {
  const session = await auth();
  return (
    <header className="fixed top-0 w-full bg-[#FCFCFC] dark:bg-neutral-900 z-50 left-0">
      <div className="section-container mx-auto px-4 py-4 flex items-center justify-between">
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
          ) : (
            <AuthButton action="signin" redirectToAuth={true}>
              Login
            </AuthButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavbarSection;
