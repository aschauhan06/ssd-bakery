import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Truck,
  Award,
  Leaf, MessageCircleMore
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat scroll-mt-24"
      style={{
        backgroundImage: "url('/Images/heroBg.jpeg')",
      }} id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div className="text-center lg:text-left">

            <p className="text-orange-500 uppercase tracking-widest font-medium mb-4">
              Welcome To SSD Bakers
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#2D201A]">
              IT'S A TOUCH OF
              <span className="block text-pink-500">
                SWEETNESS
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
              Deliciously handcrafted cakes made with love,
              premium ingredients and a touch of sweetness
              for every celebration.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

              <a
                href="https://wa.me/917007656589?text=Hi SSD Bakers, I would like to place an order."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-115 px-8 rounded-full bg-orange-500 hover:bg-orange-600"
                >
                  Order Now
                  <MessageCircleMore className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-pink-300 text-pink-500 hover:bg-pink-50"
              >
                Explore Cakes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

            </div>

            {/* Features */}

            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">

              <div className="flex items-center gap-3 ">

                <Truck className="text-orange-500 " />

                <div>
                  <p className="font-semibold text-sm">
                    Same Day Delivery
                  </p>
                  <p className="text-xs text-gray-500">
                    On Selected Items
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Leaf className="text-orange-500" />
                <div>
                  <p className="font-semibold text-sm">
                    100% Eggless
                  </p>
                  <p className="text-xs text-gray-500">
                    Pure & Delicious
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="text-orange-500" />
                <div>
                  <p className="font-semibold text-sm">
                    Premium Quality
                  </p>
                  <p className="text-xs text-gray-500">
                    Always Fresh
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative flex justify-center">

            <Image
              src="/Images/heroCake.jpeg"
              alt="SSD Bakers Cake"
              width={650}
              height={650}
              priority
              className="w-full max-w-[550px] object-contain rounded-4xl"
            />

            {/* Happy Customers Badge */}

            <div className="hidden md:flex absolute top-4 right-8 bg-white rounded-full h-30 w-30 shadow-lg items-center justify-center">

              <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-500">
                  10,000+
                </h3>

                <p className="text-sm text-gray-600">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}