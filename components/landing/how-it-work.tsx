import { Card, CardContent } from "../ui/card";

const HowItWorks = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F5F5] dark:bg-neutral-900">
      <div className="section-container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
            Get your portfolio up and running in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 md:gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-[#FFD180] dark:bg-[#664a20] border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl"></div>
            <Card className="relative border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-neutral-800 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                  1
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  Sign Up
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Create your account in seconds and choose your unique
                  username.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-[#CCFF90] dark:bg-[#2c4a14] border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl"></div>
            <Card className="relative border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-neutral-800 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                  2
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  Customize
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Add your projects, blog posts, and personalize your portfolio.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-[#80D8FF] dark:bg-[#0d4b55] border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl"></div>
            <Card className="relative border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-neutral-800 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                  3
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  Share
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Share your portfolio URL with the world and connect with
                  others.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
