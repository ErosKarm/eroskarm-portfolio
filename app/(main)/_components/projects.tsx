import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-x-8 lg:gap-x-24 lg:grid lg:grid-cols-2">
      <Link href={"/works/oodhotels"} className="">
        <video
          width={100}
          height={100}
          muted
          loop
          autoPlay
          className="rounded-lg w-full"
        >
          <source src="/oodhotels.mp4" type="video/mp4"></source>
        </video>

        <h3 className="text-sm sm:text-xl mt-2 font-semibold">
          ÖÖD Hotels, Estonia
        </h3>
      </Link>
      <Link href={"/works/veskitehnopark"} className="mt-10 lg:mt-48">
        <Image
          src={"/veskitehnopark.webp"}
          alt="Veski tehnopark GIF"
          width={400}
          height={900}
          className="rounded-lg pt-[-5px] w-full"
        />
        <h3 className="text-sm sm:text-xl mt-2 font-semibold">
          Veskitehnopark
        </h3>
      </Link>
      <div className="flex  flex-col mt-10 lg:-mt-8 lg:grid gap-x-24 grid-cols-2 col-span-2">
        <div className="">
          <Image
            src={"/f1.webp"}
            alt="Veski tehnopark GIF"
            width={400}
            height={900}
            className="rounded-lg pt-[-5px] w-full"
          />
          <h3 className="text-sm sm:text-xl mt-2 font-semibold">F1 Dash</h3>
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
