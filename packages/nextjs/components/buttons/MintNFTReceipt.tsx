import React, { useState } from "react";
import { ethers } from "ethers";
import { addresses } from "~~/utils/addresses";
import { nftAbi } from "~~/utils/nftAbi";

const MintNFTReceipt = () => {
  const [txHash, setTxHash] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mintNftReceipt = async () => {
    try {
      setLoading(true);
      setError(null);
      const provider = new ethers.providers.Web3Provider(window.ethereum, "sepolia");
      await provider.send("eth_requestAccounts", []);
      const accounts = await provider.listAccounts();
      const signer = provider.getSigner(accounts[0]);
      const mintContract = new ethers.Contract(addresses.SepoliaNftAddress, nftAbi, signer);

      const tx = await mintContract.safeMint(accounts[0], 1);
      setTxHash(tx.hash);
      console.log(tx);
    } catch (err) {
      console.error(err);
      setError("An error occurred while minting the NFT.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="popup" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <p className="text-xl mb-4">Deposited! Mint NFT as a receipt</p>
        <button
          id="mintButton"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={mintNftReceipt}
          disabled={loading}
        >
          {loading ? "Minting..." : "Mint NFT"}
        </button>
        {txHash && (
          <div className="mt-4">
            <p>Transaction completed!</p>
            <a
              href={`https://sepolia.etherscan.io/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on Etherscan
            </a>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default MintNFTReceipt;
