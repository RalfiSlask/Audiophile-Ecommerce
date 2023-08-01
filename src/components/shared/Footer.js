import FooterNavbar from "./FooterNavbar"
import FooterDescription from "./FooterDescription"


const Footer = () => {
  return (
    <footer className='w-full h-[654px] md:h-[400px] xl:h-[365px] bg-[#101010] mt-[120px] xl:mt-[160px]'>
        <FooterNavbar />
        <FooterDescription />
    </footer>
  )
}

export default Footer