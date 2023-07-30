import React from 'react'

const NavItem = ( {text} ) => {
  return (
    <div className='font-bold text-white text-[13px] uppercase tracking-[2px] cursor-pointer hover:text-[#D87D4A]'>{text}</div>
  )
}

export default NavItem