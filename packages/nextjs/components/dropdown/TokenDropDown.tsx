"use client";

import React, { memo, useCallback, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Token {
  name: string;
  logo: string;
}

const tokens: Token[] = [
  { name: "Bitcoin", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg" },
  { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
  { name: "Ripple", logo: "https://cryptologos.cc/logos/xrp-xrp-logo.svg" },
  { name: "USD Coin", logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" },
  { name: "Dai", logo: "https://cryptologos.cc/logos/dai-dai-logo.svg" },
  { name: "Binance Coin", logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg" },
  { name: "Litecoin", logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg" },
  { name: "Chainlink", logo: "https://cryptologos.cc/logos/chainlink-link-logo.svg" },
  { name: "Cardano", logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg" },
  { name: "Stellar", logo: "https://cryptologos.cc/logos/stellar-xlm-logo.svg" },
  { name: "Polkadot", logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg" },
  { name: "Bitcoin Cash", logo: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg" },
  { name: "Wrapped Bitcoin", logo: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg" },
  { name: "Ethereum Classic", logo: "https://cryptologos.cc/logos/ethereum-classic-etc-logo.svg" },
  { name: "Cosmos", logo: "https://cryptologos.cc/logos/cosmos-atom-logo.svg" },
  { name: "Dogecoin", logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg" },
  { name: "Filecoin", logo: "https://cryptologos.cc/logos/filecoin-fil-logo.svg" },
  { name: "Aave", logo: "https://cryptologos.cc/logos/aave-aave-logo.svg" },
  { name: "Uniswap", logo: "https://cryptologos.cc/logos/uniswap-uni-logo.svg" },
  { name: "Synthetix", logo: "https://cryptologos.cc/logos/synthetix-network-token-snx-logo.svg" },
];

const TokenDropdown: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [filteredTokens, setFilteredTokens] = useState<Token[]>(tokens);

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleTokenSelect = useCallback((token: Token) => {
    setSelectedToken(token);
    setIsOpen(false);
  }, []);

  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleSearchChange = useCallback(
    debounce((search: string) => {
      setFilteredTokens(tokens.filter(token => token.name.toLowerCase().includes(search.toLowerCase())));
    }, 300),
    [],
  );

  useEffect(() => {
    handleSearchChange(searchTerm);
  }, [searchTerm, handleSearchChange]);

  const MemoizedTokenList = memo(({ tokens }: { tokens: Token[] }) => (
    <>
      {tokens.map(token => (
        <div
          key={token.name}
          className="flex items-center px-4 py-2 text-sm text-white hover:bg-black/70 cursor-pointer"
          role="menuitem"
          onClick={() => handleTokenSelect(token)}
        >
          <img src={token.logo} alt={token.name} className="w-5 h-5 mr-2" />
          {token.name}
        </div>
      ))}
    </>
  ));

  MemoizedTokenList.displayName = "MemoizedTokenList";

  return (
    <div className="relative inline-block text-left w-48">
      <div>
        <button
          type="button"
          className="inline-flex bg-black  uppercase text-white items-center gap-2 justify-center w-full rounded-md border border-gray-300 shadow-sm p-3 text-sm font-medium hover:bg-black/70 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedToken ? (
            <div className="flex items-center uppercase">
              <img src={selectedToken.logo} alt={selectedToken.name} className="w-5 h-5 mr-2" />
              {selectedToken.name}
            </div>
          ) : (
            "USDC"
          )}
          <IoIosArrowDown />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black text-white ring-1 ring-black ring-opacity-5 overflow-y-auto max-h-60">
          <div className="py-1 px-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-white text-xl text-black border border-gray-300 rounded-md focus:outline-none"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onClick={handleInputClick}
            />
            <MemoizedTokenList tokens={filteredTokens} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenDropdown;
