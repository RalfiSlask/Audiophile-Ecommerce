import logoCart from "../../assets/shared/desktop/icon-cart.svg";
import logoHamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import logoAudiophile from "../../assets/shared/desktop/logo.svg";
import Context from "../../context/Context";
import Navbar from "./Navbar";
import { useContext } from "react";

const Header = () => {
    const { isDesktop } = useContext(Context)

  return (
    <div className="h-[90px] w-full bg-[#000] flex justify-center">
        <div className="w-[90%] md:w-[689px] xl:w-[1110px] border-b border-[white] border-opacity-10 flex items-center h-full justify-between">
           {!isDesktop && <img src={logoHamburger} alt="logo hamburger" className="cursor-pointer"/>}
            <img src={logoAudiophile} alt="audiophile logo" />
            {isDesktop && <Navbar />}
            <img src={logoCart} alt="logo cart" className="cursor-pointer"/>
        </div>
    </div>
  )
}

export default Header