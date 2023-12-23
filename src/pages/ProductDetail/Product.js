import { useContext, useEffect, useState } from 'react';
import MediumButton from '../../components/shared/ui/MediumButton';
import PlusMinusButton from './ui/PlusMinusButton';
import Context from '../../context/Context';

const Product = ({ product }) => {
  const { screenType, addProductToCartOnClick, number, setNumber } = useContext(Context);
  const [imagePath, setImagePath] = useState('');
  const { image, description, name, price } = product;
  const productNew = product.new;

  useEffect(() => {
    if (image && image[screenType]) {
      setImagePath(image[screenType]);
    }
  }, [screenType, image]);

  return (
    <div className="w-[327px] min-h-[720px] xl:w-[1110px] md:w-[689px] md:h-[480px] md:min-h-[480px] xl:min-h-[560px] xl:h-[560px] flex flex-col text-start items-center gap-[32px] md:justify-between md:flex-row-reverse">
      <div className="w-[327px] h-[327px] md:w-[281px] md:h-[480px] xl:w-[540px] xl:h-[560px] rounded-lg">
        <img src={imagePath} alt={name} className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="w-[327px] max-h-[396px] md:w-[340px] md:h-[390px] xl:w-[445px] xl:h-[407px]">
        {productNew && (
          <h2 className="uppercase text-[14px] font-normal tracking-[10px] text-[#D87D4A] mb-[16px]">New Product</h2>
        )}
        <div className="flex flex-col gap-[24px] md:gap-[32px]">
          <h1 className="leading-normal text-[28px] md:text-[28px] md:leading-[32px] font-bold xl:leading-[44px] tracking-[1.429px] uppercase">
            {name}
          </h1>
          <p className="opacity-50 text-[15px] font-medium leading-[25px]">{description}</p>
          <p className="text-[18px] font-bold tracking-[1.286px] uppercase">$ {price}</p>
        </div>
        <div className="w-[296px] h-[48px] flex justify-between mt-[31px] xl:mt-[47px]">
          <PlusMinusButton dimensions={'w-[120px] h-full'} number={number} setNumber={setNumber} />
          <MediumButton
            text={'add to cart'}
            onClick={() => {
              addProductToCartOnClick(number, name, price);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
