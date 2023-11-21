import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Eros Karm | Veskitehnopark",
  description:
    "Discover Veskitehnopark, a smart storage revolution. Explore the concept website crafted by Eros Karm, featuring Next.js, React, Supabase for robust data storage, Tailwind CSS for styling, and ShadcnUI for an engaging user interface. Redefine your perception of storage solutions and convenience.",
};

const VeskitehnoparkPage = () => {
  return (
    <>
      <section className="w-full">
        <Container className="grid grid-cols-1 mx-8 sm:mx-auto sm:grid-cols-2 mt-[80px] sm:mt-[150px]">
          <div>
            <span className="text-muted-foreground tracking-widest">
              CASE STUDY
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-7 w-[80%] mb-8 sm:mb-12">
              Veskitehnopark — Modern way of storage space
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

            <div className=" flex flex-col">
              <span className="text-muted-foreground tracking-widest text-sm">
                Link
              </span>

              <div className="flex gap-x-3">
                <a
                  href={"https://veskitehnopark-concept.vercel.app/"}
                  className="text-md font-bold mt-2 hover:underline"
                  target="_blank"
                >
                  Website
                </a>
                <a
                  href={"https://github.com/ErosKarm/veskitehnopark-concept"}
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
              Veskitehnopark is not just another storage facility; it&apos;s a
              smart storage revolution. Offering flexible and secure storage
              solutions, Veskitehnopark allows individuals to rent storage rooms
              with ease, providing peace of mind and convenience. Its innovative
              approach to storage management brings enhanced security and ample
              parking space, making it a true game-changer in the industry.
            </p>
            <p className="text-stone-500 text-xl mb-6">
              To showcase the brilliance of Veskitehnopark, I took the
              initiative to create a concept website that captures its essence.
              Although this website remains a conceptual design and isn&apos;t
              operational, it mirrors the innovative spirit of Veskitehnopark.
            </p>
            <p className="text-stone-500 text-xl mb-6">
              In developing this project, I leveraged Next.js with React to
              ensure a seamless and responsive user experience. Supabase served
              as the database, offering robust and reliable data storage. The
              website&apos;s overall look and feel were enhanced by the dynamic
              pairing of Tailwind CSS and ShadcnUI, a versatile component
              library, creating an engaging and visually appealing user
              interface.
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-0 sm:mt-24">
        <Container className="max-w-[1400px] px-4 sm:px-12 xl:px-0 flex gap-y-6 sm:gap-y-24 flex-col  pt-24 pb-12 mb-12 bg-transparent xl:bg-stone-200  rounded-md">
          <Image
            src="/veskitehnopark/veski-1.webp"
            unoptimized
            alt="Veskitehnopark website image"
            width={1400}
            height={700}
            className="rounded-md sm:rounded-xl px-0 sm:px-20"
          />

          <div className="w-full h-auto sm:h-[700px] relative mt-0 sm:mt-24">
            <video className="w-full h-full" autoPlay muted loop>
              <source src="/veskitehnopark/veski-vid.mp4" type="video/mp4" />
            </video>
          </div>

          <Image
            src="/veskitehnopark/veski-3.webp"
            unoptimized
            alt="Veskitehnopark website image"
            width={1400}
            height={700}
            className="rounded-md sm:rounded-xl px-0 sm:px-20"
          />
        </Container>
      </section>
    </>
  );
};

export default VeskitehnoparkPage;
