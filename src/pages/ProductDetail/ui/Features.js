import MediumHeading from "../../../components/shared/ui/MediumHeading"

const Features = ( {features} ) => {
  return (
    <div className="flex flex-col gap-[24px] w-full md:w-[689px] xl:w-[635px]"> 
      <MediumHeading text={"Features"} />
      <p className="text-[15px] font-medium leading-[25px] opacity-50">{features}</p>
    </div>
  )
}

export default Features