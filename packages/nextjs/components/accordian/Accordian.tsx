import React, { useState } from 'react';

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="collapse collapse-plus bg-[#FFB9EC] border-2 border-black rounded-lg my-4">
        <input
          type="radio"
          name="my-accordion"
          checked={openIndex === 0}
          onChange={() => handleToggle(0)}
        />
        <div className="collapse-title text-xl font-medium">
          Q. What is Saywings?
        </div>
        <div className="collapse-content font-medium">
          <p>A. Saywings is a DeFi savings platform built on Polygon that automates crypto investments for maximum returns. It&apos;s designed to be user-friendly, even for beginners.</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-[#FFB9EC] border-2 border-black rounded-lg my-4">
        <input
          type="radio"
          name="my-accordion"
          checked={openIndex === 1}
          onChange={() => handleToggle(1)}
        />
        <div className="collapse-title text-xl font-medium">
          Q. Is DeFi safe?
        </div>
        <div className="collapse-content">
          <p>Answer goes here</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-[#FFB9EC] border-2 border-black rounded-lg my-4">
        <input
          type="radio"
          name="my-accordion"
          checked={openIndex === 2}
          onChange={() => handleToggle(2)}
        />
        <div className="collapse-title text-xl font-medium">
           Q. What are Liquidity Pools?
        </div>
        <div className="collapse-content">
          <p>Answer goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;