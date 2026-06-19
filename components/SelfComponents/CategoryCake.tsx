"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    title: "Birthday Cakes",
    image: "/Images/Category/birthday.jpeg",
  },
  {
    id: 2,
    title: "Wedding Cakes",
    image: "/Images/Category/wedding.jpeg",
  },
  {
    id: 3,
    title: "Anniversary Cakes",
    image: "/Images/Category/anniversary.jpeg",
  },
  {
    id: 4,
    title: "Happy New Year Cake",
    image: "/Images/Category/NewYear.jpeg",
  },
  {
    id: 5,
    title: " Valentine Special Cake",
    image: "/Images/Category/valentine.jpeg",
  },
  {
    id: 6,
    title: "Customize Cake",
    image: "/Images/Category/home.jpeg",
  },
];

export default function CakeCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">
            Cake{" "}
            <span className="text-pink-500">
              Categories
            </span>
          </h2>

          <Button
            variant="outline"
            className="rounded-full"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {categories.map((category) => (
            <Card
              key={category.id}
              className="group overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">

                {/* Image */}
                <div className="relative h-36 overflow-hidden">

                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 50vw,
                    (max-width: 1024px) 33vw,
                    16vw"
                    className="object-fill transition-transform duration-500 group-hover:scale-110"
                  />

                </div>

                {/* Title */}
                <div className="py-3 text-center">

                  <h3 className="text-lg font-semibold">
                    {category.title}
                  </h3>

                </div>

              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}