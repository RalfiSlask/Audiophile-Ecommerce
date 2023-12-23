import logoCart from '../../assets/shared/desktop/icon-cart.svg';
import logoHamburger from '../../assets/shared/tablet/icon-hamburger.svg';
import logoAudiophile from '../../assets/shared/desktop/logo.svg';
import Context from '../../context/Context';
import Navbar from './Navbar';
import { useContext } from 'react';

const Header = () => {
  const { screenType } = useContext(Context);

  return (
    <div className='h-[90px] xl:h-[97px] w-full bg-[#000] flex justify-center absolute z-50'>
      <div className='w-[90%] md:w-[689px] xl:w-[1110px] border-b border-[white] border-opacity-10 flex items-center h-full justify-between relative'>
        {screenType !== 'desktop' && <img src={logoHamburger} alt='logo hamburger' className='cursor-pointer' />}
        <img src={logoAudiophile} alt='audiophile logo' className={`${screenType === 'tablet' ? 'mr-[450px]' : ''}`} />
        {screenType === 'desktop' && <Navbar />}
        <div>
          <div className='w-[100px] h-[100px] bg-slate-500'>hej</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
