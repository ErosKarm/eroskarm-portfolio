import { Container } from "@/components/container";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container className="py-12 px-12 xl:px-0 flex justify-between">
        <div className="flex flex-col">
          <div>
            <span className="">Copyright © 2023 </span>
            <Link href={"/"} className="hover:underline">
              eroskarm.com
            </Link>
          </div>
          <Link
            href={"/privacy-policy"}
            className="text-sm text-muted-foreground"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex items-center">contact@eroskarm.com</div>
      </Container>
    </footer>
  );
};
