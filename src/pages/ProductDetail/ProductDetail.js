import { useContext } from "react";
import BringingYouTheBest from "../../components/shared/BringingYouTheBest";
import Footer from "../../components/shared/footer/Footer";
import Header from "../../components/shared/Header";
import ShopNavbar from "../../components/shared/ShopNavbar";

const ProductDetail = () => {

  const handleClick = () => {
    history.back();
  };
  
  return (
    <>
    <header className="w-full">
      <Header />
    </header>
    <main className="flex flex-col items-center w-[327px] md:w-[689px] xl:w-[1110px]">
      <section className="flex flex-col items-center">
      <p onClick={handleClick} className="text-[15px] font-medium leading-[25px] opacity-50 mt-[110px] xl:mt-[120px] text-start w-full cursor-pointer hover:opacity-100">Go Back</p>
        <div className="flex flex-col gap-[120px] xl:gap-[160px] my-[120px] xl:my-[160px]">
        </div>
        <ShopNavbar />
        <BringingYouTheBest />
      </section>
    </main>
    <Footer />
    </>
  )
}

export default ProductDetail