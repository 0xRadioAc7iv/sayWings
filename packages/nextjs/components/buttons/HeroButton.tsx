import React from 'react';

interface InvestmentCardProps {
  text: string;
}

const HeroButton: React.FC<InvestmentCardProps> = ({ text }) => {
  return (
    <button className='bg-[#FFCE51] p-4 button font-jakarta border-black'>{text}</button>
  );
};

export default HeroButton;