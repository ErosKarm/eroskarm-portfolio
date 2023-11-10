"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CVPopover } from "./cv-popover";

interface Route {
  label: string;
  href: string;
}

interface MobileMenuProps {
  routes: Route[];
}

export const MobileMenu = ({ routes }: MobileMenuProps) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger className="flex items-center gap-x-1">
        <Menu />
        <span className="uppercase text-xs font-semibold">Menu</span>
      </SheetTrigger>
      <SheetContent className="w-full flex flex-col">
        <SheetHeader className="">
          <SheetTitle
            className="cursor-pointer text-center"
            onClick={() => {
              setOpen(false);
              router.push("/");
            }}
          >
            eroskarm.com
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-y-10 pb-24 pt-12 text-center">
          {routes.map((route) => (
            <Link
              onClick={() => setOpen(false)}
              href={route.href}
              key={route.href}
              className="text-md uppercase font-[600] text-black/80"
            >
              {route.label}
            </Link>
          ))}
          <CVPopover className="text-md" />
        </div>
        <div className="h-full flex flex-col justify-end">
          <span className="text-xs">Copyright © 2023 eroskarm.com</span>
        </div>
      </SheetContent>
    </Sheet>
  );
};
