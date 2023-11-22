import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Eros Karm | ÖÖD Hotels",
  description:
    "Experience ÖÖD-Hotels, a unique concept blending nature and technology. Explore the groundbreaking website designed by Eros Karm, utilizing Next.js, React, Clerk for authentication, Cloudinary for image management, and Stripe for secure payments. Immerse yourself in the future of hospitality.",
};

const OodhotelsPage = () => {
  return (
    <>
      <section className="w-full ">
        <Container className="grid grid-cols-1 mx-8 lg:mx-8 xl:mx-auto md:grid-cols-2 mt-[80px] sm:mt-[150px]">
          <div>
            <span className="text-muted-foreground tracking-widest">
              CASE STUDY
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-7 w-[80%] mb-8 sm:mb-12">
              ÖÖD-Hotels — Redefining the Art of Accommodation
            </h1>

            <div className="mb-3 sm:mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                SERVICES
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">
                UI/UX, Front-end, Back-end
              </h1>
            </div>

            <div className="mb-3 sm:mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                Development
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">Concept</h1>
            </div>

            <div className="mb-3 sm:mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                Year
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">2023</h1>
            </div>

            <div className="mb-3 sm:mb-6 flex flex-col">
              <span className="text-muted-foreground tracking-widest text-sm">
                Link
              </span>

              <div className="flex gap-x-3">
                <a
                  href={"https://ood-hotels-concept.vercel.app/"}
                  className="text-md font-bold mt-2 hover:underline"
                  target="_blank"
                >
                  Website
                </a>
                <a
                  href={"https://github.com/ErosKarm/ood-hotels-concept"}
                  className="text-md font-bold mt-2 hover:underline"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-24 ">
            <p className="text-stone-500 text-base sm:text-xl mb-6">
              In a world saturated with traditional hotel experiences,
              ÖÖD-Hotels stands out by offering something extraordinary. The
              founders of ÖÖD-Hotels sought a deeper connection with nature, but
              conventional lodgings fell short. Their solution was to create
              ÖÖD-Hotels, a unique, customized accommodation concept that
              immerses guests in the heart of nature.
            </p>
            <p className="text-stone-500 text-base sm:text-xl mb-6">
              To showcase this groundbreaking concept, I designed a concept
              website. While not used for practical purposes, it encapsulates
              ÖÖD-Hotels&apos; spirit. I used Next.js with React to ensure a
              seamless and responsive user experience. Clerk facilitated user
              authentication and a custom dashboard for administrators to manage
              listings, amenities, and house rules. Cloudinary managed image
              uploads, and Stripe enabled secure payments.
            </p>
            <p className="text-stone-500 text-base sm:text-xl mb-6">
              Behind the scenes, Prisma handled the backend, while Tailwind CSS
              provided elegant styling. Together, we&apos;ve reimagined the
              hotel experience, blending nature&apos;s beauty with cutting-edge
              technology to offer a glimpse into the future of accommodations.
              Explore ÖÖD-Hotels and discover a new era in hospitality.
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-0 sm:mt-24">
        <Container className="max-w-[1400px] px-4 lg:px-8 xl:px-0 flex gap-y-6 sm:gap-y-24 flex-col  pt-24 pb-12 mb-12 bg-transparent xl:bg-stone-200  rounded-md">
          <Image
            src="/oodhotels/ood-1.webp"
            unoptimized
            alt="ÖÖD Website image"
            width={1400}
            height={700}
            className="rounded-md sm:rounded-xl px-0 md:px-20"
          />

          <Image
            src="/oodhotels/ood-2.webp"
            unoptimized
            alt="ÖÖD Website image"
            width={1400}
            height={700}
            className="rounded-md sm:rounded-xl px-0 md:px-20"
          />

          <Image
            src="/oodhotels/ood-3.webp"
            unoptimized
            alt="ÖÖD Website image"
            width={1400}
            height={700}
            className="rounded-md sm:rounded-xl px-0 md:px-20"
          />

          <Image
            src="/oodhotels/ood-4.webp"
            unoptimized
            alt="ÖÖD Website image"
            width={1400}
            height={700}
            className="rounded-md sm:rounded-xl px-0 md:px-20"
          />
        </Container>
      </section>
    </>
  );
};

export default OodhotelsPage;
