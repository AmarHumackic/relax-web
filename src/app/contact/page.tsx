import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[1200px]">
              <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                Contact Us
              </h1>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="dark:bg-dark rounded-lg bg-white/5 p-8 shadow-lg backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      <strong>Address:</strong> Your Apartment Address
                    </p>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      <strong>Phone:</strong> +1234567890
                    </p>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      <strong>Email:</strong> your.email@example.com
                    </p>
                  </div>
                </div>
                <div className="dark:bg-dark rounded-lg bg-white/5 p-8 shadow-lg backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Book Your Stay
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark mb-4 text-base">
                    To book your stay, please visit our listings on:
                  </p>
                  <div className="space-y-4">
                    <a
                      href="https://www.airbnb.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary/90 block rounded-md px-6 py-3 text-center text-white transition"
                    >
                      Book on Airbnb
                    </a>
                    <a
                      href="https://www.booking.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary/90 block rounded-md px-6 py-3 text-center text-white transition"
                    >
                      Book on Booking.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
