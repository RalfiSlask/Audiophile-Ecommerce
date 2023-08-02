import React, { useContext } from 'react'
import Context from '../../context/Context'

const CategoryHeader = () => {
    const { category } = useContext(Context);

  return (
    <div className='w-full h-[192px] md:h-[336px] bg-black text-white flex justify-center items-center'>
        <h1 className='mt-[80px] uppercase text-[28px] font-bold tracking-[2px] md:text-[40px] md:leading-[44px] md:tracking-[1.429px]'>{category}</h1>
    </div>
  )
}

export default CategoryHeader