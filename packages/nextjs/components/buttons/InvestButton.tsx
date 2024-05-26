import React from 'react';

const InvestButton = () => {
  return (
    <div className='relative text-white border-2 border-black bg-black py-5 flex justify-center px-4 w-48 transition-all duration-300 ease-in-out hover:w-60'>
      Invest Now!
      <div className='arrow'></div>
    </div>
  )
}

export default InvestButton;