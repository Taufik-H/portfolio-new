import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12">
      <div className="section-container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-4 md:mb-0">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm sm:text-base">
                  P
                </span>
              </div>
              <span className="font-bold text-lg sm:text-xl">Portolity</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              The all-in-one platform for creatives to showcase their work and
              connect with others.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-4">
              Features
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Personal Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Blog Platform
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-4">
              Company
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-4">
              Legal
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 my-6 sm:my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © {new Date().getFullYear()} Portolity. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
