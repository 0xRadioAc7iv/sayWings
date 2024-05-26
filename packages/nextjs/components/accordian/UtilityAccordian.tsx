import React, { useState } from "react";

const UtilityAccordian: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="collapse collapse-plus bg-[#FFB9EC] border-2 border-black rounded-lg my-4">
        <input type="radio" name="my-accordion" checked={openIndex === 0} onChange={() => handleToggle(0)} />
        <div className="collapse-title text-xl font-medium">Q. What are the fees associated with Saywings? </div>
        <div className="collapse-content">
          <p>Answer goes here</p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-[#FFB9EC] border-2 border-black rounded-lg my-4">
        <input type="radio" name="my-accordion" checked={openIndex === 1} onChange={() => handleToggle(1)} />
        <div className="collapse-title text-xl font-medium">
          Q. What happens to my crypto if a pool experiences impermanent loss?
        </div>
        <div className="collapse-content">
          <p>Answer goes here</p>
        </div>
      </div>
    </div>
  );
};

export default UtilityAccordian;
