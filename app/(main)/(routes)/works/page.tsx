"use client";

import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

const WorksPage = () => {
  const router = useRouter();

  return (
    <>
      <section className="h-fit">
        <Container className="h-fit mt-[150px] relative z-20 px-12 xl:px-0 flex flex-col">
          <h1 className="font-semibold text-4xl">Selected works</h1>

          <Link href={"/works/oodhotels"} className="h-[570px] w-full mt-12">
            <div className="relative h-[500px] w-full">
              <Image
                src={"/oodhotels.jpg"}
                fill
                alt="Veskitehnopark"
                className="object-cover rounded-[15px]"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">ÖÖD Hotels</h2>
            <span className="uppercase text-xs font-semibold text-black/70">
              CONCEPT DEVELOPMENT
            </span>
          </Link>

          <Link
            href={"/works/veskitehnopark"}
            className="h-[570px] w-full mt-12"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src={"/veskitehnopark.webp"}
                fill
                alt="Veskitehnopark"
                className="object-cover rounded-[15px]"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">
              Veskitehnopark Nutilaod
            </h2>
            <span className="uppercase text-xs font-semibold text-black/70">
              CONCEPT DEVELOPMENT
            </span>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default WorksPage;
