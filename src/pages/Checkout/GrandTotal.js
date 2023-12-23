import React, { useContext } from 'react';
import PriceContainer from './PriceContainer';
import Context from '../../context/Context';

const GrandTotal = () => {
  const { totalPrice } = useContext(Context);
  const shipping = 50;

  const calculations = [
    { title: 'Total', number: totalPrice, style: '' },
    { title: 'Shipping', number: shipping, style: '' },
    { title: 'VAT (Included)', number: (totalPrice * 0.2).toFixed(0), style: '' },
    { title: 'Grand Total', number: totalPrice + shipping, style: 'text-[#D87D4A]' },
  ];

  return (
    <div className="w-full flex flex-col gap-[8px]">
      {calculations.map((object, index) => (
        <PriceContainer key={index} contents={object} />
      ))}
    </div>
  );
};

export default GrandTotal;
