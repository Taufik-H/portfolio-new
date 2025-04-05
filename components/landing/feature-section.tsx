import { features } from "@/lib/constants";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F5F5] dark:bg-neutral-900"
    >
      <div className="section-container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Powerful Features
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
            Everything you need to showcase your work and connect with others
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map(
            ({ title, description, icon: Icon, bgColor }, index) => (
              <Card
                key={index}
                className="brutalism-border transition-transform hover:translate-y-[-5px]"
              >
                <CardHeader className="p-5 sm:p-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${bgColor} border-2 border-black dark:border-neutral-600 rounded-full flex items-center justify-center mb-3 sm:mb-4`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
