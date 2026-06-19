"use client";

import {
  Leaf,
  CakeSlice,
  Truck,
  BadgeDollarSign,
  ShieldCheck,
  CircleOff,
} from "lucide-react";

const features = [
  {
    title: "Fresh Ingredients",
    description: "We use only the finest ingredients for every cake.",
    icon: Leaf,
  },
  {
    title: "Custom Designs",
    description: "Beautiful cakes tailored for your special moments.",
    icon: CakeSlice,
  },
  {
    title: "Same Day Delivery",
    description: "Fast and reliable delivery across the city.",
    icon: Truck,
  },
  {
    title: "Affordable Pricing",
    description: "Premium quality cakes at reasonable prices.",
    icon: BadgeDollarSign,
  },
  {
    title: "Premium Quality",
    description: "Prepared hygienically with love and care.",
    icon: ShieldCheck,
  },
  {
    title: "100% Eggless",
    description: "Pure vegetarian and completely eggless cakes.",
    icon: CircleOff,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#FFF8F5]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose{" "}
            <span className="text-pink-500">
              SSD Bakers?
            </span>
          </h2>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We bring freshness, creativity, and quality together
            to make every celebration memorable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  flex
                  gap-4
                  p-6
                  rounded-2xl
                  border
                  bg-white
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-full
                    bg-orange-100
                    text-orange-500
                    shrink-0
                  "
                >
                  <Icon
                    size={28}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}