import Image from "next/image";
import Link from "next/link";
import VideoPlaceholder from "./videoplaceholder";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-y-12 lg:gap-x-24 lg:grid lg:grid-cols-2">
      <Link
        href={"/works/oodhotels"}
        className="h-[380px] overflow-hidden relative"
      >
        <video
          width={100}
          height={500}
          muted
          loop
          autoPlay
          placeholder="blur"
          className="rounded-lg w-full object-cover h-[350px]"
        >
          <source src="/oodhotels-vid.mp4" type="video/mp4"></source>
        </video>

        <h3 className="text-sm sm:text-xl mt-2 font-semibold">
          ÖÖD Hotels, Estonia
        </h3>
      </Link>

      <div className="mt-0 lg:mt-48 h-[350px]">
        <Link href={"/works/veskitehnopark"} className="h-[350px] bg-rose-500">
          <div className="relative h-full">
            <Image
              src={"/veskitehnopark.webp"}
              unoptimized
              alt="Veski tehnopark"
              fill
              className="rounded-lg pt-[-5px] w-full object-cover"
            />
          </div>
          <h3 className="text-sm sm:text-xl mt-2 font-semibold">
            Veskitehnopark
          </h3>
        </Link>
      </div>

      <div className="flex  flex-col mt-10 lg:-mt-8 lg:grid gap-x-24 grid-cols-2 col-span-2">
        <div className="h-[350px]">
          <Link href={"/works/visiongrid"} className="h-[350px]">
            <div className="relative h-full">
              <Image
                src={"/visiongrid.webp"}
                unoptimized
                alt="Veski tehnopark"
                fill
                className="rounded-lg pt-[-5px] w-full object-cover"
              />
            </div>
            <h3 className="text-sm sm:text-xl mt-2 font-semibold">
              VisionGrid
            </h3>
          </Link>
        </div>
        <div className="mt-10 lg:mt-0 flex items-center justify-center ">
          <Link
            href={"/works"}
            className="text-2xl sm:text-3xl lg:text-5xl font-semibold hover:underline transition-all"
          >
            See other works.
          </Link>
        </div>
      </div>
    </div>
  );
};
