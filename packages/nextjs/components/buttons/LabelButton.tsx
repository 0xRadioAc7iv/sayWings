import React from 'react';

interface LabelButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const LabelButton: React.FC<LabelButtonProps> = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white px-2 py-2 border-2 border-black rounded-md hover:bg-[#FFFFFF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#FFFFFF] flex items-center gap-2"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default LabelButton;