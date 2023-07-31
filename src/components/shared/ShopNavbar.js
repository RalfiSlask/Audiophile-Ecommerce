import ShopNavLink from "./ShopNavLink"

const ShopNavbar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[16px]">
        <ShopNavLink title={"headphones"}/>
        <ShopNavLink title={"speakers"}/>
        <ShopNavLink title={"earphones"}/>
    </div>
  )
}

export default ShopNavbar