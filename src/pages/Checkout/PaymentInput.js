import { useEffect, useState } from 'react';

const PaymentInput = ({ value, isCash, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (value === 'e-Money') {
      if (isCash) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    } else if (value === 'Cash on Delivery') {
      if (isCash) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [value, isCash]);

  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? 'border-[#D87D4A]' : 'border-[#CFCFCF]'
      } cursor-pointer hover:border-[#D87D4A] w-[200px] md:w-[309px] h-[56px] flex flex-col gap-[9px] relative flex-shrink-0 border border-solid rounded-lg`}
    >
      <button className='w-[20px] h-[20px] rounded-full absolute top-1/2 -translate-y-1/2 left-[16px] border border-[#CFCFCF] flex items-center justify-center'>
        {isActive && <div className={`w-[10px] h-[10px] rounded-full bg-[#D87D4A]`}></div>}
      </button>
      <input
        type='text'
        readOnly
        defaultValue={value}
        className='cursor-pointer absolute outline-none left-[50px] w-[120px] h-[42px] text-[14px] font-bold leading-normal tracking-[-0.25px] top-1/2 -translate-y-1/2'
      ></input>
    </div>
  );
};

export default PaymentInput;
