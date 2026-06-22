"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes, we provide same-day delivery for selected cakes and locations.",
  },
  {
    question: "Can I customize my cake?",
    answer:
      "Absolutely! You can customize the flavor, design, size, and message.",
  },
  {
    question: "Do you provide eggless cakes?",
    answer:
      "Yes, we offer a wide range of 100% eggless cakes.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order through our website, phone, or WhatsApp.",
  },
];

export default function FAQs() {
  return (
    <section className="py-20 bg-[#FFF8F5] scroll-mt-24" id="faqs">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2 text-2xl">
            Need Help?
          </p>

          <h2 className="text-4xl font-bold">
            Frequently Asked{" "}
            <span className="text-pink-500">
              Questions
            </span>
          </h2>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Find answers to the most common questions about our cakes,
            delivery, and customization services.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                  bg-white
                  border
                  rounded-xl
                  px-5
                  shadow-sm
                "
              >
                <AccordionTrigger
                  className="
                    text-left
                    font-medium
                    hover:no-underline
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}