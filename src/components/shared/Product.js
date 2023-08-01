import MediumButton from "./MediumButton"


const Product = ( {image, product, info} ) => {
  return (
    <div className="text-center xl:text-start flex flex-col justify-center xl:justify-start">
        <img src={image} alt={`${product}`} />
        <div>
            <h2 className="uppercase text-[14px] font-normal tracking-[10px] text-[#D87D4A]">New Product</h2>
            <h1>{product}</h1>
            <p className="opacity-50 text-[15px] font-medium leading-[25px]">{info}</p>
            <MediumButton text={"See button"}/>
        </div>
    </div>
  )
}

export default Product