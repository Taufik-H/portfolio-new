import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-[#FF8A00] dark:bg-[#cc6e00] border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl"></div>
          <Card className="relative border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="text-center mb-5 sm:mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Ready to Showcase Your Work?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
                  Join thousands of creatives who are already using Portolity to
                  showcase their work and connect with others.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  asChild
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#FF8A00] border-2 border-black dark:border-neutral-600 rounded-md font-bold text-sm sm:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Link href="/signup">Create Your Portfolio</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-black dark:border-neutral-600 rounded-md font-medium text-sm sm:text-base hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                >
                  <Link href="#">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
