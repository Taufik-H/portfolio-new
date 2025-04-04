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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] dark:bg-background">
      <Hero />

      {/* Features Section */}
      <section
        id="features"
        className="py-16 md:py-24 bg-[#F5F5F5] dark:bg-neutral-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Everything you need to showcase your work and connect with others
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="w-14 h-14 bg-[#FFD180] border-2 border-black rounded-full flex items-center justify-center mb-4">
                  <User className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Personal Profile</CardTitle>
                <CardDescription className="text-base">
                  Get your own custom URL at /profile/@username to showcase your
                  work and skills.
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-4 border-t border-dashed border-gray-300 dark:border-neutral-700">
                <Link
                  href="#"
                  className="flex items-center font-medium text-[#FF8A00]"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="w-14 h-14 bg-[#CCFF90] border-2 border-black rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Project Gallery</CardTitle>
                <CardDescription className="text-base">
                  Add unlimited projects to your portfolio with images,
                  descriptions, and links.
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-4 border-t border-dashed border-gray-300">
                <Link
                  href="#"
                  className="flex items-center font-medium text-[#FF8A00]"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="w-14 h-14 bg-[#80D8FF] border-2 border-black rounded-full flex items-center justify-center mb-4">
                  <PenSquare className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Blog Platform</CardTitle>
                <CardDescription className="text-base">
                  Share your thoughts, tutorials, and insights with an
                  integrated blog system.
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-4 border-t border-dashed border-gray-300">
                <Link
                  href="#"
                  className="flex items-center font-medium text-[#FF8A00]"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="w-14 h-14 bg-[#EA80FC] border-2 border-black rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <CardDescription className="text-base">
                  Let visitors contact you directly through your portfolio with
                  our contact system.
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-4 border-t border-dashed border-gray-300">
                <Link
                  href="#"
                  className="flex items-center font-medium text-[#FF8A00]"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Feature 5 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="w-14 h-14 bg-[#FF80AB] border-2 border-black rounded-full flex items-center justify-center mb-4">
                  <Share2 className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Social Sharing</CardTitle>
                <CardDescription className="text-base">
                  Easily share your work on social media platforms with
                  integrated sharing tools.
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-4 border-t border-dashed border-gray-300">
                <Link
                  href="#"
                  className="flex items-center font-medium text-[#FF8A00]"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Feature 6 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="w-14 h-14 bg-[#B388FF] border-2 border-black rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Custom Themes</CardTitle>
                <CardDescription className="text-base">
                  Personalize your portfolio with custom themes, colors, and
                  layouts.
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-4 border-t border-dashed border-gray-300">
                <Link
                  href="#"
                  className="flex items-center font-medium text-[#FF8A00]"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portfolio Showcase</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Check out these amazing portfolios created by our users
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Example 1 */}
            <div className="border-2 border-black rounded-xl overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Portfolio example"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#FF8A00] text-white text-sm font-bold px-2 py-1 rounded-md border border-black">
                  New
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Alex Johnson</h3>
                    <p className="text-sm text-gray-600">UI/UX Designer</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Eye className="w-4 h-4 mr-1" /> 1.2k
                  </div>
                  <Link
                    href="#"
                    className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Example 2 */}
            <div className="border-2 border-black rounded-xl overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Portfolio example"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Sarah Miller</h3>
                    <p className="text-sm text-gray-600">Frontend Developer</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Eye className="w-4 h-4 mr-1" /> 3.4k
                  </div>
                  <Link
                    href="#"
                    className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Example 3 */}
            <div className="border-2 border-black rounded-xl overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Portfolio example"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#FF8A00] text-white text-sm font-bold px-2 py-1 rounded-md border border-black">
                  New
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">David Chen</h3>
                    <p className="text-sm text-gray-600">Product Designer</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Eye className="w-4 h-4 mr-1" /> 2.8k
                  </div>
                  <Link
                    href="#"
                    className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#"
              className="inline-block px-8 py-3 bg-[#FF8A00] border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              View More Portfolios
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Creatives</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Join thousands of professionals who trust Portolity for their
              online presence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {/* Stat 1 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold mb-2 text-[#FF8A00]">
                  10k+
                </div>
                <p className="text-lg font-medium">Active Users</p>
              </CardContent>
            </Card>

            {/* Stat 2 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold mb-2 text-[#FF8A00]">
                  50k+
                </div>
                <p className="text-lg font-medium">Projects Showcased</p>
              </CardContent>
            </Card>

            {/* Stat 3 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold mb-2 text-[#FF8A00]">
                  1M+
                </div>
                <p className="text-lg font-medium">Monthly Views</p>
              </CardContent>
            </Card>

            {/* Stat 4 */}
            <Card className="border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold mb-2 text-[#FF8A00]">
                  95%
                </div>
                <p className="text-lg font-medium">Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#E0F7FA] border-2 border-black rounded-xl"></div>
              <Card className="relative border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="User"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Alex Johnson</h3>
                      <p className="text-sm text-gray-600">UI/UX Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "Portolity has completely transformed how I showcase my
                    work. The clean interface and powerful features make it easy
                    to create a portfolio that stands out."
                  </p>
                  <div className="flex mt-4">
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#CCFF90] border-2 border-black rounded-xl"></div>
              <Card className="relative border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="User"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Sarah Miller</h3>
                      <p className="text-sm text-gray-600">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "I've landed three major clients directly through my
                    Portolity profile. The integrated contact system makes it so
                    easy for potential clients to reach out."
                  </p>
                  <div className="flex mt-4">
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#FFD180] border-2 border-black rounded-xl"></div>
              <Card className="relative border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="User"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">David Chen</h3>
                      <p className="text-sm text-gray-600">Product Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "The blog feature is a game-changer. I can share my design
                    process and thoughts alongside my portfolio, creating a more
                    complete picture of who I am as a designer."
                  </p>
                  <div className="flex mt-4">
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                    <BadgeCheck className="text-[#FF8A00] w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
