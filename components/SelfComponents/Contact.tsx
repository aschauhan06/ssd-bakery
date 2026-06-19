"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2 text-2xl">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold">
            Contact{" "}
            <span className="text-pink-500">
              Us
            </span>
          </h2>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Have questions or want to place an order?
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <Card className="max-w-4xl mx-auto rounded-3xl border shadow-sm">
          <CardContent className="p-8">

            <div className="grid md:grid-cols-2 gap-8">

              {/* Left Side */}
              <div className="space-y-6">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-pink-100 text-pink-500">
                    <Phone size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Phone Number
                    </h4>
                    <p className="text-muted-foreground">
                      +91 70076 56589
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-pink-100 text-pink-500">
                    <Mail size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Email Address
                    </h4>
                    <p className="text-muted-foreground">
                      ssdbakery27@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-pink-100 text-pink-500">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Bakery Address
                    </h4>

                    <p className="text-muted-foreground">
                      Sector-D1, Parag Road
                      <br />
                      LDA Colony, Kanpur Road, Lucknow, UP
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Side */}
              <div className="flex flex-col justify-between">

                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 rounded-full bg-orange-100 text-orange-500">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Working Hours
                    </h4>

                    <p className="text-muted-foreground">
                      Monday - Sunday
                    </p>

                    <p className="text-muted-foreground">
                      9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full md:w-fit rounded-full bg-pink-500 hover:bg-pink-600"
                >
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </div>

            </div>

          </CardContent>
        </Card>

      </div>
    </section>
  );
}