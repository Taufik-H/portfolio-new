import { features } from "@/lib/constants";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const FeatureSection = () => {
  return (
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
          {features.map(
            ({ title, description, icon: Icon, bgColor }, index) => (
              <Card key={index} className="brutalism-border">
                <CardHeader>
                  <div
                    className={`w-14 h-14 ${bgColor} border-2 border-black rounded-full flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                  <CardDescription className="text-base">
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
