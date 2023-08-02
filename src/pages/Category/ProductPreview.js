import { useContext, useEffect, useState } from "react";
import MediumButton from "../../components/shared/MediumButton";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";
import xx99IMobile from "../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx99ITablet from "../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99IDesktop from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99IIMobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import xx99IITablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xx99IIDesktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx59Mobile from "../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx59Tablet from "../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59Desktop from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import YX1Mobile from "../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import YX1Tablet from "../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import YX1Desktop from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import ZX7Mobile from "../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import ZX7Tablet from "../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import ZX7Desktop from "../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import ZX9Mobile from "../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import ZX9Tablet from "../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import ZX9Desktop from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";

const ProductPreview = ( { name, description, images, productNew} ) => {
  const navigate = useNavigate(); 
  const { screenType, setProduct } = useContext(Context);
  const [image, setImage] = useState("");
  
  useEffect(() => {
    if(images) {
      console.log(images)
      console.log(name)
    }
  }, [screenType, images]) 

  const handleClick = () => {
    setProduct(name)
    navigate("/product")
  };
  
  return (
    <div className={`${productNew ? "h-[724px] md:h-[706px]" : "h-[681px] md:h-[671px]"} flex flex-col items-center xl:h-[560px] justify-between w-full xl:w-[1110px] text-center xl:flex-row-reverse xl:text-start`}>
        <div className="w-full h-[352px] xl:h-[560px] xl:w-[540px] rounded-lg">
          <img src={image} alt={`${name}`} className="object-cover w-full xl:w-[540px] h-full rounded-lg"/>
        </div>
        <div className={`${productNew ? "h-[340px] md:h-[302px] xl:h-[343px]" : "h-[297px] md:h-[267px] xl:h-[308px]"} w-full md:w-[527px] xl:w-[445px] flex flex-col justify-between items-center xl:items-start`}>
            <div>
              {productNew && <h2 className="uppercase text-[14px] font-normal tracking-[10px] text-[#D87D4A] mb-[16px]">New Product</h2>}
              <h1 className="text-[28px] md:text-[40px] font-bold leading-[44px] tracking-[1.429px] uppercase">{name}</h1>
            </div>
            <p className="opacity-50 text-[15px] font-medium leading-[25px]">{description}</p>
            <MediumButton text={"See product"} onClick={handleClick}/>
        </div>
    </div>
  )
}

export default ProductPreview