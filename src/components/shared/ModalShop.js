import React from 'react'
import ShopNavbar from './ShopNavbar'

const ModalShop = () => {
  return (
    <div className='absolute z-50 w-[375px] md:w-[768px] h-[750px] md:h-[340px] bg-white flex justify-center items-center rounded-lg top-[90px] left-1/2 -translate-x-1/2'>
        <ShopNavbar />
    </div>
  )
}

export default ModalShop