import NavItem from './NavItem';

const Navbar = () => {
  return (
    <div className="w-[108px] h-[148px] md:w-[429px] md:h-[25px] flex flex-col md:flex-row justify-between">
      <NavItem text={'home'} />
      <NavItem text={'headphones'} />
      <NavItem text={'speakers'} />
      <NavItem text={'earphones'} />
    </div>
  );
};

export default Navbar;
