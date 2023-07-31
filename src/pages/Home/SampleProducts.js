import ZX9 from "./ZX9"
import ZX7 from "./ZX7"
import YX1 from "./YX1"

const SampleProducts = () => {
  return (
    <div className="w-[327px] h-[1392px] md:w-[689px] md:h-[1424px] xl:w-[1110px] xl:h-[1296px] flex flex-col justify-between mt-[120px] md:mt-[96px] xl:mt-[168px]">
        <ZX9 />
        <ZX7 />
        <YX1 />
    </div>
  )
}

export default SampleProducts