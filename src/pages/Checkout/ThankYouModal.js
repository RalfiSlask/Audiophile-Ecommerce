import confirmationLogo from '../../assets/checkout/icon-order-confirmation.svg';
import MediumButton from '../../components/shared/ui/MediumButton';
import { useNavigate } from 'react-router-dom';
import ThankYouGrandTotal from './ui/ThankYouGrandTotal';
import ThankYouProducts from './ThankYouProducts';
import { useContext } from 'react';
import Context from '../../context/Context';

const ThankYouModal = () => {
  const { closeModal, setCartList } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = () => {
    closeModal('thankyou');
    window.scrollTo(0, 0);
    navigate('/');
    setCartList([]);
  };

  return (
    <div className="flex flex-col items-start w-[327px] md:w-[540px] min-h-[600px] md:min-h-[581px] bg-white fixed z-50 rounded-lg p-[32px] md:p-[48px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-3/4">
      <img src={confirmationLogo} alt="confirmation" />
      <h1 className="uppercase font-bold leading-[28px] md:leading-[36px] tracking-[0.857px] md:tracking-[1.143px] text-[24px] md:text-[32px] mt-[23px] md:mt-[33px]">
        Thank you for your order
      </h1>
      <p className="text-[15px] font-medium leading-[25px] opacity-50 mt-[16px] md:mt-[24px]">
        You will recieve an email confirmation shortly.
      </p>
      <div className="flex flex-col md:flex-row mb-[23px] mt-[24px] md:mb-[46px] md:mt-[33px]">
        <ThankYouProducts />
        <ThankYouGrandTotal />
      </div>
      <MediumButton text={'back to home'} large={true} onClick={handleClick} />
    </div>
  );
};

export default ThankYouModal;
