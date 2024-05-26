import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="min-h-0 h-[30vh] bg-[#46D3FF] px-28 py-10 mb-11 lg:mb-0">
      <div className="flex justify-between">
        <div className="flex">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <div>Lending</div>
          <div>Portfolio</div>
          <div>Swap</div>
          <div>Apps</div>
        </div>
      </div>
    </div>
  );
};
