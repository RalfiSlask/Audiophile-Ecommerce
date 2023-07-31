
const MediumButton = ( {text, color} ) => {
  return (
    <div className={`${color ? `${color}` : "bg-[#D87D4A] text-white hover:bg-[#FBAF85]"} cursor-pointer flex justify-center items-center w-[160px] h-[48px] font-bold uppercase text-[13px]`}>{text}</div>
  )
}

export default MediumButton