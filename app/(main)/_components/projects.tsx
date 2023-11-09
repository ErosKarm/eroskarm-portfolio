import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-x-24">
      <Link href={"/works/oodhotels"}>
        <Image
          src={"/oodhotles.gif"}
          alt="ÖÖD Hotels GIF"
          width={600}
          height={600}
          className="rounded-lg"
        />
        <h3 className="text-xl mt-2 font-semibold">ÖÖD Hotels, Estonia</h3>
      </Link>
      <Link href={"/works/veskitehnopark"} className="mt-48">
        <Image
          src={"/veskitehnopark.webp"}
          alt="Veski tehnopark GIF"
          width={400}
          height={900}
          className="rounded-lg pt-[-5px] w-full"
        />
        <h3 className="text-xl mt-2 font-semibold">Veskitehnopark</h3>
      </Link>
      <div className="-mt-8 grid gap-x-24 grid-cols-2 col-span-2">
        <div className="">
          <Image
            src={"/f1.webp"}
            alt="Veski tehnopark GIF"
            width={400}
            height={900}
            className="rounded-lg pt-[-5px] w-full"
          />
          <h3 className="text-xl mt-2 font-semibold">F1 Dash</h3>
        </div>
        <div className="flex items-center justify-center ">
          <Link
            href={"/works"}
            className="text-5xl font-semibold hover:underline transition-all"
          >
            See other works.
          </Link>
        </div>
      </div>
    </div>
  );
};
