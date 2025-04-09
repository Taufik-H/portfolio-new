import { signIn, signOut } from "@/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type React from "react";
import { Button, buttonVariants } from "../ui/button";

type AuthButtonProps = {
  icon?: React.ReactNode;
  children?: React.ReactNode;
} & (
  | {
      action: "signin";
      provider?: string;
      redirectToAuth?: boolean;
      className?: string;
      disabled?: boolean;
    }
  | {
      disabled?: boolean;
      action: "signout";
      redirectTo?: string;
      className?: string;
    }
);

const AuthButton = async ({ icon, children, ...props }: AuthButtonProps) => {
  // Common button styles
  const buttonStyle =
    "border-2 border-black dark:border-neutral-600 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2";

  // For sign in with redirect to auth page
  if (props.action === "signin" && props.redirectToAuth) {
    return (
      <Link
        href="/auth"
        className={cn(buttonVariants({}), buttonStyle, props.className)}
      >
        {icon}
        {children || `Login ${props.provider ? `with ${props.provider}` : ""}`}
      </Link>
    );
  }

  // For direct sign in or sign out
  return (
    <form
      action={async () => {
        "use server";
        if (props.action === "signin") {
          await signIn(props.provider || "credentials");
        } else {
          await signOut();
        }
      }}
    >
      <Button
        disabled={props.disabled}
        type="submit"
        className={cn(
          buttonStyle,
          props.action === "signout" ? "bg-red-600 hover:bg-red-700" : "",
          props.className
        )}
      >
        {icon}
        {children ||
          (props.action === "signin"
            ? `Login ${props.provider ? `with ${props.provider}` : ""}`
            : "Logout")}
      </Button>
    </form>
  );
};

export default AuthButton;
