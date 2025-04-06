"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Author } from "@/sanity/types";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Session } from "next-auth";

type NavItem = {
  lable: string;
  path: string;
};

interface MobileMenuButtonProps {
  navItems: NavItem[];
  user: Author;
  session: Session;
  authPath: string;
}

export function MobileMenuButton({
  navItems,
  user,
  session,
  authPath,
}: MobileMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant={"amber"}
        size={"icon"}
        className="border-2 border-black dark:border-neutral-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
        onClick={() => setIsOpen(true)}
      >
        <AlignJustify size={18} className="sm:size-20" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-background border-l-2 border-black dark:border-neutral-600 shadow-[-4px_0px_0px_0px_rgba(0,0,0,0.1)] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <X size={24} />
              </Button>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-lg font-medium py-2 border-b border-neutral-200 dark:border-neutral-800 hover:text-[#FF8A00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.lable}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
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
                      onClick={() => setIsOpen(false)}
                    >
                      New Project
                    </Link>
                  )}

                  {/* <form
                    action={async () => {
                      "use server"
                      await signOut({ redirectTo: "/" })
                    }}
                  >
                    <Button
                      type="submit"
                      variant={"destructive"}
                      className="w-full justify-center border border-red-800"
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </Button>
                  </form> */}
                </>
              ) : (
                <Link
                  href={authPath}
                  className={cn(
                    buttonVariants({}),
                    "w-full border-2 border-black dark:border-neutral-600 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
