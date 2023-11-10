"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CVPopover } from "./cv-popover";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";

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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {};

  return (
    <>
      <div className="flex max-w-[1250px] h-16  items-center mx-auto justify-between pt-4 px-12 xl:px-0">
        <div
          className="flex gap-x-2"
          role="button"
          onClick={() => router.push("/")}
        >
          <span className="text-xl font-semibold text-stone-700 tracking-wide">
            eroskarm.com
          </span>
        </div>

        <div className="hidden lg:flex gap-x-12">
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
        <div className="block lg:hidden">
          <MobileMenu routes={routes} />
        </div>
      </div>
    </>
  );
};
