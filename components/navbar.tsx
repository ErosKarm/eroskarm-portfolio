"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CVPopover } from "./cv-popover";

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
    href: "mailto:contact@eroskarm.com",
  },
  {
    label: "Linkedin",
    href: "https://ee.linkedin.com/in/eros-karm-426196234?trk=people-guest_people_search-card",
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
        <span className="text-xl font-semibold text-stone-700 tracking-wide">
          eroskarm.com
        </span>
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
        <CVPopover />
      </div>
    </div>
  );
};
