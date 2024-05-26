import React from "react";
import Link from "next/link";

const InvestButton = () => {
  return (
    <Link href="/lending">
      <button className="relative text-white border-2 border-black bg-black py-5 flex justify-center px-4 w-48 transition-all duration-300 ease-in-out hover:w-60 cursor-pointer">
        Invest Now!
        <div className="arrow"></div>
      </button>
    </Link>
  );
};

export default InvestButton;
