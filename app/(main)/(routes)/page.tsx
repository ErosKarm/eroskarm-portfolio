import Link from "next/link";

import { Projects } from "../_components/projects";
import { Container } from "@/components/container";
import { Technologies } from "../_components/technologies";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eros Karm | Web Developer",
  description:
    "Welcome to the digital world of Eros Karm, a Full-stack Engineer passionate about crafting exceptional online experiences. Explore a portfolio showcasing proficiency in React, Next.js, and innovative web development solutions.",
};

export default function Home() {
  return (
    <>
      <section>
        <Container className="h-full mt-[80px] sm:mt-[150px] relative z-20 px-10 sm:px-12 xl:px-0">
          <div className="z-90">
            <h1 className="font-semibold text-4xl text-left">Web Engineer</h1>
            <p className="mt-8 w-full text-left sm:w-[75%] text-base sm:text-xl">
              Hi, I&apos;m Eros, a Full-stack Engineer with a passion for
              crafting exceptional online experiences. With a background rooted
              in web development, I&apos;ve honed my skills to become a
              proficient architect of digital spaces.
            </p>
          </div>
          <div className="flex items-center gap-x-4 mt-8">
            <Link href="/about" className="text-xs hover:underline">
              Read About Me
            </Link>
            <span className="text-muted-foreground text-xs">OR</span>
            <Link href="/works" className="text-xs hover:underline ">
              View My Projects
            </Link>
          </div>

          <div className="relative  mt-[70px] mb-4 sm:mb-0">
            <h1 className="text-[30px]  font-bold sm:text-[70px] md:text-[80px]  lg:text-[100px]  xl:text-[180px]">
              Case studies.
            </h1>
          </div>

          <Projects />
        </Container>
      </section>

      <section className=" w-full mt-28 mb-24">
        <Container>
          <Technologies />
        </Container>
      </section>
    </>
  );
}
