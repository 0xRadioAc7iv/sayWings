"use client";
import React, { useState, useRef, useEffect } from 'react';

interface Market {
  name: string;
  rate: string;
}

const markets: Market[] = [
  { name: 'AAVE', rate: '8.29%' },
  { name: 'Compound Finance', rate: '12.29%' },
  { name: 'LayerBank', rate: '15.75%' },
  { name: 'Curve Finance', rate: '4.00%' },
];

const MarketDropDown: React.FC = () => {
  const [selectedMarkets, setSelectedMarkets] = useState<Market[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMarket = (market: Market) => {
    setSelectedMarkets((prev) =>
      prev.some((m) => m.name === market.name)
        ? prev.filter((m) => m.name !== market.name)
        : [...prev, market]
    );
  };

  const filteredMarkets = markets.filter(market =>
    market.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-[30vw]">
      <div className="flex flex-wrap gap-2">
        {selectedMarkets.map((market) => (
          <div className='pb-4'>
          <span key={market.name} className="bg-black text-white px-2 py-1 rounded-md flex items-center space-x-2">
            <span>{market.name}</span>
            <button
              onClick={() => toggleMarket(market)}
              className="text-white font-bold"
            >
              &times;
            </button>
          </span>
          </div>
        ))}
      </div>
      <div className="relative" ref={dropdownRef}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          className="w-full p-2 border rounded-md bg-white"
        />
        {showDropdown && (
          <div className="absolute z-10 w-full bg-transparent rounded-md mt-1 max-h-60 overflow-y-auto">
            {filteredMarkets.map((market) => (
              <div
                key={market.name}
                className="flex justify-between items-center p-2 bg-gray-200 rounded-md cursor-pointer mb-2"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => toggleMarket(market)}
              >
                <span>{market.name} - {market.rate}</span>
                <span className="text-gray-600">
                  {selectedMarkets.some((m) => m.name === market.name) ? 'Selected' : 'Select'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketDropDown;