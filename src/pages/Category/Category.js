import { useContext } from "react";
import BringingYouTheBest from "../../components/shared/BringingYouTheBest";
import Footer from "../../components/shared/footer/Footer";
import Header from "../../components/shared/Header";
import ShopNavbar from "../../components/shared/ShopNavbar";
import CategoryHeader from "./CategoryHeader";
import Context from "../../context/Context";
import ProductPreview from "./ProductPreview";

const Category = () => {
  const { productList } = useContext(Context)

  return (
    <>
    <header className="w-full">
      <Header />
      <CategoryHeader />
    </header>
    <main className="flex flex-col items-center w-[327px] md:w-[689px] xl:w-[1110px]">
      <section className="flex flex-col items-center">
        <div className="flex flex-col gap-[120px] xl:gap-[160px] my-[120px] xl:my-[160px]">
        {productList.map(productObject => {
          const {id, categoryImage, description, name} = productObject;
          return <ProductPreview key={id} id={id} name={name} description={description} images={categoryImage} productNew={productList.new}/>
        })}
        </div>
        <ShopNavbar />
        <BringingYouTheBest />
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Category