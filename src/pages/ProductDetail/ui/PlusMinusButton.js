import { useContext } from "react"
import Context from "../../../context/Context"

const PlusMinusButton = ( {dimensions, number, setNumber} ) => {
  const { incrementOnClick, decrementOnClick } = useContext(Context);
  
  return (
    <div className={`${dimensions} p-[15px] bg-[#F1F1F1] flex justify-between items-center font-bold text-[13px] tracking-[1px]`}>
        <div onClick={() => {decrementOnClick(number, setNumber)}} className="opacity-25 cursor-pointer hover:opacity-100">-</div>
        <p>{number}</p>
        <div onClick={() => {incrementOnClick(setNumber)}} className="opacity-25 cursor-pointer hover:opacity-100">+</div>
    </div>
  )
}

export default PlusMinusButton