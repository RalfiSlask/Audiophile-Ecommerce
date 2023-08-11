import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";

const PriceContainer = ( {contents}) => {
    const {title, number, style} = contents;
    const [price, setPrice] = useState(null);
    const { formatNumberWithCommas } = useContext(Context);

    useEffect(() => {
        const formattedPrice = formatNumberWithCommas(number);
        setPrice(formattedPrice);
    }, [number]);
    

  return (
    <div className={`${title === "Grand Total" ? "mt-[16px]" : ""} flex items-start justify-between`}>
        <p className='uppercase text-[15px] font-medium opacity-50 leading-[25px]'>{title}</p>
        <p className={`${style} text-[18px] uppercase font-bold leading-normal`}>$ {price}</p>
    </div>
  )
}

export default PriceContainer