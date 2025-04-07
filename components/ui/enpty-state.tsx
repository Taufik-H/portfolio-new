import type React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface EmptyStateProps {
  title?: string;
  description?: string;
  illustration?: React.ReactNode;
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function EmptyState({
  title = "Nothing Found",
  description = "Sorry, there's nothing here yet.",
  illustration,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "w-full py-12 flex flex-col items-center justify-center min-h-100 bg-neutral-100 mt-5 rounded-2xl dark:bg-neutral-900",
        className
      )}
    >
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          {illustration || <p className="text-5xl">😒</p>}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

        {action && (
          <Link
            href={action.href}
            className={cn(
              buttonVariants({ variant: "amber" }),
              " brutalism-btn"
            )}
          >
            {action.label}
          </Link>
        )}
      </div>
    </div>
  );
}
