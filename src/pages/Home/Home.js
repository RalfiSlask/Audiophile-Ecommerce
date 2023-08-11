import Header from "../../components/shared/Header"
import BringingYouTheBest from "../../components/shared/BringingYouTheBest"
import ShopNavbar from "../../components/shared/ShopNavbar"
import BlackUnderHeader from "./BlackUnderHeader"
import SampleProducts from "./SampleProducts"
import Footer from "../../components/shared/footer/Footer"
import Lightbox from "../../components/shared/ui/Lightbox"
import { useContext } from "react"
import Context from "../../context/Context"
import CartModal from "../../components/shared/CartModal"
import ModalShop from "../../components/shared/ModalShop"

const Home = () => {
  const { modals } = useContext(Context);
  const { shop, cart, lightbox } = modals;

  return (
    <> 
    <header className="relative w-full">
        <Header /> 
        <BlackUnderHeader />
        {cart && <CartModal />}
        {shop && <ModalShop />}
    </header>
    {lightbox && <Lightbox />}
    <main className="flex flex-col items-center w-[327px] md:w-[689px] xl:w-[1110px]">
      <section className="flex flex-col items-center mb-[120px] xl:mb-[160px]">
        <ShopNavbar />
        <SampleProducts />
        <BringingYouTheBest />
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Home