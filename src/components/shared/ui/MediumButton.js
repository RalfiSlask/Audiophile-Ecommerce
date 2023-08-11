const MediumButton = ( {text, color, onClick, large} ) => {

  return (
    <div onClick={onClick} className={`${color ? `${color}` : "bg-[#D87D4A] text-white hover:bg-[#FBAF85]"} ${large ? "w-full" : "w-[160px]"} cursor-pointer flex justify-center items-center h-[48px] font-bold uppercase text-[13px]`}>{text}</div>
  )
}

export default MediumButton