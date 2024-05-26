import { ethers } from "ethers";
import { addresses } from "~~/utils/addresses";
import { nftAbi } from "~~/utils/nftAbi";

const MintNFTReceipt = () => {
  const mintNftReceipt = async () => {
    console.log("hehe");
    const provider = new ethers.providers.Web3Provider(window.ethereum, "sepolia");

    await provider.send("eth_requestAccounts", []);
    const accounts = await provider.listAccounts();
    const signer = provider.getSigner(accounts[0]);
    const mintContract = new ethers.Contract(addresses.SepoliaNftAddress, nftAbi, signer);

    const tx = await mintContract.safeMint(accounts[0], 1);
    console.log(tx);
  };

  return (
    <div id="popup" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <p className="text-xl mb-4">Deposited! Mint NFT as a receipt</p>
        <button
          id="mintButton"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => mintNftReceipt()}
        >
          Mint NFT
        </button>
      </div>
    </div>
  );
};

export default MintNFTReceipt;
