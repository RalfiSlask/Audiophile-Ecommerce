import MediumHeading from '../../../components/shared/ui/MediumHeading'

const InTheBox = ( {productIncludes} ) => {

  return (
    <div className='flex flex-col md:flex-row gap-[24px] md:w-[549px] md:h-[159px] md:justify-between xl:w-[350px] h-[250px] xl:flex-col'>
      <MediumHeading text={"In the Box"} />
      <div className='flex flex-col gap-[8px]'>
    {productIncludes !== undefined ? productIncludes.map((object, index) => {
          const {quantity, item} = object;
          return (
            <div key={index} className='text-[15px] leading-[25px] flex gap-[24px] h-[25px]'>
              <p className='text-[#D87D4A] font-bold'>{quantity}x</p>
              <p className='font-medium opacity-50'>{item}</p>
            </div>)
        }) : null}
      </div>
    </div>
  )
}

export default InTheBox