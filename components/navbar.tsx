import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
const Navbar = async () => {
  const session = await auth();
  return (
    <div className="xl:px-20 flex justify-between items-center p-2 border-b-2">
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
