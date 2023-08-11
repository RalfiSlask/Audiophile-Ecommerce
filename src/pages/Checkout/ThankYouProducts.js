import { useContext, useEffect, useState } from "react"
import SummaryProduct from "./SummaryProduct"
import Context from "../../context/Context";

const ThankYouProducts = () => {
  const { cartList } = useContext(Context);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [text, setText] = useState("");
  const [productList, setProductList] = useState(cartList.filter((product, index) => index === 0))
 
  useEffect(() => {
    if(cartList.length > 1) {
      if(showAllProducts) {
        setText("view less")
      } else {
        setText(`and ${cartList.length - 1} other item(s)`)
      }
    } else {
      setText("")
    }
  }, [showAllProducts, cartList])

  useEffect(() => {
    showAllProducts ? setProductList(cartList) : setProductList(cartList.filter((product, index) => index === 0))
  }, [showAllProducts])

  const handleClick = () => {
    setShowAllProducts(PrevState => !PrevState)
  };

  return (
    <div className="bg-[#F1F1F1] md:w-[246px] min-h-[140px] p-[24px] rounded-t-[8px] md:rounded-l-[8px] md:rounded-tr-[0px] flex flex-col items-center">
    <div className="w-full">
       {productList.map((product, index) => {
        return <SummaryProduct key={index} product={product} />
      })} 
      <div className="border-t border-t-[rgba(0,0,0,0.1)] h-[30px] flex justify-center items-start">
        <p onClick={handleClick} className="text-center text-[12px] opacity-50 font-bold tracking-[-0.214px] mt-[12px] cursor-pointer hover:opacity-100">{text}</p>
      </div>
    </div>
</div>
  )
}

export default ThankYouProducts