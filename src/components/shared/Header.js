import logoCart from '../../assets/shared/desktop/icon-cart.svg';
import logoHamburger from '../../assets/shared/tablet/icon-hamburger.svg';
import logoAudiophile from '../../assets/shared/desktop/logo.svg';
import Context from '../../context/Context';
import Navbar from './Navbar';
import { useContext } from 'react';

const Header = () => {
  const { screenType, toggleModal, cartList } = useContext(Context);

  return (
    <div className='h-[90px] xl:h-[97px] w-full bg-[#000] flex justify-center absolute top-0 z-50'>
      <div className='w-[90%] md:w-[689px] xl:w-[1110px] border-b border-[white] border-opacity-10 flex items-center h-full justify-between relative'>
        {screenType !== 'desktop' && (
          <img
            src={logoHamburger}
            onClick={() => {
              toggleModal('shop');
            }}
            alt='logo hamburger'
            className='cursor-pointer'
          />
        )}
        <img src={logoAudiophile} alt='audiophile logo' className={`${screenType === 'tablet' ? 'mr-[450px]' : ''}`} />
        {screenType === 'desktop' && <Navbar />}
        <div className='relative h-10 w-8'>
          <img
            src={logoCart}
            onClick={() => {
              toggleModal('cart');
            }}
            alt='logo cart'
            className='cursor-pointer absolute top-1/2 -translate-y-1/2'
          />
          {cartList.length > 0 && (
            <div className='absolute bg-gray-500 rounded-full flex items-center justify-center w-5 h-5 right-0 bottom-0'>
              {cartList.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
