import MediumButton from '../../components/shared/ui/MediumButton';
import Context from '../../context/Context';
import { useContext, useEffect, useState } from 'react';
import imageZX7desktop from '../../assets/home/desktop/image-speaker-zx7.jpg';
import imageZX7tablet from '../../assets/home/tablet/image-speaker-zx7.jpg';
import imageZX7mobile from '../../assets/home/mobile/image-speaker-zx7.jpg';
import { useNavigate } from 'react-router-dom';

const ZX7 = ({ product }) => {
  const [image, setImage] = useState('');
  const { screenType, setProductOnClick, setNumber } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (screenType === 'mobile') {
      setImage(imageZX7mobile);
    } else if (screenType === 'tablet') {
      setImage(imageZX7tablet);
    } else {
      setImage(imageZX7desktop);
    }
  }, [screenType]);

  const handleClick = () => {
    setNumber(1);
    setProductOnClick(product);
    window.scrollTo(0, 0);
    navigate('/product');
  };

  return (
    <div className='w-full h-[320px] relative rounded-lg'>
      <img src={image} alt='ZX7' className='object-cover h-full rounded-lg' />
      <div className='w-[245px] h-[118px] flex flex-col justify-between absolute top-[101px] left-[24px]'>
        <h1 className='uppercase font-bold text-[28px] leading-normal xl:text-start tracking-[2px] text-start'>
          ZX7 Speaker
        </h1>
        <MediumButton
          text={'see product'}
          color={
            'transparent border border-solid border-black transition-all ease-in duration-300 hover:bg-[black] hover:text-white'
          }
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ZX7;
