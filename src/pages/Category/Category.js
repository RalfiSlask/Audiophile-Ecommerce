import { useContext, useEffect } from "react";
import BringingYouTheBest from "../../components/shared/BringingYouTheBest";
import Footer from "../../components/shared/footer/Footer";
import Header from "../../components/shared/Header";
import ShopNavbar from "../../components/shared/ShopNavbar";
import CategoryHeader from "./CategoryHeader";
import Context from "../../context/Context";
import Product from "../../components/shared/Product";

const Category = () => {
  const { productList } = useContext(Context)

  useEffect(() => {
    console.log(productList)
  })

  return (
    <>
    <header>
      <Header />
      <CategoryHeader />
    </header>
    <main className="flex flex-col items-center">
      <section>
        {productList.map(productObject => {
          const {id, product, info} = productObject;
          return <Product key={id} id={id} product={product} info={info}/>
        })}
        <ShopNavbar />
        <BringingYouTheBest />
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Category