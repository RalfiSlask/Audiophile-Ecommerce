import { useContext } from "react"
import Context from "../../../context/Context"


const ThankYouGrandTotal = () => {
    const { grandTotal } = useContext(Context) 

  return (
    <div className="text-white bg-black w-[263px] md:w-[198px] min-h-[91px] md:min-h-[140px] px-[24px] py-[15px] md:py-[41px] rounded-b-[8px] md:rounded-bl-[0px] md:rounded-r-[8px] flex flex-col gap-[8px] justify-end">
        <p className="text-[15px] font-medium leading-[25px] opacity-50 uppercase">Grand Total</p>
        <p className="text-[18px] font-bold uppercase">$ {grandTotal}</p>
    </div>
  )
}

export default ThankYouGrandTotal