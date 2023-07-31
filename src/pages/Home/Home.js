import Header from "../../components/Header/Header"
import ShopNavbar from "../../components/shared/ShopNavbar"
import BlackUnderHeader from "./BlackUnderHeader"
import SampleProducts from "./SampleProducts"

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
      </section>
    </main>
    </>
  )
}

export default Home