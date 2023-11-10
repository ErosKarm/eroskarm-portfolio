import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, FileInput, MoveRight } from "lucide-react";
import Image from "next/image";
import { Technologies } from "../../_components/technologies";
import Link from "next/link";
import { CVPopover } from "@/components/cv-popover";
import { Brands } from "../../_components/brands";

const AboutPage = () => {
  return (
    <>
      <section>
        <Container className="mt-[150px] lg:mt-[250px] xl:px-0 px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-semibold">
            Discover
          </h2>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl  font-semibold">
            More about me.
          </h1>
        </Container>
      </section>

      <section>
        <div className="w-full h-[400px] mt-10 overflow-hidden">
          <video
            autoPlay
            loop
            playsInline
            muted
            className="object-contain w-full"
          >
            <source src="/fluid-10.mp4" type="video/mp4"></source>
          </video>
        </div>
      </section>

      <section>
        <Container className="lg:mt-48 max-w-[850px] lg:px-0 px-12 ">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl lg:text-4xl font-bold mt-5 text-center">
              I&apos;m Eros Karm, a Web Developer with a Passion for Crafting
              User-Centric Experiences and Building Responsive Websites that
              Engage and Delight Audiences.
            </h2>

            <Image
              src="/eroskarm.jpg"
              alt="Eros Karm"
              width={160}
              height={160}
              className="rounded-full flex  mt-16 grayscale"
            />

            <div className="flex items-center justify-end gap-x-4 mt-20 w-full">
              <Button size="sm" asChild variant="ghost">
                <Link
                  href={"https://www.linkedin.com/in/eros-karm-426196234/"}
                  className="text-xs text-muted-foreground"
                >
                  Linkedin
                </Link>
              </Button>
              <CVPopover />
              <span className="text-xs text-muted-foreground">
                Or contact me directly{" "}
                <Link
                  href={"/contact"}
                  className="font-bold hover:underline text-black"
                >
                  contact@eroskarm.com
                </Link>
              </span>
            </div>
            <Separator className="mt-2" />
            <p className="mt-2 text-sm">
              As a web developer with a strong emphasis on front-end
              development. My journey in web development began at SYSTION OÜ,
              where I specialized in crafting WordPress websites for diverse
              clientele. During this time, I had the privilege of collaborating
              with various reputable brands, assisting them in translating their
              vision into an impactful online presence.
            </p>
            <p className="mt-8 text-sm">
              Today, my primary focus revolves around creating websites from the
              ground up, primarily leveraging the power of React. I am committed
              to delivering customized, responsive, and user-friendly web
              solutions that meet unique requirements.
            </p>
            <p className="mt-8 text-sm">
              My proficiency extends to both Estonian and English, allowing me
              to communicate effectively with a broad range of clients. I take
              pride in my exceptional verbal communication skills, which play a
              vital role in understanding and delivering on project objectives.
            </p>
            <p className="mt-8 text-sm  w-full">
              In my development journey, I maintain an unwavering dedication to
              achieving my goals and exceeding expectations.
            </p>
          </div>
        </Container>
      </section>

      <section className="">
        <Container className="max-w-[850px] px-12 lg:px-0">
          <Separator className="mt-16 mb-4" />
          <div className="grid grid-cols-4 gap-y-7">
            <div className="flex flex-col">
              <span className="text-xs font-semibold mb-1">Languages</span>
              <p className="text-sm">Estonian, English</p>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-semibold mb-1">Experience</span>
              <p className="text-sm">3+ years</p>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-semibold mb-1">
                Projects completed
              </span>
              <p className="text-sm">50+</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold mb-1">Education</span>
              <p className="text-sm">IT Systems Specialist</p>
              <span className="text-xs text-muted-foreground">
                EstQF Level 4
              </span>
            </div>
            <div className="flex flex-col col-span-4">
              <span className="text-xs font-semibold mb-1">Skills</span>
              <div className="flex gap-x-2">
                <Button className="text-xs border" variant="ghost" size="sm">
                  UI & UX
                </Button>

                <Button className="text-xs border" variant="ghost" size="sm">
                  Development
                </Button>
                <Button className="text-xs border" variant="ghost" size="sm">
                  Web
                </Button>
                <Button className="text-xs border" variant="ghost" size="sm">
                  Design
                </Button>
                <Button className="text-xs border" variant="ghost" size="sm">
                  Photography
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-8">
        <Container className="max-w-[850px] lg:px-0 px-12">
          <Separator className="mt-0 mb-4" />

          <div className="grid grid-cols-5">
            <div>
              <span className="text-xs font-semibold">2021 - present</span>
            </div>
            <div className="col-span-4 ">
              <span className="text-sm font-bold">SYSTION OÜ</span>
              <br className="m-0 p-0" />
              <span className="text-xs text-muted-foreground">
                Wordpress Developer
              </span>
              <p className="text-sm mt-3">
                Over the past 9 years I have been working with big companies and
                rising startups around the world as a designer and art director,
                working solo and leading small design teams. In my spare time I
                enjoy photography and motorcycle adventures.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-5 mt-10">
            <div>
              <span className="text-xs font-semibold">
                Feb. 2020 - Mar. 2020
              </span>
            </div>
            <div className="col-span-4 ">
              <span className="text-sm font-bold">ITSON OÜ</span>
              <br className="m-0 p-0" />
              <span className="text-xs text-muted-foreground">
                Computer Hardware & Networking Internship
              </span>
              <p className="text-sm mt-3">
                Over the past 9 years I have been working with big companies and
                rising startups around the world as a designer and art director,
                working solo and leading small design teams. In my spare time I
                enjoy photography and motorcycle adventures.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="max-w-[1100px] h-full">
          <Separator className="mt-10 mb-4" />
          <h3 className="text-xl font-bold text-center mt-10">
            Some of the brands I&apos;ve worked with
          </h3>

          <Brands />
        </Container>
      </section>

      <section>
        <Container className="max-w-[850px] h-[400px] flex items-center justify-center flex-col ">
          <span className="text-center text-muted-foreground tracking-widest text-sm">
            LOKING FOR A DEVELOPER?
          </span>
          <Link
            href={"/contact"}
            className="flex justify-center align-center items-center text-4xl sm:text-5xl lg:text-7xl font-semibold hover:underline"
          >
            Let&apos;s work together{" "}
            <MoveRight className="h-12 w-12 ml-4 mt-2" />
          </Link>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
