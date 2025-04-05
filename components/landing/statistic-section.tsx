import { BadgeCheck } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { statistics } from "@/lib/constants";

const StatisticSection = () => {
  return (
    <div>
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
            {statistics.map((statistic, index) => (
              <Card key={index} className="brutalism-border text-center">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold mb-2 text-[#FF8A00]">
                    {statistic.count}
                  </div>
                  <p className="text-lg font-medium">{statistic.title}</p>
                </CardContent>
              </Card>
            ))}
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
                        src="https://placehold.co/600x400/png"
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
                    Portolity has completely transformed how I showcase my work.
                    The clean interface and powerful features make it easy to
                    create a portfolio that stands out.
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
                        src="https://placehold.co/600x400/png"
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
                    I&apos;ve landed three major clients directly through my
                    Portolity profile. The integrated contact system makes it so
                    easy for potential clients to reach out.
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
                        src="https://placehold.co/600x400/png"
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
                    The blog feature is a game-changer. I can share my design
                    process and thoughts alongside my portfolio, creating a more
                    complete picture of who I am as a designer.
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
    </div>
  );
};

export default StatisticSection;
