import { useContext } from "react";
import MediumButton from "./ui/MediumButton";
import CartProduct from "./CartProduct";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";

const CartModal = () => {
  const { cartList, totalPrice, emptyCartOnClick, closeModal, formatNumberWithCommas } = useContext(Context)

  const navigate = useNavigate();

  const handleClick = () => {
    if(cartList.length > 0) {
      closeModal("cart")
      navigate("/checkout")
    }
  };

  return (
    <div className='flex flex-col gap-[24px] absolute z-50 w-[327px] md:w-[377px] px-[28px] md:px-[31px] py-[31px] rounded-lg bg-white top-[120px] left-1/2 transform -translate-x-1/2 md:-translate-x-[20px] xl:-translate-x-[-190px]'>
        <div className="flex justify-between w-full">
            <p className="text-[18px] font-bold uppercase tracking-[1.286px]">CART ({cartList.length})</p>
            <p onClick={emptyCartOnClick} className="font-medium text-[15px] underline cursor-pointer opacity-50 hover:text-[#D87D4A] hover:opacity-100 transition-all duration-300 ease-in-out leading-[25px]">Remove All</p>
        </div>
        <div className="flex flex-col gap-[24px] my-[8px]">
            {cartList.map((product, index) => {
              return <CartProduct key={index} product={product}/>
            }) }
        </div>
        <div className="flex justify-between w- full">
            <p className="text-[15px] font-medium leading-[25px] opacity-50">TOTAL</p>
            <p className="font-bold text-[18px] uppercase">$ {formatNumberWithCommas(totalPrice)}</p>
        </div>
        <MediumButton text={"checkout"} onClick={handleClick} large={true}/>
    </div>
  )
}

export default CartModal