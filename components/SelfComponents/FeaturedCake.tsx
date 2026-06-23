import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  ShoppingCart,
  Star, MessageCircleMore
} from "lucide-react";

const cakes = [
  {
    id: 1,
    name: "Kitkat Truffle Cake",
    price: 600,
    image: "/Images/Cake/cake1.png",
  },
  {
    id: 2,
    name: "Velvet Cake",
    price: 550,
    image: "/Images/Cake/cake2.png",
  },
  {
    id: 3,
    name: "Blueberry Cake",
    price: 450,
    image: "/Images/Cake/cake3.png",
  },
  {
    id: 4,
    name: "Butterscotch Cake",
    price: 500,
    image: "/Images/Cake/cake4.jpeg",
  },
  {
    id: 5,
    name: "Fruit Almond Cake",
    price: 540,
    image: "/Images/Cake/cake5.jpeg",
  },
  {
    id: 6,
    name: "Chocolate Delight Cake",
    price: 550,
    image: "/Images/Cake/cake6.jpeg",
  },
];

export default function FeaturedCakes() {
  return (
    <section className="py-20 bg-[#fffaf7] scroll-mt-24" id="cake">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-12">

          <div>
            <p className="text-orange-500 font-medium mb-2 text-2xl">
              Our Specialities
            </p>

            <h2 className="text-4xl font-bold">
              Featured{" "}
              <span className="text-pink-500">
                Cakes
              </span>
            </h2>
          </div>

          {/* <Button
            variant="outline"
            className="rounded-full w-fit"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button> */}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

          {cakes.map((cake) => (
            <Card
              key={cake.id}
              className="group overflow-hidden rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-0">

                {/* Image */}
                <div className="relative h-52 overflow-hidden">

                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 
                    (max-width: 1024px) 50vw, 
                    (max-width: 1280px) 33vw, 
                    16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-pink-600 text-white text-sm px-3 py-1 rounded-full font-semibold">
                    ₹{cake.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 text-center">

                  <h3 className="font-semibold text-lg mb-2">
                    {cake.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/917007656589?text=${encodeURIComponent(
                      "Hi SSD Bakers, I would like to place an order."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="w-full rounded-full bg-pink-500 hover:bg-pink-600"
                    >
                      Order Now
                      <MessageCircleMore className="ml-2 h-4 w-4" />
                    </Button>
                  </a>

                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}