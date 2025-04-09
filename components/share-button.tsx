"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Facebook, Twitter, Linkedin, Share2, Mail } from "lucide-react";
import { TbBrandTelegram } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-hot-toast"; // 🔥 Import toast

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

const ShareModal = ({ username }: { username: string }) => {
  const [shareUrl, setShareUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // 🔹 Untuk mencegah hydration error
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}/u/${username}`);
    }
  }, [username]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);

    // 🔥 Custom toast dengan class `brutalism-border`
    toast.custom((t) => (
      <div
        className={cn(
          t.visible ?? "animate-enter",
          "brutalism-border bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-md shadow-md transition-all "
        )}
      >
        ✅ Link copied to clipboard!
      </div>
    ));
  };

  const sharePlatforms = [
    {
      icon: <Twitter size={24} />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      icon: <Linkedin size={24} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      icon: <Facebook size={24} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      icon: <FaWhatsapp size={24} />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`,
    },
    {
      icon: <TbBrandTelegram size={24} />,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      icon: <Mail size={24} />,
      url: `mailto:?subject=Check this out&body=${encodeURIComponent(
        shareUrl
      )}`,
    },
  ];

  const ShareContent = (
    <div className="flex flex-col gap-4">
      {/* Scrollable Icons */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar p-2">
        {sharePlatforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 border rounded-full hover:bg-gray-100 transition"
          >
            {platform.icon}
          </a>
        ))}
      </div>

      {/* Copy Link */}
      <div className="flex items-center justify-between border p-2 rounded-lg">
        <span className="truncate">{shareUrl}</span>
        <Button variant="ghost" size="icon" onClick={copyToClipboard}>
          <Copy size={20} />
        </Button>
      </div>
    </div>
  );

  if (!isClient) return null; // 🔹 Hindari hydration error dengan SSR check

  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Share2 size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] brutalism-border">
        <DialogHeader>
          <DialogTitle>Share this profile</DialogTitle>
        </DialogHeader>
        {ShareContent}
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost">
          <Share2 size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Share this profile</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">{ShareContent}</div>
        <div className="p-4">
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ShareModal;
