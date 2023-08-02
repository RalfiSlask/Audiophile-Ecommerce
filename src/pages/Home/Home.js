import Header from "../../components/shared/Header"
import BringingYouTheBest from "../../components/shared/BringingYouTheBest"
import ShopNavbar from "../../components/shared/ShopNavbar"
import BlackUnderHeader from "./BlackUnderHeader"
import SampleProducts from "./SampleProducts"
import Footer from "../../components/shared/footer/Footer"

const Home = () => {
  return (
    <> 
    <header className="relative w-full">
        <Header /> 
        <BlackUnderHeader />
    </header>
    <main className="flex flex-col items-center w-[327px] md:w-[689px] xl:w-[1110px]">
      <section className="flex flex-col items-center">
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