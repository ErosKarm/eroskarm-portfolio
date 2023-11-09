"use client";

import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useRouter } from "next/navigation";

export const CVPopover = () => {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger className="text-xs uppercase font-[600] text-black/8">
        CV
      </PopoverTrigger>
      <PopoverContent className="grid grid-cols-2 w-[80px] text-xs px-1 py-1">
        <div
          className="flex flex-col hover:bg-gray-100 rounded px-2 pt-1 pb-2 cursor-pointer"
          role="link"
          onClick={() => router.push("/CV-Eros-Karm-EST.pdf")}
        >
          <span className="text-[9px] text-muted-foreground text-center">
            EST
          </span>
          <Image
            src="/estonia.png"
            alt="Estonian Flag"
            width={20}
            height={20}
            className="mx-auto"
          />
        </div>
        <div
          className="flex flex-col hover:bg-gray-100 rounded px-2 pt-1 pb-2 cursor-pointer"
          role="link"
          onClick={() => router.push("/CV-Eros-Karm-ENG.pdf")}
        >
          <span className="text-[9px] text-muted-foreground text-center">
            ENG
          </span>
          <Image
            src="/uk.png"
            alt="Estonian Flag"
            width={20}
            height={20}
            className="mx-auto"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
