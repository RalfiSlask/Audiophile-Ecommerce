import { ReactComponent as FacebookLogo } from "../../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../../assets/shared/desktop/icon-twitter.svg";

const SocialMediaNavbar = () => {
  return (
    <div className="w-[104px] h-[24px] flex justify-between fill-[white] xl:absolute xl:top-[130px] xl:right-0 items-center">
        <FacebookLogo className="cursor-pointer hover:fill-[#D87D4A]"/>
        <InstagramLogo className="cursor-pointer hover:fill-[#D87D4A]"/>
        <TwitterLogo className="cursor-pointer hover:fill-[#D87D4A]"/>
    </div>
  )
}

export default SocialMediaNavbar