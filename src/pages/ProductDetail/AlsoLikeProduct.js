import { useContext, useEffect, useState } from 'react';
import MediumButton from '../../components/shared/ui/MediumButton';
import Context from '../../context/Context';
import data from '../../data/data.json';
import { useNavigate } from 'react-router-dom';

const AlsoLikeProduct = ({ otherProduct }) => {
  const { screenType, setProductOnClick, setNumber } = useContext(Context);
  const [imagePath, setImagePath] = useState('');
  const { name } = otherProduct;

  const navigate = useNavigate();

  useEffect(() => {
    if (otherProduct !== undefined) {
      const { image } = otherProduct;
      setImagePath(image[screenType]);
    }
  }, [screenType]);

  const handleClick = () => {
    setNumber(1);
    const product = data.find(object => object.slug === otherProduct.slug);
    setProductOnClick(product);
    window.scrollTo(0, 0);
    navigate('/product');
  };

  return (
    <div className="w-full h-[265px] md:w-[223px] md:h-full xl:w-[350px] flex flex-col items-center">
      <img src={imagePath} alt={name} className="rounded-lg" />
      <h1 className="text-center font-bold text-[24px] uppercase tracking-[1.714px] mb-[32px] mt-[32px] md:mt-[40px]">
        {name}
      </h1>
      <MediumButton text={'See Product'} onClick={handleClick} />
    </div>
  );
};

export default AlsoLikeProduct;
