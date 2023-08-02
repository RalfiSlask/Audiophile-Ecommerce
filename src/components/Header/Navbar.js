import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <div className='w-[440px] h-[25px] flex gap-[34px]'>
       <NavItem text={"Home"} />
       <NavItem text={"Headphones"} />
       <NavItem text={"Speakers"} />
       <NavItem text={"Earphones"} />
    </div>
  )
}

export default Navbar