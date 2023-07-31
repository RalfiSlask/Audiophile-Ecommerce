import InfoText from "../../components/shared/InfoText";
import LargeHeading from "../../components/shared/LargeHeading";
import MediumButton from "../../components/shared/MediumButton";
import imageZX9desktop from "../../assets/home/desktop/image-speaker-zx9.png"
import imageZX9tablet from "../../assets/home/tablet/image-speaker-zx9.png"
import imageZX9mobile from "../../assets/home/mobile/image-speaker-zx9.png"
import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react";

const ZX9 = () => {
  const [image, setImage] = useState("")
  const { screenWidth } = useContext(Context)

  useEffect(() => {
    if(screenWidth < 772) {
      setImage(imageZX9mobile)
    } else if(screenWidth < 1280) {
      setImage(imageZX9tablet)
    } else {
      setImage(imageZX9desktop)
    }
  }, [screenWidth])

  return (
    <div className="overflow-hidden flex flex-col justify-end flex-shrink-0 items-center rounded-lg bg-[#D87D4A] w-full h-[600px] md:h-[720px] xl:h-[560px] text-white py-[64px] px-[23px] bg-pattern-circles bg-no-repeat bg-cover bg-center-center md:bg-center-bottom xl:bg-center-top relative">
        <div className="absolute h-[207px] md:h-[237px] xl:h-[493px] top-[55px] md:top-[52px] xl:left-[120px] xl:top-[75px]">
          <img src={image} alt="zx9 image" className="object-contain w-full h-full"/>
        </div>
        <div className=" flex flex-col items-center justify-between text-center h-[251px] md:h-[303px] w-[280px] md:w-[343px] xl:absolute xl:right-[120px] xl:items-start xl:text-start">
          <div className="h-[179px] md:h-[215px] flex flex-col justify-between">
            <LargeHeading 
              text={"ZX9 SPEAKER"} 
            />
            <InfoText 
              text={"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."}
            />
          </div>
          <MediumButton 
            text={"see product"} 
            color={"bg-[black] hover:bg-[#4C4C4C]"}
          />
        </div>
    </div>
   
  )
}

export default ZX9