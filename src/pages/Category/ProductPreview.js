import { useContext, useEffect, useState } from "react";
import MediumButton from "../../components/shared/ui/MediumButton";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";

const ProductPreview = ( {product} ) => {
  const navigate = useNavigate(); 
  const { screenType, setProductOnClick, setNumber } = useContext(Context);
  const [imagePath, setImagePath] = useState("");
  const {name, description, categoryImage: images, new: productNew} = product;

  useEffect(() => {
    if(images && images[screenType]) {
      setImagePath(images[screenType])
    }
  }, [screenType, images]) 

  const handleClick = () => {
    setNumber(1)
    setProductOnClick(product)
    window.scrollTo(0, 0)
    navigate("/product")
  };
  
  return (
    <div className={`${productNew ? "h-[724px] md:h-[706px]" : "h-[681px] md:h-[671px]"} flex flex-col items-center xl:h-[560px] justify-between w-full xl:w-[1110px] text-center xl:flex-row-reverse xl:text-start`}>
        <div className="w-full h-[352px] xl:h-[560px] xl:w-[540px] rounded-lg">
          <img src={imagePath} alt={`${name}`} className="object-cover w-full xl:w-[540px] h-full rounded-lg"/>
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