import Header from "../../components/shared/Header"
import BringingYouTheBest from "../../components/shared/BringingYouTheBest"
import ShopNavbar from "../../components/shared/ShopNavbar"
import BlackUnderHeader from "./BlackUnderHeader"
import SampleProducts from "./SampleProducts"
import Footer from "../../components/shared/footer/Footer"

const Home = () => {
  return (
    <> 
    <header className="relative">
        <Header /> 
        <BlackUnderHeader />
    </header>
    <main className="flex flex-col items-center">
      <section>
        <ShopNavbar />
        <SampleProducts />
        <BringingYouTheBest />
      </section>
        <Footer />
    </main>
   
    </>
  )
}

export default Home