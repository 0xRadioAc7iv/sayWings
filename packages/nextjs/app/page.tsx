"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Accordian from "~~/components/accordian/Accordian";
import TechnicalAccordian from "~~/components/accordian/TechnicalAccordian";
import UtilityAccordian from "~~/components/accordian/UtilityAccordian";
import HeroButton from "~~/components/buttons/HeroButton";
import InvestButton from "~~/components/buttons/InvestButton";
import Feature from "~~/components/cards/Feature";
import clock from "~~/public/features/clock.svg";
import pool from "~~/public/features/pool.svg";
import shield from "~~/public/features/shield.svg";
import coin from "~~/public/hero/coin.svg";
import hand from "~~/public/hero/hand.svg";
import invest from "~~/public/hero/invest.svg";
import pig from "~~/public/hero/pig.svg";
import star from "~~/public/hero/star.svg";

const Home: NextPage = () => {
  const [selectedButton, setSelectedButton] = useState("General");
  const buttonClass = (buttonName: string) =>
    `font-medium leading-tight rounded-lg border-black text-black font-jakarta border-2 border-black px-3 py-2 ${
      selectedButton === buttonName
        ? "bg-[#46D3FF] text-black"
        : "bg-[#ffffff] text-black hover:bg-[#ffffff] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
    }`;

  return (
    <div>
      <div className="w-full h-[90vh] flex">
        <div className="w-3/5 relative flex">
          <div className="absolute top-[5.5rem] left-32">
            <Image src={star} alt="hero" width={100} height={100} />
          </div>
          <div className="font-medium absolute top-20 left-64">
            A DeFi savings account so easy to use - even your grandma can use it.
          </div>
          <div className="absolute top-24 left-60">
            <span className="text-amber-300 text-[111px] font-extrabold font-jakarta text-shadow-black">Say</span>
            <span className="text-pink-200 text-[111px] font-extrabold font-jakarta text-shadow-black">wings</span>
          </div>
          <div className="text-black text-[74px] font-light font-jakarta absolute top-60 left-60">Made Effortless</div>
          <div className="absolute left-80 top-[28rem]">
            <HeroButton text="Start investing" />
          </div>
        </div>
        <div className="w-2/5 relative">
          <div className="absolute right-0">
            <Image src={hand} alt="hand" width={300} height={300} />
          </div>
          <div className="absolute right-48 top-32">
            <Image src={coin} alt="coin" width={75} height={75} className="falling-coin" />
          </div>

          <div className="absolute bottom-0 right-36">
            <Image src={pig} alt="pig" width={200} height={200} />
          </div>
        </div>
      </div>
      {/* <div className="flex items-center w-full h-screen">
        <div className="w-1/2 h-screen flex flex-col gap-4 pl-20 pr-4 pt-14">
          <div className="bg-[#FFCE51] rounded-lg h-[60vh] border-black font-jakarta border-2 hover:bg-[#FFCE51] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#FFCE51]"></div>
          <div className="bg-[#FFB9EC] rounded-lg h-[10vh] border-black font-jakarta border-2 hover:bg-[#FFB9EC] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#FFB9EC]"></div>
        </div>
        <div className="w-1/2 h-screen pr-20 pt-14">
          <div className="bg-[#d9a2fb] rounded-lg h-[72.3vh] border-black font-jakarta border-2 hover:bg-[#d9a2fb] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#d9a2fb]"></div>
        </div>
      </div> */}
      <div className="h-[80vh] bg-[#FFB9EC]">
        <div className="flex pt-10 justify-center">
          <div className="text-zinc-800 text-2xl font-bold font-jakarta">
            Maximize Your Earnings, Effortlessly: Auto-Invest with SayWings
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 pt-24">
          <Feature
            img={pool}
            title={"Automatic Pool Selection"}
            subtitle={
              "Saywings analyzes Polygon Liquidity Pools and automatically invests your funds in the pool with the highest APY."
            }
            bgColor={"bg-white"}
          />
          <Feature
            img={clock}
            title={"Daily APY Optimization"}
            subtitle={
              "We monitor rates every 24 hours and automatically rebalance your investments to maximize your returns."
            }
            bgColor={"bg-[#FFCE51]"}
          />
          <Feature
            img={shield}
            title={"Secure & Transparent"}
            subtitle={"The Smart Contracts at SayWings are verified by ChainGPT's Audit API and SDK."}
            bgColor={"bg-[#46D3FF]"}
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="flex w-1/2 justify-center pt-20">
          <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-200 rounded-full -start-4 ring-2 ring-white dark:ring-gray-900 dark:bg-[#FFB9EC]">
                <svg
                  className="w-3.5 h-3.5 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="font-medium leading-tight bg-[#ffffff] rounded-lg border-black font-jakarta border-2 hover:bg-[#ffffff] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#ffffff] text-black px-3 py-2">
                Connect your Wallet
              </h3>
              <p className="text-sm"></p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-200 rounded-full -start-4 ring-2 ring-white dark:ring-gray-900 dark:bg-[#FFB9EC]">
                <svg
                  className="w-4 h-4 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 className="font-medium leading-tight bg-[#ffffff] rounded-lg border-black font-jakarta border-2 hover:bg-[#ffffff] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#ffffff] text-black px-3 py-2">
                Select your Token
              </h3>
              <p className="text-sm"></p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-200 rounded-full -start-4 ring-2 ring-white dark:ring-gray-900 dark:bg-[#FFB9EC]">
                <svg
                  className="w-4 h-4 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 className="font-medium leading-tight bg-[#ffffff] rounded-lg border-black font-jakarta border-2 hover:bg-[#ffffff] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#ffffff] text-black px-3 py-2">
                Select your Dapps
              </h3>
              <p className="text-sm"></p>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-200 rounded-full -start-4 ring-2 ring-white dark:ring-gray-900 dark:bg-[#FFB9EC]">
                <svg
                  className="w-4 h-4 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </span>
              <h3 className="font-medium leading-tight bg-[#ffffff] rounded-lg border-black font-jakarta border-2 hover:bg-[#ffffff] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#ffffff] text-black px-3 py-2">
                Set Minimum Return
              </h3>
              <p className="text-sm"></p>
            </li>
            <li className="ms-6 pt-4">
              <span className="absolute -start-4">
                <InvestButton />
              </span>
            </li>
          </ol>
        </div>
        <div className="flex w-1/2 justify-center pt-20">
          <Image src={invest} alt="hero" width={600} height={600} className="rounded-lg border-2 border-black" />
        </div>
      </div>
      <div className="pt-48">
        <div className="h-[80vh] bg-[#FFCE51] p-28 py-20">
          <div>
            <div className="text-zinc-800 text-2xl font-bold font-jakarta">FAQs</div>
          </div>
          <div className="flex gap-4 mt-10">
            <button className={buttonClass("General")} onClick={() => setSelectedButton("General")}>
              General
            </button>
            <button className={buttonClass("Utility")} onClick={() => setSelectedButton("Utility")}>
              Utility
            </button>
            <button className={buttonClass("Technical")} onClick={() => setSelectedButton("Technical")}>
              Technical
            </button>
          </div>
          <div className="mt-8">
            {selectedButton === "General" && (
              <div>
                <Accordian />
              </div>
            )}
            {selectedButton === "Utility" && (
              <div>
                <UtilityAccordian />
              </div>
            )}
            {selectedButton === "Technical" && (
              <div>
                <TechnicalAccordian />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-72 p-28 py-20">
        <div className="flex justify-between">
          <div>
            <div className="text-zinc-800 text-2xl font-bold font-jakarta">Join The Community to Learn More</div>
            <div>
              <div className="w-[200px] h-10 justify-start items-start gap-10 inline-flex pt-4">
                <div className="w-10 h-10 flex justify-center cursor-pointer items-center bg-white rounded-full border-2 border-black">
                  <div className="h-6 w-6">
                    <FaDiscord />
                  </div>
                </div>
                <div className="w-10 h-10 flex justify-center cursor-pointer items-center bg-white rounded-full border-2 border-black">
                  <div className="h-6 w-6">
                    <FaSquareXTwitter />
                  </div>
                </div>
                <div className="w-10 h-10 flex justify-center cursor-pointer items-center bg-white rounded-full border-2 border-black">
                  <div className="h-6 w-6">
                    <FaGithub />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-6 gap-3 cursor-pointer">
            <div className="text-black text-lg underline">Start Investing!</div>
            <div className="text-black h-6 w-6">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
