import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Palette,
  PenSquare,
  Share2,
  Twitter,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/landing/hero-section";
import NavbarSection from "@/components/landing/navbar-section";
import FeatureSection from "@/components/landing/feature-section";
import StatisticSection from "@/components/landing/statistic-section";
import ShowcaseSection from "@/components/landing/showcase-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] dark:bg-background">
      <NavbarSection />
      <Hero />
      <FeatureSection />
      <ShowcaseSection />
      {/* Statistics Section */}
      <StatisticSection />

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Get your portfolio up and running in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#FFD180] border-2 border-black rounded-xl"></div>
              <Card className="relative border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Sign Up</h3>
                  <p className="text-gray-700">
                    Create your account in seconds and choose your unique
                    username.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#CCFF90] border-2 border-black rounded-xl"></div>
              <Card className="relative border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Customize</h3>
                  <p className="text-gray-700">
                    Add your projects, blog posts, and personalize your
                    portfolio.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#80D8FF] border-2 border-black rounded-xl"></div>
              <Card className="relative border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Share</h3>
                  <p className="text-gray-700">
                    Share your portfolio URL with the world and connect with
                    others.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#FF8A00] border-2 border-black rounded-xl"></div>
            <Card className="relative border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="pt-8 pb-8 px-8 md:px-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-4">
                    Ready to Showcase Your Work?
                  </h2>
                  <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                    Join thousands of creatives who are already using Portolity
                    to showcase their work and connect with others.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="px-8 py-3 bg-[#FF8A00] border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <Link href="/signup">Create Your Portfolio</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="px-8 py-3 border-2 border-black rounded-md font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    <Link href="#">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">P</span>
                </div>
                <span className="font-bold text-xl">Portolity</span>
              </div>
              <p className="text-gray-400">
                The all-in-one platform for creatives to showcase their work and
                connect with others.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Features</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Personal Profile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Project Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-gray-800 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Portolity. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
