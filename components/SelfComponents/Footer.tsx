"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-[#FFF8F5] border-t scroll-mt-24">
      <div className="container mx-auto px-4 py-12">

        {/* Top Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}
          <div className="lg:col-span-2">

            <Image
              src="/Images/SSDBakers.png"
              alt="SSD Bakers"
              width={180}
              height={100}
              className="mb-4 h-auto w-auto"
            />

            <p className="text-muted-foreground max-w-sm">
              Delicious cakes made with love for every
              celebration. Bringing sweetness to your
              special moments.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#hero" className="hover:text-[#D86B2B]">Home</Link>
              </li>

              <li>
                <Link href="#cake" className="hover:text-[#D86B2B]">Cakes</Link>
              </li>

              <li>
                <Link href="#category" className="hover:text-[#D86B2B]">Categories</Link>
              </li>

              <li>
                <Link href="#whyUs" className="hover:text-[#D86B2B]">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              <li>Custom Cakes</li>
              <li>Eggless Cakes</li>
              <li>Same-Day Delivery</li>
              <li>Bulk Orders</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4">
              Information
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#contact" className="hover:text-[#D86B2B]">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="#faqs" className="hover:text-[#D86B2B]">
                  FAQs
                </Link>
              </li>

              {/* <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms">
                  Terms & Conditions
                </Link>
              </li> */}
            </ul>
          </div>

        </div>

        {/* Newsletter + Social */}
        <div className="border-t mt-10 pt-8 flex flex-col lg:flex-row justify-between gap-8">

          {/* Newsletter */}
          <div className="w-full lg:max-w-md">

            <h3 className="font-semibold mb-3">
              Subscribe to Our Newsletter
            </h3>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
              />

              <Button className="bg-pink-500 hover:bg-pink-600">
                Subscribe
              </Button>
            </div>

          </div>

          {/* Social Icons */}
          <div>

            <h3 className="font-semibold mb-3">
              Follow Us
            </h3>

            <div className="flex gap-3">

              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
              >
                <FaFacebookF className="h-4 w-4" />
              </Button>

              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
              >
                <FaInstagram className="h-4 w-4" />
              </Button>

              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
              >
                <FaYoutube className="h-4 w-4" />
              </Button>

              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
              >
                <Send className="h-4 w-4" />
              </Button>

            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          © 2026 SSD Bakers. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}