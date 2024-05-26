import React, { useState } from 'react';

const TechnicalAccordion: React.FC = () => {
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
          Q. What cryptocurrencies does Saywings support?
        </div>
        <div className="collapse-content">
            <p>Answer goes here</p>
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
          Q. How much do I need to invest with Saywings?
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
           Q. How often does Saywings rebalance my investments?
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
           Q. Can I withdraw my funds at any time?
        </div>
        <div className="collapse-content">
          <p>Answer goes here</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalAccordion;