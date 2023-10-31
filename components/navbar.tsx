"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const routes = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Linkedin",
    href: "/Linkedin",
  },
  {
    label: "CV",
    href: "/cv",
  },
];

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-[1250px] h-16 flex items-center mx-auto justify-between pt-4">
      <div
        className="flex gap-x-2"
        role="button"
        onClick={() => router.push("/")}
      >
        <Image
          src="./logo.svg"
          width="40"
          height="40"
          alt="EK, navigation logo"
        />
        <div className="flex flex-col gap-y-0 justify-center">
          <span className="font-normal text-[13px]">Eros Karm</span>
          <span className="text-muted-foreground uppercase text-[8px] tracking-wide -mt-1">
            Web Engineer
          </span>
        </div>
      </div>

      <div className="flex gap-x-12">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className="text-xs uppercase font-[600] text-black/80"
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
