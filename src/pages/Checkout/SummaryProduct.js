import { useContext, useEffect, useState } from 'react';
import xx59 from '../../assets/cart/image-xx59-headphones.jpg';
import xx99I from '../../assets/cart/image-xx99-mark-one-headphones.jpg';
import xx99II from '../../assets/cart/image-xx99-mark-two-headphones.jpg';
import YXI from '../../assets/cart/image-yx1-earphones.jpg';
import ZX7 from '../../assets/cart/image-zx7-speaker.jpg';
import ZX9 from '../../assets/cart/image-zx9-speaker.jpg';
import Context from '../../context/Context';

const SummaryProduct = ({ product }) => {
  const { count, name, price } = product;
  const [image, setImage] = useState();
  const [productPrice, setProductPrice] = useState(null);
  const { formatNumberWithCommas } = useContext(Context);

  useEffect(() => {
    const formattedPrice = formatNumberWithCommas(price);
    setProductPrice(formattedPrice);
  }, [price]);

  useEffect(() => {
    if (name.includes('YX1')) {
      setImage(YXI);
    } else if (name.includes('ZX7')) {
      setImage(ZX7);
    } else if (name.includes('ZX9')) {
      setImage(ZX9);
    } else if (name.includes('XX59')) {
      setImage(xx59);
    } else if (name.includes('MK II')) {
      setImage(xx99II);
    } else {
      setImage(xx99I);
    }
  }, [name]);

  return (
    <div className="flex justify-between w-full items">
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-[64px] h-[64px] rounded-lg" />
        <div className="w-[75px] flex flex-col justify-between h-[50px] text-[15px] font-bold leading-[25px]">
          <p>{name}</p>
          <p className="opacity-50">${productPrice}</p>
        </div>
      </div>
      <p className="text-[15px] font-bold leading-[25px] opacity-50 mt-[6px]">x{count}</p>
    </div>
  );
};

export default SummaryProduct;
