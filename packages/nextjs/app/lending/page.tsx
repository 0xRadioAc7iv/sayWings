"use client";

import React, { useState } from "react";
import { CompoundSupplyABI } from "../../utils/CompoundSupplyABI";
import { addresses } from "../../utils/addresses";
import { nftAbi } from "../../utils/nftAbi";
import { ethers } from "ethers";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import MarketDropDown from "~~/components/dropdown/MarketDropDown";
import TokenDropDown from "~~/components/dropdown/TokenDropDown";

const Page = () => {
  const [amount, setAmount] = useState("");
  const [amountNew, setAmountNew] = useState("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const handleAmountChange = (e: any) => {
    let value = e.target.value;
  
    // Remove all non-numeric characters except for the first decimal point
    value = value.replace(/[^0-9.]/g, "");
  
    // Remove additional decimal points if any
    const parts = value.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts.slice(1).join('');
    }
  
    setAmount(value);
  };
  

  const handleAmountChangeNew = (e: any) => {
    let value = e.target.value;
  
    // Remove all non-numeric characters except for the first decimal point
    value = value.replace(/[^0-9.]/g, "");
  
    // Remove additional decimal points if any
    const parts = value.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts.slice(1).join('');
    }
  
    setAmount(value);
  };
  

  const toggleAdvancedSettings = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  const deposit = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "sepolia");

    await provider.send("eth_requestAccounts", []);
    const accounts = await provider.listAccounts();
    const signer = provider.getSigner(accounts[0]);
    const supplyContract = new ethers.Contract(addresses.CompoundContractAddress, CompoundSupplyABI, signer);

    await supplyContract.supply(addresses.USDCCompoundContract, "1000000");
  };

  const mintReceiptNft = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "sepolia");

    await provider.send("eth_requestAccounts", []);
    const accounts = await provider.listAccounts();
    const signer = provider.getSigner(accounts[0]);
    const mintContract = new ethers.Contract(addresses.SepoliaNftAddress, nftAbi, signer);

    const tx = await mintContract.safeMint(accounts[0], 1);
    console.log(tx);
  };

  return (
    <div className="px-[400px] py-32">
      <div className="p-8 bg-white rounded-lg">
        <div className="mb-2 text-black/60 text-sm  uppercase">Select Token</div>
        <div className="relative border-2 border-black p-2 flex justify-between">
          <TokenDropDown />
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="inset-0 bg-transparent w-full text-right px-4 py-2 text-lg font-medium focus:outline-none"
            placeholder="0.00"
          />
        </div>
        <div className="mt-8">
          {isAdvancedOpen && (
            <>
              <div className="mb-4">
                <div className="text-black/60 text-sm mb-4">Select Markets</div>
                <div className="border-2 border-black p-4">
                  <MarketDropDown />
                </div>
              </div>
              <div className="relative border-2 border-black p-2 flex justify-between">
                <div className="text-black/60 w-[20rem] flex items-center">Minimum Yield Rate</div>
                <input
                  type="text"
                  value={amountNew}
                  onChange={handleAmountChangeNew}
                  className="inset-0 bg-transparent w-full text-right px-4 py-2 text-lg font-medium focus:outline-none"
                  placeholder="0.00"
                />
              </div>
            </>
          )}
          <button onClick={toggleAdvancedSettings} className="text-black/60 my-6 flex items-center gap-2 uppercase">
            Advanced Settings{" "}
            {isAdvancedOpen ? <IoMdArrowDropup className="text-xl" /> : <IoMdArrowDropdown className="text-xl" />}
          </button>
        </div>
        <button
          className="bg-black text-white py-3 w-full flex items-center gap-3 justify-center"
          onClick={() => {
            deposit();
          }}
        >
          Deposit
        </button>
        <button
          className="bg-black text-white py-3 flex items-center gap-3 justify-center"
          onClick={() => {
            mintReceiptNft();
          }}
        >
          Mint
        </button>
      </div>
      <div className="text-[18px] font-semibold items-center gap-2 flex justify-center mt-10 text-green-800">
        <IoShieldCheckmark />
        The smart contracts at SayWings are <span className="underline">verified</span> by ChainGPT's Audit API and SDK.
      </div>
    </div>
  );
};

export default Page;