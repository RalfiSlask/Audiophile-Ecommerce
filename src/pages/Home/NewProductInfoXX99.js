import MediumButton from "../../components/shared/MediumButton"
import LargeHeading from "../../components/shared/LargeHeading"
import InfoText from "../../components/shared/InfoText"

const NewProductInfoXX99 = () => {

  return (
    <div className={`w-[328px] h-[290px] md:w-[398px] md:h-[346px] text-center xl:text-start items-center xl:items-start top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:translate-x-0 xl:translate-y-0 flex flex-col justify-between absolute xl:static z-20 text-[white]`}>
        <h2 className={`uppercase font-normal tracking-[10px] text-[14px] opacity-50`}>New Product</h2>
        <LargeHeading text={"XX99 MARK II HEADPHONES"}/>
        <InfoText text={"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."} />
        <MediumButton text={"see product"}/>
    </div>
  )
}

export default NewProductInfoXX99