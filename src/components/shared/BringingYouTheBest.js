import bestgearDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import bestgearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import bestgearMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react";

const BringingYouTheBest = () => {
    const [image, setImage] = useState("")
    const { screenType } = useContext(Context)

    useEffect(() => {
        if(screenType === "mobile") {
          setImage(bestgearMobile)
        } else if(screenType === "tablet") {
          setImage(bestgearTablet)
        } else {
          setImage(bestgearDesktop)
        }
      }, [screenType])

  return (
    <div className="flex flex-col xl:flex-row-reverse justify-between w-full h-[698px] md:h-[633px] xl:h-[588px] items-center mt-[120px] xl:mt-[200px]">
        <div className="w-full h-[300px] xl:h-full rounded-lg xl:w-[540px]">
            <img src={image} alt="guy listening to music" className="object-cover w-full h-full rounded-lg"/>
        </div>
        <div className="h-[358px] w-[327px] md:h-[270px] md:w-[573px] xl:h-[295px] xl:w-[445px] text-center xl:text-start flex flex-col justify-between">
            <h1 className="text-[28px] uppercase font-bold  tracking[1px] md:text-[40px] md:tracking-[1.429px] md:leading-[44px]">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h1>
            <p className="text-[15px] font-medium leading-[25px] opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
    </div>
  )
}

export default BringingYouTheBest