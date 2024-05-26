"use client";

import React from "react";
import Bar from "~~/components/charts/Bar";
import LineAndBarChart from "~~/components/charts/LineAndBarChart";
import PortfolioTable from "~~/components/tables/PortfolioTable";

const page = () => {
  const data = [
    { bounceRate: 20, conversionRate: 15 },
    { bounceRate: 25, conversionRate: 20 },
    { bounceRate: 30, conversionRate: 25 },
    { bounceRate: 35, conversionRate: 30 },
    { bounceRate: 40, conversionRate: 35 },
  ];

  return (
    <div className="w-full items-center justify-center flex flex-col gap-8 my-28">
      <div className="flex justify-center items-center gap-4">
        <div className="w-[412px] flex h-[265px] bg-[#FFFFFF] rounded-lg border-black font-jakarta border-2 hover:bg-[#FFFFFF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#FFFFFF]">
          <div className="w-1/2 flex h-[265px] flex-col">
            <div className="h-1/2 flex justify-center flex-col items-center">
              <div className="text-neutral-500 text-xs font-medium font-jakarta  uppercase">total invested value</div>
              <div className="text-black text-4xl font-extrabold font-jakarta">130K</div>
            </div>
            <div className="bg-black h-0.5 w-[140px] ml-7" />
            <div className="h-1/2 flex justify-center flex-col items-center">
              <div className="text-neutral-500 text-xs font-medium font-jakarta  uppercase">total earned interest</div>
              <div className="text-black text-4xl font-extrabold font-jakarta">9.32K</div>
            </div>
          </div>
          <div className="bg-black w-0.5 h-[180px] mt-10" />
          <div className="w-1/2 flex justify-center items-center">
            <div className="h-1/2 flex justify-center flex-col items-center">
              <div className="text-neutral-500 text-xs font-medium font-jakarta  uppercase">estimated daily return</div>
              <div className="text-black text-4xl font-extrabold font-jakarta">9.32K</div>
            </div>
          </div>
        </div>
        <div className="w-[412px] h-[265px] bg-[#FFFFFF] rounded-lg border-black font-jakarta border-2 hover:bg-[#FFFFFF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#FFFFFF]">
          <Bar data={data} />
        </div>
        <div className="w-[412px] h-[265px] bg-[#FFFFFF] rounded-lg border-black font-jakarta border-2 flex items-center justify-center hover:bg-[#FFFFFF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#FFFFFF]">
          <LineAndBarChart />
        </div>
      </div>
      <div>
        <div className="">
          <PortfolioTable />
        </div>
      </div>
    </div>
  );
};

export default page;
