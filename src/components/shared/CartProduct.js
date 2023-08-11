import PlusMinusButton from "../../pages/ProductDetail/ui/PlusMinusButton"
import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import xx59 from "../../assets/cart/image-xx59-headphones.jpg";
import xx99I from "../../assets/cart/image-xx99-mark-one-headphones.jpg";
import xx99II from "../../assets/cart/image-xx99-mark-two-headphones.jpg";
import YXI from "../../assets/cart/image-yx1-earphones.jpg";
import ZX7 from "../../assets/cart/image-zx7-speaker.jpg";
import ZX9 from "../../assets/cart/image-zx9-speaker.jpg";

const CartProduct = ( {product} ) => {
  const {count, name, price} = product;
  const [number, setNumber] = useState(count)
  const [productPrice, setProductPrice] = useState(null);
  const [image, setImage] = useState();
  const { cartList, setCartList, formatNumberWithCommas } = useContext(Context);

  useEffect(() => {
    const formattedPrice = formatNumberWithCommas(price)
    setProductPrice(formattedPrice)
  }, [price])

  useEffect(() => {
    if(name.includes("YX1")) {
      setImage(YXI)
    } else if(name.includes("ZX7")) {
      setImage(ZX7)
    } else if(name.includes("ZX9")) {
      setImage(ZX9)
    } else if(name.includes("XX59")) {
      setImage(xx59)
    } else if(name.includes("MK II")) {
      setImage(xx99II)
    } else {
      setImage(xx99I)
    }
  }, [name])

  useEffect(() => {
    const updatedCartList = [...cartList]
    const currentProduct = updatedCartList.find(product => product.name === name)
    currentProduct.count = number;
    setCartList(updatedCartList)
  }, [number])

  return (
    <div className='flex items-center justify-between w-full'>
        <img src={image} alt={name} className="w-[64px] h-[64px] rounded-lg"/>
        <div className='w-[75px] flex flex-col justify-between h-[50px] text-[15px] font-bold leading-[25px]'>
            <p>{name}</p>
            <p className='opacity-50'>$ {productPrice}</p>
        </div>
        <PlusMinusButton dimensions={"w-[96px] h-[32px]"} number={number} setNumber={setNumber}/>
    </div>
  )
}

export default CartProduct