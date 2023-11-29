import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Eros Karm | Veskitehnopark",
  description:
    "Discover Veskitehnopark, a smart storage revolution. Explore the concept website crafted by Eros Karm, featuring Next.js, React, Supabase for robust data storage, Tailwind CSS for styling, and ShadcnUI for an engaging user interface. Redefine your perception of storage solutions and convenience.",
};

const VisionGridPage = () => {
  return (
    <>
      <section className="w-full">
        <Container className="grid grid-cols-1 mx-8 lg:mx-8 xl:mx-auto md:grid-cols-2 mt-[80px] sm:mt-[150px]">
          <div>
            <span className="text-muted-foreground tracking-widest">
              CASE STUDY
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-7 w-[80%] mb-8 sm:mb-12">
              VisionGrid — Manage Design Inspiration Efficiently
            </h1>

            <div className="mb-3 sm:mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                SERVICES
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">
                UI/UX, Chome Extension
              </h1>
            </div>

            <div className="mb-3 sm:mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                Development
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">
                Google Chrome Extension
              </h1>
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
                  href={"https://github.com/ErosKarm/visiongrid"}
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
              VisionGrid is a Google Chrome extension designed to enhance the
              way you manage design inspiration websites.
            </p>
            <p className="text-stone-500 text-xl mb-6">
              Unlike default bookmarks that lack visual representation,
              VisionGrid allows you to bookmark a page and view all your
              bookmarks with accompanying images on an external page.
            </p>
            <p className="text-stone-500 text-xl mb-6">
              Moreover, you can categorize your bookmarks with tags such as
              SAAS, Ecommerce, Portfolio, Minimal, Colorful, Landingpage,
              StartUp, Dark, WebApp, making it easier to organize and retrieve
              your inspirations.
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-0 sm:mt-24">
        <Container className="max-w-[1400px] px-4 lg:px-8 xl:px-0 flex gap-y-6 sm:gap-y-24 flex-col  pt-24 pb-12 mb-12 bg-transparent xl:bg-stone-200  rounded-md">
          <div className="grid grid-cols-2 gap-x-10 md:gap-20  lg:grid-cols-3 justify-center align-center items-center px-5 md:px-20 md:gap-x-20">
            <Image
              src="/visiongrid/visiongrid-5.webp"
              unoptimized
              alt="Veskitehnopark website image"
              width={500}
              height={700}
              className="rounded-md sm:rounded-xl  mx-auto hidden lg:block"
            />

            <Image
              src="/visiongrid/visiongrid-3.webp"
              unoptimized
              alt="Veskitehnopark website image"
              width={500}
              height={700}
              className="rounded-md sm:rounded-xl   mx-auto"
            />

            <Image
              src="/visiongrid/visiongrid-2.webp"
              unoptimized
              alt="Veskitehnopark website image"
              width={500}
              height={700}
              className="rounded-md sm:rounded-xl  mx-auto"
            />
          </div>

          <div className="w-full h-auto  relative mt-0 px:0 md:px-20 md:mt-18">
            <video className="w-full h-auto" autoPlay muted loop>
              <source src="/visiongrid/visiongrid.mp4" type="video/mp4" />
            </video>
          </div>
        </Container>
      </section>
    </>
  );
};

export default VisionGridPage;
