/** @format */

import React from "react";

function Footer() {
  return (
    <div className="relative font-neutralFace px-3">
      <div className="hidden lg:block mb-[10vh]">
        <div className="mx-1 font-monument font-semibold py-10 text-[13.2vmax] my-1 leading-none">
          Ibrokhim <br /> Ismoilov
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div>FOLLOW US</div>
        <div className="text-4xl underline">INSTAGRAM</div>
        <div className="text-4xl underline">FACEBOOK</div>
        <div className="text-4xl underline">Github</div>
        <div className="text-4xl underline">Linkedin</div>
      </div>
      <div className="flex pt-5 flex-col lg:flex-row items-end lg:items-center justify-between">
        <div>TOP</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">WORK</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">ABOUT</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">
          PUBLICATIONS
        </div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">
          OFFICE
        </div>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="flex flex-col lg:flex-row lg:mt-20 mb-2 items-start lg:items-end justify-between">
        <div className="my-5 lg:my-0">COPYRIGHT 2023 - Ibrokhim.uz</div>
        <div>JOBS</div>
        <div>
          A independent <br /> music agency
        </div>
        <div>open roles</div>
        <div className="flex-wrap w-[100%] sm:w-auto sm:flex justify-end sm:justify-between text-right sm:text-left sm:space-x-3 mt-5">
          <div>INSTAGRAM</div>
          <div>FACEBOOK</div>
          <div>Github</div>
          <div>Linkedin</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
