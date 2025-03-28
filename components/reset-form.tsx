"use client";
import React from "react";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";
import Link from "next/link";
const ResetForm = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <Link href="/">
      <Button
        type="button"
        size="icon"
        onClick={reset}
        className="rounded-full"
      >
        <RotateCcw size={20} />
      </Button>
    </Link>
  );
};

export default ResetForm;
