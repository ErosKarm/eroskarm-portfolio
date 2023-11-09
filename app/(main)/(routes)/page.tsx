"use client";

import { Container } from "@/components/container";

import Link from "next/link";
import { useEffect } from "react";
import { Projects } from "../_components/projects";

import { Technologies } from "../_components/technologies";

export default function Home() {
  useEffect(() => {
    const initializeVideoText = () => {
      const videoTextElement = document.querySelector(".video-text");

      if (videoTextElement) {
        videoTextElement.innerHTML = `
          <video autoplay muted loop playsinline>
            <source src="/your-video.mp4" type="video/mp4" />
          </video>
          Case studies.`;
      }
    };

    initializeVideoText();
  }, []);

  return (
    <>
      <section>
        <Container className="h-full mt-[150px] relative z-20">
          <div className="z-90">
            <h1 className="font-semibold text-4xl">Web Engineer</h1>
            <p className="mt-8 w-[75%] text-xl">
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

          <div className="relative  mt-[70px]">
            <h1 className="text-[180px] font-bold">Case studies.</h1>
          </div>

          <Projects />
        </Container>
      </section>

      <section className="h-[250px] w-full mt-28 mb-24">
        <Container>
          <Technologies />
        </Container>
      </section>
    </>
  );
}
