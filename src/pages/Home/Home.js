import Header from "../../components/Header/Header"
import BringingYouTheBest from "../../components/shared/BringingYouTheBest"
import ShopNavbar from "../../components/shared/ShopNavbar"
import BlackUnderHeader from "./BlackUnderHeader"
import SampleProducts from "./SampleProducts"
import Footer from "../../components/shared/Footer"

const Home = () => {
  return (
    <> 
    <header className="relative">
        <Header /> 
        <BlackUnderHeader />
    </header>
    <main className="flex flex-col items-center">
      <ShopNavbar />
      <section>
        <SampleProducts />
        <BringingYouTheBest />
      </section>
        <Footer />
    </main>
   
    </>
  )
}

export default Home