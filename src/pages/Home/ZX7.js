import MediumButton from "../../components/shared/MediumButton"
import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react";
import imageZX7desktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
import imageZX7tablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import imageZX7mobile from "../../assets/home/mobile/image-speaker-zx7.jpg";

const ZX7 = () => {
  const [image, setImage] = useState("")
  const { screenWidth, screenType } = useContext(Context)

  useEffect(() => {
    if(screenWidth < 772) {
      setImage(imageZX7mobile)
    } else if(screenWidth < 1280) {
      setImage(imageZX7tablet)
    } else {
      setImage(imageZX7desktop)
    }
  }, [screenWidth]) 

  useEffect(() => {
    console.log(screenWidth)
    console.log(screenType)
  })

  return (
    <div className="w-full h-[320px] relative rounded-lg">
      <img src={image} alt="mumma" className="object-cover h-full rounded-lg"/>
      <div className="w-[245px] h-[118px] flex flex-col justify-between absolute top-[101px] left-[24px]">
        <h1 className="uppercase font-bold text-[28px] leading-normal xl:text-start tracking-[2px] text-start">ZX7 Speaker</h1>
        <MediumButton text={"see product"} color={"transparant border border-solid border-black hover:bg-[black] hover:text-white"}/>
      </div>
    </div>
  )
}

export default ZX7