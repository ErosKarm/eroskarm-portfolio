import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Eros Karm | Works",
  description:
    "Explore Eros Karm's portfolio of web development projects, from WordPress websites to cutting-edge React applications. Dive into a world of customized, responsive, and user-friendly web solutions that redefine online experiences.",
};

const WorksPage = () => {
  return (
    <>
      <section className="h-fit">
        <Container className="h-fit mt-[100px] sm:mt-[150px] relative z-20 px-8 sm:px-12 xl:px-0 flex flex-col pb-12">
          <h1 className="font-semibold text-4xl">Selected works</h1>

          <Link
            href={"/works/oodhotels"}
            className="h-[400px] sm:h-[570px] w-full mt-12"
          >
            <div className="relative h-[330px] sm:h-[500px] w-full">
              <Image
                src={"/oodhotels.webp"}
                unoptimized
                fill
                alt="Veskitehnopark"
                className="object-cover rounded-[15px]"
              />
            </div>
            <h2 className="text-base sm:text-xl font-semibold mt-4">
              ÖÖD Hotels
            </h2>
            <span className="uppercase text-[11px] sm:text-xs font-semibold text-black/70">
              CONCEPT DEVELOPMENT
            </span>
          </Link>

          <Link
            href={"/works/veskitehnopark"}
            className="h-[400px] sm:h-[570px] w-full mt-12"
          >
            <div className="relative h-[330px] sm:h-[500px]  w-full">
              <Image
                src={"/veskitehnopark.webp"}
                unoptimized
                fill
                alt="Veskitehnopark"
                className="object-cover rounded-[15px]"
              />
            </div>
            <h2 className="text-base sm:text-xl font-semibold mt-4">
              Veskitehnopark Nutilaod
            </h2>
            <span className="uppercase text-[11px] sm:text-xs font-semibold text-black/70">
              CONCEPT DEVELOPMENT
            </span>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default WorksPage;
