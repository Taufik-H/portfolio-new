import { BadgeCheck } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { statistics } from "@/lib/constants";

const StatisticSection = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="section-container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Trusted by Creatives
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
            Join thousands of professionals who trust Portolity for their online
            presence
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {statistics.map((statistic, index) => (
            <Card
              key={index}
              className="border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center transition-transform hover:translate-y-[-3px]"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-[#FF8A00]">
                  {statistic.count}
                </div>
                <p className="text-sm sm:text-base md:text-lg font-medium">
                  {statistic.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Testimonial 1 */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-[#E0F7FA] dark:bg-[#0d4b55] border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl"></div>
            <Card className="relative border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
                    <Image
                      src="https://placehold.co/600x400/png"
                      alt="Alex Johnson"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">
                      Alex Johnson
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Portolity has completely transformed how I showcase my work.
                  The clean interface and powerful features make it easy to
                  create a portfolio that stands out.
                </p>
                <div className="flex mt-3 sm:mt-4">
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial 2 */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-[#CCFF90] dark:bg-[#2c4a14] border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl"></div>
            <Card className="relative border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
                    <Image
                      src="https://placehold.co/600x400/png"
                      alt="Sarah Miller"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">
                      Sarah Miller
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Frontend Developer
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  I&apos;ve landed three major clients directly through my
                  Portolity profile. The integrated contact system makes it so
                  easy for potential clients to reach out.
                </p>
                <div className="flex mt-3 sm:mt-4">
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial 3 */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-[#FFD180] dark:bg-[#664a20] border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl"></div>
            <Card className="relative border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
                    <Image
                      src="https://placehold.co/600x400/png"
                      alt="David Chen"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">
                      David Chen
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Product Designer
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  The blog feature is a game-changer. I can share my design
                  process and thoughts alongside my portfolio, creating a more
                  complete picture of who I am as a designer.
                </p>
                <div className="flex mt-3 sm:mt-4">
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                  <BadgeCheck className="text-[#FF8A00] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;
