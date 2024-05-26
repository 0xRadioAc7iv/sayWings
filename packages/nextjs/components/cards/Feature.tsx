import React from "react";
import Image from "next/image";

interface FeatureProps {
  img: string;
  title: string;
  subtitle: string;
  bgColor: string;
}

const Feature: React.FC<FeatureProps> = ({ img, title, subtitle, bgColor }) => {
  return (
    <div className="">
      <div className={`w-96 h-[40vh] px-5 py-5 font-jakarta hover:${bgColor} hover:shadow-none shadow-[2px_2px_0px_rgba(0,0,0,1)] border-2 border-black flex-col justify-center items-start gap-8 inline-flex rounded-lg ${bgColor}`}>
        <Image src={img} alt="Feature Icon" className="h-[60px] w-[60px]"/>
        <div className="self-stretch h-[117px] flex-col justify-start items-start gap-5 flex">
          <div className="text-zinc-800 text-[22px] font-bold font-jakarta">{title}</div>
          <div className="self-stretch text-zinc-800 text-lg font-medium font-jakarta">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;