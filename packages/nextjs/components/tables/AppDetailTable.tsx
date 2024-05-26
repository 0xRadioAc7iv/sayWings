"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import dummyData, { Protocol } from "../../utils/dummyData";

const AppDetailTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 20;

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
    setCurrentPage(1);
  }, []);

  const renderRowsForPage = (): JSX.Element[] => {
    const indexOfLastRow: number = currentPage * rowsPerPage;
    const indexOfFirstRow: number = indexOfLastRow - rowsPerPage;
    const currentRows: Protocol[] = dummyData.slice(indexOfFirstRow, indexOfLastRow);

    return currentRows.map((order) => (
      <li
        key={order.id}
        className="hover:bg-gray-100 px-4 py-2 grid m-auto md:grid-cols-7 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer overflow-hidden border-b-black border-opacity-10 border-b-2"
        style={{ gridTemplateColumns: "20rem 10rem 10rem 10rem 10rem 10rem 10rem" }}
      >
        <div className="flex gap-2 items-center text-black">
          <Image src={order.logo} width={30} height={30} alt={order.name} className="rounded-full"/>
          {order.name}
        </div>
        <div className="text-black">{order.type}</div>
        <div className="text-black">{order.tvl}</div>
        <div className="text-black">{order.apy}%</div>
        <div className="text-black">{order.openSource === 1 ? 'Yes' : 'No'}</div>
        <div className="text-black">{order.audited === 1 ? 'Yes' : 'No'}</div>
      </li>
    ));
  };

  return (
    <div className="">
      <div className="">
        <div className="w-full m-auto bg-white overflow-y-auto rounded-xl border-2 border-black hover:bg-[#FFFFFF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          <div 
            className="p-4 py-3 grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer border-b-black border-opacity-30 border-b-2"
            style={{ gridTemplateColumns: "20rem 10rem 10rem 10rem 10rem 10rem 10rem" }}
            >
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">Protocol</div>
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">Type</div>
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">TVL</div>
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">Base APY</div>
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">Open Source</div>
            <div className="text-neutral-500 text-sm font-medium font-jakarta uppercase">Audited</div>
          </div>
          <ul>{renderRowsForPage()}</ul>
        </div>
      </div>
    </div>
  );
};

export default AppDetailTable;