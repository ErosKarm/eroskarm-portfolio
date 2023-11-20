import Image from "next/image";

export const Brands = () => {
  return (
    <div className="grid grid-cols-2 gap-x-0 gap-y-10 sm:gap-10 mt-10 sm:grid-cols-3 lg:grid-cols-5 h-auto sm:h-[500px] lg:h-[300px]  items-center justify-center align-center">
      <Image
        src={"/brands/aitaneestit.webp"}
        unoptimized
        alt="Aitan Eestit logo"
        width={80}
        height={80}
        className="mx-auto grayscale brightness-0 w-[60px] sm:w-[80px] "
      />
      <Image
        src={"/brands/eestifotograafid.webp"}
        unoptimized
        alt="Eesti Fotograafid logo"
        width={80}
        height={80}
        className="mx-auto grayscale brightness-0 w-[70px] sm:w-[80px]"
      />
      <Image
        src={"/brands/ehitusteatis.svg"}
        alt="Ehitusteatis logo"
        width={180}
        height={180}
        className="mx-auto grayscale brightness-0 w-[120px] sm:w-[180px]"
      />
      <Image
        src={"/brands/emanco.webp"}
        unoptimized
        alt="Eesti Fotograafid Logo"
        width={130}
        height={130}
        className="mx-auto grayscale w-[100px] sm:w-[130px]"
      />
      <Image
        src={"/brands/epk.webp"}
        unoptimized
        alt="EPK Ehitus logo"
        width={70}
        height={70}
        className="mx-auto grayscale w-[55px] sm:w-[70px]"
      />
      <Image
        src={"/brands/iriscorp.svg"}
        alt="Iriscorp logo"
        width={80}
        height={80}
        className="mx-auto grayscale brightness-0 w-[80px] sm:w-[80px]"
      />
      <Image
        src={"/brands/rahunimel.webp"}
        unoptimized
        alt="Rahunimel logo"
        width={80}
        height={80}
        className="mx-auto grayscale w-[55px] sm:w-[80px]"
      />
      <Image
        src={"/brands/rightmotion.webp"}
        unoptimized
        alt="Right-Motion logo"
        width={80}
        height={80}
        className="mx-auto grayscale brightness-0 w-[70px] sm:w-[80px]"
      />
      <Image
        src={"/brands/saavasteloos.svg"}
        alt="Saavasteloos logo"
        width={80}
        height={80}
        className="mx-auto grayscale w-[70px] sm:w-[80px]"
      />
      <Image
        src={"/brands/seadmerent.svg"}
        alt="Seadmerent logo"
        unoptimized
        width={80}
        height={80}
        className="mx-auto grayscale w-[80px] sm:w-[100px]"
      />
      <Image
        src={"/brands/treefield.webp"}
        unoptimized
        alt="Treefield logo"
        width={80}
        height={80}
        className="mx-auto grayscale w-[80px] sm:w-[110px]"
      />
      <Image
        src={"/brands/tulivee.svg"}
        alt="Tulivee logo"
        width={40}
        height={40}
        className="mx-auto grayscale brightness-0 w-[25px] sm:w-[40px]"
      />
      <Image
        src={"/brands/veskitehnopark.webp"}
        unoptimized
        alt="Veskitehnopark logo"
        width={140}
        height={140}
        className="mx-auto grayscale brightness-0 w-[110px] sm:w-[140px]"
      />
      <Image
        src={"/brands/lbe.svg"}
        alt="LukasBenjamin logo"
        width={80}
        height={80}
        className="mx-auto grayscale brightness-0 w-[55px] sm:w-[80px]"
      />
      <Image
        src={"/brands/estinwood.webp"}
        unoptimized
        alt="Estinwood logo"
        width={80}
        height={80}
        className="mx-auto grayscale brightness-0 w-[60px] sm:w-[80px]"
      />
    </div>
  );
};
