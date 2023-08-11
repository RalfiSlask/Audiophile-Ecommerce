import ShopNavLink from "./ShopNavLink"

const ShopNavbar = () => {
  return (
    <div className="flex flex-col justify-between w-[327px] md:w-[689px] xl:w-[1110px] md:flex-row">
        <ShopNavLink title={"headphones"}/>
        <ShopNavLink title={"speakers"}/>
        <ShopNavLink title={"earphones"}/>
    </div>
  )
}

export default ShopNavbar