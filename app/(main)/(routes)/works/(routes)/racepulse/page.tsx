import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Eros Karm | Racepulse - F1 Edition",
  description:
    "Dive into the world of Formula 1 with Racepulse | F1 Edition, an unofficial visualizer delivering an immersive race-watching experience. Discover race data, driver details, and dynamic visualizations on this innovative website crafted by Eros Karm. Powered by Next.js and React, authenticated with Clerk, and featuring real-time updates through the ERGAST API. Explore Formula 1 history with Racepulse's responsive design, enhanced by ShadCN and Tailwind CSS. Engage in the excitement of F1 like never before.",
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
              Racepulse - F1 Edition
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
              <h1 className="text-md font-bold mt-2 w-[80%]">Application</h1>
            </div>

            <div className="mb-3 sm:mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                Year
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">2024</h1>
            </div>

            <div className="mb-3 sm:mb-6 flex flex-col">
              <span className="text-muted-foreground tracking-widest text-sm">
                Link
              </span>

              <div className="flex gap-x-3">
                <a
                  href={"https://racepulse.vercel.app/"}
                  className="text-md font-bold mt-2 hover:underline"
                  target="_blank"
                >
                  Live Application
                </a>
                <a
                  href={"https://github.com/ErosKarm/racepulse"}
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
              Racepulse | F1 Edition is a project born out of a shared passion
              for Formula 1. Serving as an unofficial visualizer, it caters to
              enthusiasts eager to relive the excitement of Formula 1 races
              dating back to 1996. The platform goes beyond conventional race
              summaries, providing an engaging experience that allows users to
              explore detailed race data, delve into driver specifics, and
              experience dynamic visualizations.
            </p>
            <p className="text-stone-500 text-base sm:text-xl mb-6">
              One key feature is the dynamic race visualization, where users can
              select a specific year and round to explore races. The interactive
              nature of the platform allows users to choose a lap or engage in a
              playthrough, witnessing the evolution of the gap to the leader
              over time. The driver information section further enriches the
              experience by offering real-time updates based on lap changes,
              presenting critical data such as driver position, lap time, gap to
              the leader, and more.
            </p>
            <p className="text-stone-500 text-base sm:text-xl mb-6">
              Behind the scenes, Racepulse leverages the ERGAST API for race
              data, ensuring accuracy and reliability. The utilization of the
              D3.js Scattergraph adds a visual layer to the experience,
              representing all drivers and their gaps on an interactive
              scattergraph. This not only enhances the overall user experience
              but also provides a unique perspective on the race dynamics.
            </p>
            <p className="text-stone-500 text-base sm:text-xl mb-6">
              Technologically, Racepulse is built on Next.js, a React framework
              that ensures a seamless and responsive user interface. Styling is
              meticulously crafted using ShadCN in conjunction with Tailwind
              CSS, resulting in a visually appealing design that adapts
              seamlessly to various screen sizes. With its innovative features
              and cutting-edge technologies, Racepulse | F1 Edition stands as a
              testament to the dedication to bring the thrill of Formula 1
              racing to a digital audience, creating a space for enthusiasts to
              immerse themselves in the sport&apos;s rich history and
              captivating moments.
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-0 sm:mt-24">
        <Container className="max-w-[1400px] px-4 lg:px-8 xl:px-0 flex gap-y-6 sm:gap-y-24 flex-col  pt-24 pb-12 mb-12 bg-transparent xl:bg-stone-200  rounded-md">
          <Image
            src="/racepulse/racepulse-1.webp"
            unoptimized
            alt="Racepulse application image"
            width={1400}
            height={700}
            className="rounded-md sm:rounded-xl px-0 md:px-20"
          />

          <Image
            src="/racepulse/racepulse-2.webp"
            unoptimized
            alt="Racepulse application image"
            width={1400}
            height={700}
            className="rounded-md sm:rounded-xl px-0 md:px-20"
          />

          <Image
            src="/racepulse/racepulse-3.webp"
            unoptimized
            alt="Racepulse application image"
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
