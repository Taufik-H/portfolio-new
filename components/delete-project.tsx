"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Trash2 } from "lucide-react";
import { deleteProject } from "@/lib/actions";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

export function DeleteProject({ id }: { id: string }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await deleteProject(id);
      if (response.status === "SUCCESS") {
        setOpen(false);
        toast.custom((t) => (
          <div
            className={cn(
              t.visible ? "animate-enter" : "",
              "brutalism-border bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-md shadow-md transition-all"
            )}
          >
            ✅ Project deleted successfully!
          </div>
        ));
      } else {
        console.error(response.error);
        toast.custom((t) => (
          <div
            className={cn(
              t.visible ? "animate-enter" : "",
              "brutalism-border bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-md shadow-md transition-all"
            )}
          >
            ❌ Failed to delete project!
          </div>
        ));
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.custom((t) => (
        <div
          className={cn(
            t.visible ? "animate-enter" : "",
            "brutalism-border bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-md shadow-md transition-all"
          )}
        >
          ❌ An error occurred while deleting!
        </div>
      ));
    } finally {
      setLoading(false);
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive" size="icon" disabled={loading}>
            <Trash2 />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] brutalism-border">
          <DialogHeader>
            <DialogTitle>Delete Project</DialogTitle>
            <DialogDescription>
              Are you sure want to delete this project?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Sure!"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="destructive" size="icon" disabled={loading}>
          <Trash2 />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Delete Project</DrawerTitle>
          <DrawerDescription>
            Are you sure want to delete this project?
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="pt-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Sure!"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
