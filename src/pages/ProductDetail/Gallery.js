import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import SmallGalleryImage from "./ui/SmallGalleryImage";
import LargeGalleryImage from "./ui/LargeGalleryImage";

const Gallery = ( {gallery} ) => {
  const { screenType } = useContext(Context)
  const [firstImagePath, setFirstImagePath] =  useState("");
  const [secondImagePath, setSecondImagePath] =  useState("");
  const [thirdImagePath, setThirdImagePath] =  useState("");

  useEffect(() => {
    if(gallery && gallery !== undefined) {
      const {first, second, third} = gallery;
      setFirstImagePath(first[screenType])
      setSecondImagePath(second[screenType])
      setThirdImagePath(third[screenType])
    }
  }, [screenType])  

  return (
    <div className="flex flex-col md:flex-row w-full h-[756px] md:h-[368px] xl:h-[592px] justify-between">
      <div className="h-[368px] md:h-full flex flex-col justify-between">
        <SmallGalleryImage imagePath={firstImagePath} alt="first"/>
        <SmallGalleryImage imagePath={secondImagePath} alt="second"/>
      </div>
      <LargeGalleryImage imagePath={thirdImagePath} alt="third" />
    </div>
  )
}

export default Gallery