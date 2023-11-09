import { cn } from "@/lib/utils";
import Image from "next/image";

interface TechnologiesProps {
  className?: string;
}

export const Technologies = ({ className }: TechnologiesProps) => {
  return (
    <div className={cn("", className)}>
      <h1 className="text-2xl font-bold">Technologies</h1>
      <div className="grid grid-cols-4 mt-8 gap-y-10">
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/nextjs.png"}
            alt="Next Logo"
            width={130}
            height={40}
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/typescript.png"}
            alt="Next Logo"
            width={140}
            height={40}
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/react.png"}
            alt="Next Logo"
            width={55}
            height={40}
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/tailwind.png"}
            alt="Next Logo"
            width={250}
            height={40}
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/javascript.png"}
            alt="Next Logo"
            width={50}
            height={40}
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/wordpress.png"}
            alt="Next Logo"
            width={170}
            height={40}
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/prisma.png"}
            alt="Next Logo"
            width={120}
            height={40}
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/git.png"}
            alt="Next Logo"
            width={90}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};
