import { Container } from "@/components/container";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container className="px-5 py-6  sm:py-12 sm:px-12 xl:px-0 flex justify-between">
        <div className="flex flex-col">
          <div>
            <span className="text-xs sm:text-base">Copyright © 2023 </span>
            <Link href={"/"} className="hover:underline text-xs sm:text-base">
              eroskarm.com
            </Link>
          </div>
          <Link
            href={"/privacy-policy"}
            className="text-xs sm:text-base text-muted-foreground"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex items-center text-xs sm:text-base">
          contact@eroskarm.com
        </div>
      </Container>
    </footer>
  );
};
