import imageSmall from "../../assets/home/mobile/image-header.jpg";
import imageLarge from "../../assets/home/tablet/image-header.jpg";
import NewProductInfoXX99 from "./NewProductInfoXX99";

import { useContext } from "react"
import Context from "../../context/Context";

const BlackUnderHeader = () => {
  const { screenSize } = useContext(Context)

  return (
    <div className="bg-[#191919] w-full h-[600px] md:h-[729px] flex justify-center">
      <div className="relative flex h-full md:md:w-[689px] xl:w-[1110px] items-center justify-between">
        <NewProductInfoXX99 />
        <img src={screenSize < 772 ? imageSmall : imageLarge} alt="xx99 headphones" className="object-cover w-full h-full"/>
      </div>
    </div>
  )
}

export default BlackUnderHeader