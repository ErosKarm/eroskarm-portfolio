import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";

const OodhotelsPage = () => {
  return (
    <>
      <section className=" w-full ">
        <Container className="grid grid-cols-2 mt-[150px] ">
          <div>
            <span className="text-muted-foreground tracking-widest">
              CASE STUDY
            </span>
            <h1 className="text-5xl font-bold mt-7 w-[80%] mb-12">
              ÖÖD-Hotels — Redefining the Art of Accommodation
            </h1>

            <div className="mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                SERVICES
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">
                UI/UX, Front-end, Back-end
              </h1>
            </div>

            <div className="mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                Development
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">Concept</h1>
            </div>

            <div className="mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                Year
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">2023</h1>
            </div>

            <div className="mb-6 flex flex-col">
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

          <div className="mt-24 ">
            <p className="text-stone-500 text-xl mb-6">
              In a world saturated with traditional hotel experiences,
              ÖÖD-Hotels stands out by offering something extraordinary. The
              founders of ÖÖD-Hotels sought a deeper connection with nature, but
              conventional lodgings fell short. Their solution was to create
              ÖÖD-Hotels, a unique, customized accommodation concept that
              immerses guests in the heart of nature.
            </p>
            <p className="text-stone-500 text-xl mb-6">
              To showcase this groundbreaking concept, I designed a concept
              website. While not used for practical purposes, it encapsulates
              ÖÖD-Hotels&apos; spirit. I used Next.js with React to ensure a
              seamless and responsive user experience. Clerk facilitated user
              authentication and a custom dashboard for administrators to manage
              listings, amenities, and house rules. Cloudinary managed image
              uploads, and Stripe enabled secure payments.
            </p>
            <p className="text-stone-500 text-xl mb-6">
              Behind the scenes, Prisma handled the backend, while Tailwind CSS
              provided elegant styling. Together, we&apos;ve reimagined the
              hotel experience, blending nature&apos;s beauty with cutting-edge
              technology to offer a glimpse into the future of accommodations.
              Explore ÖÖD-Hotels and discover a new era in hospitality.
            </p>
            {/* <p className="text-stone-500 text-xl mb-6">
              The final deliverable was a family of 4 products that you can
              download and use for free. Just download InVision Studio, open
              their App Store and search for 128 Outline Icons, eCommerce
              Wireframe Kit, User Interface Kit and Web Wireframe Kit.
            </p> */}
          </div>
        </Container>
      </section>

      <section className="w-full mt-24">
        <Container className="max-w-[1500px] w-[1500px] pt-24 pb-12 mb-12 bg-stone-200 rounded-md">
          <div className="w-full h-[700px] relative">
            <Image
              src="/oodhotels/ood-1.png"
              alt="ÖÖD Website"
              fill
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full h-[700px] relative mt-24">
            <Image
              src="/oodhotels/ood-2.png"
              alt="ÖÖD Website"
              fill
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full h-[700px] relative mt-24">
            <Image
              src="/oodhotels/ood-3.png"
              alt="ÖÖD Website"
              fill
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full h-[700px] relative mt-24">
            <Image
              src="/oodhotels/ood-4.png"
              alt="ÖÖD Website"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default OodhotelsPage;
