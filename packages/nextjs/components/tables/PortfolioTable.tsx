"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import portfolioData, { Protocol } from "../../utils/portfolioData";

const PortfolioTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage: number = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://yields.llama.fi/pools');
        console.log('Pool data:', res.data);
      } catch (error) {
        console.error('Error fetching pool data:', error);
      }
    };

    fetchData();
  }, []);

  const renderRowsForPage = (): JSX.Element[] => {
    const indexOfLastRow: number = currentPage * rowsPerPage;
    const indexOfFirstRow: number = indexOfLastRow - rowsPerPage;
    const currentRows: Protocol[] = portfolioData.slice(indexOfFirstRow, indexOfLastRow);

    return currentRows.map((order) => (
      <li
        key={order.id}
        className="hover:bg-gray-100 px-4 py-2 grid m-auto md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer overflow-hidden border-b-black border-opacity-10 border-b-2"
        style={{ gridTemplateColumns: "15vw 15vw 15vw 15vw 20vw" }}
      >
        <div className="flex gap-2 items-center text-black">
          <Image src={order.logo} width={30} height={30} alt={order.name} className="rounded-full"/>
          {order.name}
        </div>
        <div className="text-black">{order.amountInvested}</div>
        <div className="text-black">{order.apy}%</div>
        <div className="text-black">{order.earnedInterest}%</div>
        <div className="text-black">${order.totalInvestedValue}</div>
      </li>
    ));
  };

  return (
    <div className="">
      <div className="">
        <div className="w-full m-auto bg-white overflow-y-auto rounded-xl border-2 border-black hover:bg-[#FFFFFF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          <div 
            className="p-4 py-3 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer border-b-black border-opacity-30 border-b-2"
            style={{ gridTemplateColumns: "15vw 15vw 15vw 15vw 20vw" }}
            >
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">Protocol</div>
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">Amount Invested</div>
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">current apy (%)</div>
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">earned interest (USd)</div>
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">total invested value</div>
          </div>
          <ul>{renderRowsForPage()}</ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTable;