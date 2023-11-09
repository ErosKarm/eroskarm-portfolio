import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";

const OodhotelsPage = () => {
  return (
    <>
      <section className=" w-full ">
        <Container className="grid grid-cols-2 mt-[150px] ">
          <div>
            <span className="text-muted-foreground tracking-widest">
              CASE STUDY
            </span>
            <h1 className="text-5xl font-bold mt-7 w-[80%] mb-12">
              Veskitehnopark — Modern way of storage space
            </h1>

            <div className="mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                SERVICES
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">
                UI/UX, Front-end, Back-end
              </h1>
            </div>

            <div className="mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                Development
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">Concept</h1>
            </div>

            <div className="mb-6">
              <span className="text-muted-foreground tracking-widest text-sm">
                Year
              </span>
              <h1 className="text-md font-bold mt-2 w-[80%]">2023</h1>
            </div>

            <div className="mb-6 flex flex-col">
              <span className="text-muted-foreground tracking-widest text-sm">
                Link
              </span>

              <div className="flex gap-x-3">
                <a
                  href={"https://veskitehnopark-concept.vercel.app/"}
                  className="text-md font-bold mt-2 hover:underline"
                  target="_blank"
                >
                  Website
                </a>
                <a
                  href={"https://github.com/ErosKarm/veskitehnopark-concept"}
                  className="text-md font-bold mt-2 hover:underline"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 ">
            <p className="text-stone-500 text-xl mb-6">
              Veskitehnopark is not just another storage facility; it&apos;s a
              smart storage revolution. Offering flexible and secure storage
              solutions, Veskitehnopark allows individuals to rent storage rooms
              with ease, providing peace of mind and convenience. Its innovative
              approach to storage management brings enhanced security and ample
              parking space, making it a true game-changer in the industry.
            </p>
            <p className="text-stone-500 text-xl mb-6">
              To showcase the brilliance of Veskitehnopark, I took the
              initiative to create a concept website that captures its essence.
              Although this website remains a conceptual design and isn&apos;t
              operational, it mirrors the innovative spirit of Veskitehnopark.
            </p>
            <p className="text-stone-500 text-xl mb-6">
              In developing this project, I leveraged Next.js with React to
              ensure a seamless and responsive user experience. Supabase served
              as the database, offering robust and reliable data storage. The
              website&apos;s overall look and feel were enhanced by the dynamic
              pairing of Tailwind CSS and ShadcnUI, a versatile component
              library, creating an engaging and visually appealing user
              interface.
            </p>
            {/* <p className="text-stone-500 text-xl mb-6">
              The final deliverable was a family of 4 products that you can
              download and use for free. Just download InVision Studio, open
              their App Store and search for 128 Outline Icons, eCommerce
              Wireframe Kit, User Interface Kit and Web Wireframe Kit.
            </p> */}
          </div>
        </Container>
      </section>

      <section className="w-full mt-24">
        <Container className="max-w-[1500px] w-[1500px] pt-24 pb-12 mb-12 bg-stone-200 rounded-md">
          <div className="w-full h-[700px] relative">
            <Image
              src="/veskitehnopark/veski-1.png"
              alt="ÖÖD Website"
              fill
              className="object-contain rounded-xl"
            />
          </div>

          <div className="w-full h-[700px] relative mt-24">
            <video className="w-full h-full" autoPlay muted loop>
              <source src="/veskitehnopark/veski-vid.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="w-full h-[700px] relative mt-24">
            <Image
              src="/veskitehnopark/veski-3.png"
              alt="ÖÖD Website"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default OodhotelsPage;
