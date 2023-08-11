import imageYX1desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import imageYX1tablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import imageYX1mobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import MediumButton from "../../components/shared/ui/MediumButton";
import { useNavigate } from "react-router-dom";

const YX1 = ( {product} ) => {
  const [image, setImage] = useState("");
  const { screenType, setProductOnClick, setNumber } = useContext(Context)
  
  const navigate = useNavigate();

  useEffect(() => {
    if(screenType === "mobile") {
      setImage(imageYX1mobile)
    } else if(screenType === "tablet") {
      setImage(imageYX1tablet)
    } else {
      setImage(imageYX1desktop)
    }
  }, [screenType])

  const handleClick = () => {
    setNumber(1)
    setProductOnClick(product)
    window.scrollTo(0, 0)
    navigate("/product")
  };

  return (
    <div className="w-full h-[424px] md:h-[320px] flex flex-col justify-between md:flex-row">
      <div className="w-[327px] md:w-[339px] xl:w-[540px] h-[200px] md:h-full">
        <img src={image} alt="YX1" className="object-cover w-full h-full rounded-lg"/>
      </div>
      <div className="w-[327px] md:w-[339px] xl:w-[540px] h-[200px] md:h-full rounded-lg bg-[#F1F1F1] flex justify-center items-center">
        <div className="flex flex-col justify-between h-[118px] xl:mr-20">
          <h1 className="uppercase font-bold text-[28px] leading-normal xl:text-start tracking-[2px] text-start">YX1 Earphones</h1>
          <MediumButton 
            text={"see product"} 
            color={"transparent border border-solid border-black transition-all ease-in duration-300 hover:bg-[black] hover:text-white"}
            onClick={handleClick} 
          />
        </div>
      </div>
    </div>
  )
}

export default YX1