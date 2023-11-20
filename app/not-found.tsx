"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[85vh] sm:h-[80vh]  flex flex-col items-center justify-center">
      <Image
        src={"/not-found.svg"}
        alt="Not found image"
        width={500}
        height={500}
      />

      <Link
        href={"/"}
        className="text-xl font-bold flex items-center underline underline-offset-4"
      >
        Let&apos;s go back home <ArrowRight className="ml-2" />
      </Link>
    </div>
  );
}
