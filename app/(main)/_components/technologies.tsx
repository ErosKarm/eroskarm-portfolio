import { cn } from "@/lib/utils";
import Image from "next/image";

interface TechnologiesProps {
  className?: string;
}

export const Technologies = ({ className }: TechnologiesProps) => {
  return (
    <div className={cn("px-12 xl:px-0", className)}>
      <h1 className="text-2xl font-bold text-left">Technologies</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 gap-y-7 sm:gap-y-10">
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/nextjs.png"}
            alt="Next Logo"
            width={130}
            height={40}
            className="w-[90px] sm:w-[130px]"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/typescript.png"}
            alt="Next Logo"
            width={140}
            height={40}
            className="w-[100px] sm:w-[140px]"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/wordpress.png"}
            alt="Next Logo"
            width={170}
            height={40}
            className="w-[120px] sm:w-[170px]"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/tailwind.png"}
            alt="Next Logo"
            width={250}
            height={40}
            className="w-[150px] sm:w-[250px]"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/javascript.png"}
            alt="Next Logo"
            width={50}
            height={40}
            className="w-[30px] sm:w-[50px]"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/react.png"}
            alt="Next Logo"
            width={55}
            height={40}
            className="w-[30px] sm:w-[55px]"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/prisma.png"}
            alt="Next Logo"
            width={120}
            height={40}
            className="w-[75px] sm:w-[120px]"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={"/logos/git.png"}
            alt="Next Logo"
            width={90}
            height={40}
            className="w-[60px] sm:w-[90px]"
          />
        </div>
      </div>
    </div>
  );
};
