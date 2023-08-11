import Navbar from "../Navbar";
import FooterDescription from "./FooterDescription";
import logoAudiophile from "../../../assets/shared/desktop/logo.svg";
import SocialMediaNavbar from "./SocialMediaNavbar";

const Footer = () => {
  return (
    <footer className='w-full h-[654px] md:h-[400px] xl:h-[365px] bg-[#101010] text-[white] text-center md:text-start flex justify-center items-center'>
        <div className="h-[564px] w-[327px] md:w-[689px] md:h-[294px] xl:w-[1110px] xl:h-[242px] flex flex-col justify-between items-center md:items-start relative">
          <div className="flex flex-col xl:flex-row items-center md:items-start w-[143px] h-[221px] md:w-[429px] md:h-[82px] xl:w-[1110px] xl:h-[25px] justify-between">
            <img src={logoAudiophile} alt="audiophile logo" className="w-[143px] h-[25px]"/>
            <Navbar />
          </div>
          <FooterDescription />
          <div className="h-[97px] w-[258px] md:w-full md:h-[25px] flex flex-col justify-between md:flex-row items-center">
            <p className='text-[15px] font-medium opacity-50 leading-[25px]'>Copyright 2021. All Rights Reserved</p>
            <SocialMediaNavbar />
          </div>
        </div>
    </footer>
  )
}

export default Footer