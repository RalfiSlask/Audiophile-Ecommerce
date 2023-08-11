import MediumHeading from "../../components/shared/ui/MediumHeading"
import AlsoLikeProduct from "./AlsoLikeProduct"

const MayAlsoLike = ( {others} ) => {

  return (
    <div className="flex flex-col items-center">
      <MediumHeading 
        text={"You may also like"} 
        />
      <div className="flex flex-col justify-between w-full md:flex-row h-[907px] md:h-[471px] mt-[40px] md:mt-[56px] xl:mt-[64px]">
        {others !== undefined ? others.map((otherObject, index) => {
          return ( <AlsoLikeProduct key={index} otherProduct={otherObject}/> )
        }) : null}
      </div>
    </div>
  )
}

export default MayAlsoLike