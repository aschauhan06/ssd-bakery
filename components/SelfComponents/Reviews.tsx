"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Aditya Singh Chauhan",
    image: "/Images/customers/customer1.jpeg",
    review:
      "The cake was absolutely amazing! Super fresh and delicious. Everyone loved it.",
  },
  {
    id: 2,
    name: "Akanksha Shukla",
    image: "/Images/customers/customer2.jpeg",
    review:
      "Best bakery in town! Their red velvet cake is to die for.",
  },
  {
    id: 3,
    name: "Riddhisha Srivastava",
    image: "/Images/customers/customer3.jpeg",
    review:
      "Excellent service and beautiful cake designs. Highly recommended!",
  },
  {
    id: 4,
    name: "Sachin Tripathi",
    image: "/Images/customers/customer4.jpeg",
    review:
      "Beautiful custom cake and excellent delivery service. Highly satisfied!",
  },
  {
    id: 5,
    name: "Atul Singh",
    image: "/Images/customers/customer5.jpeg",
    review:
      "Fresh, tasty and beautifully decorated cakes. Will order again.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2 text-2xl">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold">
            What Our{" "}
            <span className="text-pink-500">
              Customers Say
            </span>
          </h2>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Real experiences from our happy customers who made
            their celebrations sweeter with SSD Bakers.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="
                  md:basis-1/2
                  lg:basis-1/3
                "
              >
                <Card
                  className="
                    h-full
                    rounded-2xl
                    border
                    hover:shadow-lg
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <CardContent className="p-6">
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 fill-orange-400 text-orange-400"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      "{review.review}"
                    </p>

                    {/* Customer */}
                    <div className="flex items-center gap-3">
                      <div className="relative h-30 w-30 overflow-hidden rounded-full">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          sizes="120px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {review.name}
                        </h4>

                        <p className="text-xs text-muted-foreground">
                          Happy Customer
                        </p>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>

      </div>
    </section>
  );
}