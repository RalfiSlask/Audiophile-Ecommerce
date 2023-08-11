import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoArrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Context from "../../context/Context";

const ShopNavLink = ( {title} ) => {
    const [logo, setLogo] = useState();
    const { setCategoryOnClick, closeModal } = useContext(Context);
    const navigate = useNavigate();
    
    useEffect(() => {
      if(title === "headphones") {
        setLogo(headphones)
      } else if(title === "earphones") {
        setLogo(earphones)
      } else if(title === "speakers") {
        setLogo(speakers)
      }
    }, [title])

    const handleClick = () => {
      closeModal("shop")
      setCategoryOnClick(title)
      window.scrollTo(0, 0)
      navigate("/category")
    };

  return (
      <div className="h-[217px] w-[327px] md:w-[223px] xl:w-[350px] flex items-end relative">
        <div className='h-[76%] w-full flex flex-col items-center justify-end flex-shrink-0 rounded-[8px] bg-[#F1F1F1] p-[22px]'>
            <div className="absolute h-[133px] z-10 top-4">
             <img src={logo} alt={title} className="h-full"/>
            </div>
            <h2 className="font-bold text-[15px] xl:text-[18px] uppercase">{title}</h2>
            <div className="flex w-[58px] h-[18px] justify-between items-center mt-[17px] cursor-pointer text-[black] opacity-50 hover:text-[#D87D4A] hover:opacity-100">
              <p onClick={handleClick} className="text-[13px] font-bold leading-normal tracking-[1px] ">SHOP</p>
              <img src={logoArrow} alt="arrow logo" />
            </div>
        </div>
      </div>
  )
}

export default ShopNavLink