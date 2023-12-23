import Header from '../../components/shared/Header';
import GoBack from '../../components/shared/ui/GoBack';
import Footer from '../../components/shared/footer/Footer';
import Lightbox from '../../components/shared/ui/Lightbox';
import Context from '../../context/Context';
import CartModal from '../../components/shared/CartModal';
import ModalShop from '../../components/shared/ModalShop';
import { useContext } from 'react';
import Summary from './Summary';
import FormsContainer from './FormsContainer';
import ThankYouModal from './ThankYouModal';

const Checkout = () => {
  const { modals } = useContext(Context);
  const { shop, cart, thankyou, lightbox } = modals;

  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      {cart && <CartModal />}
      {shop && <ModalShop />}
      {thankyou && <ThankYouModal />}
      {lightbox && <Lightbox />}
      <main className="flex flex-col items-center w-full bg-[#FAFAFA]">
        <GoBack />
        <section className="flex flex-col xl:flex-row w-[327px] md:w-[689px] xl:w-[1110px] gap-[32px] mt-[24px] xl:mt-[37px] mb-[120px] xl:mb-[160px]">
          <FormsContainer />
          <Summary />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
