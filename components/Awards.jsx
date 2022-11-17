import Image from "next/image";
import React from "react";
import award1 from "assets/images/award1.png";
import award2 from "assets/images/award2.png";
import award3 from "assets/images/award3.png";
import award4 from "assets/images/award4.png";
import award5 from "assets/images/award5.png";
import award6 from "assets/images/award6.png";

function Awards() {
  return (
    <div className="relative font-neutralFace">
      <div className="bg-[#e7e7e7] text-black pb-[30vh]">
        <div className="px-3 py-2">
          <div className="w-full h-[1px] bg-black"></div>
          <div className="flex justify-between w-full text-xs py-2">
            <div>BOLD</div>
            <div>CULTURALLY CONNECTED</div>
            <div>INCLUSIVE</div>
          </div>
          <div className="my-28">
            <div className="text-sm md:text-xl">(our goal)</div>
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug indent-[25vw] my-2">
              “Dreams do not come true just because you dream them. It's hard work that makes things happen. It's hard work that creates change.”           </div>
          </div>
        </div>
      </div>
      <div className="h-[75vh] bg-black text-[#e7e7e7]">
        <div className="flex items-center justify-center w-full h-full text-center text-7xl sm:text-9xl md:text-[10rem] xl:text-[16rem] leading-none">
          <h1 className="-mt-[50vh] mix-blend-difference uppercase">
            kings <br /> never die
          </h1>
        </div>
      </div>
      {/* <div className="absolute top-[35%] right-[10%]">
        <Image
          alt=""
          src={award1}
          className="h-28 sm:h-44 md:h-80 z-10 object-contain"
        />
      </div>

      <div className="absolute bottom-[15%] left-[15%]">
        <Image
          alt=""
          src={award2}
          className="h-28 sm:h-44 md:h-80 z-10 object-contain"
        />
      </div>

      <div className="absolute bottom-[50%] left-[20%]">
        <Image
          alt=""
          src={award3}
          className="h-28 sm:h-44 md:h-80 z-10 object-contain"
        />
      </div>

      <div className="absolute bottom-[30%] left-[60%]">
        <Image
          alt=""
          src={award4}
          className="h-28 sm:h-32 md:h-52 z-10 object-contain"
        />
      </div>

      <div className="absolute right-[50%] bottom-[30%]">
        <Image
          alt=""
          src={award5}
          className="h-28 sm:h-44 md:h-80 z-10 object-contain"
        />
      </div>

      <div className="absolute bottom-[15%] right-[35%]">
        <Image
          alt=""
          src={award6}
          className="h-28 sm:h-32 md:h-48 z-10 object-contain"
        />
      </div> */}
    </div>
  );
}

export default Awards;
