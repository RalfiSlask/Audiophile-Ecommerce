import React, { useContext, useEffect } from 'react'
import Context from '../../context/Context'

const CategoryHeader = () => {
    const { category } = useContext(Context);

    useEffect(() => {
        console.log(category)
    })
  return (
    <div className='w-full h-[192px] md:h-[336px] bg-black text-white flex justify-center items-center'>
        <h1 className='mt-[80px] uppercase'>{category}</h1>
    </div>
  )
}

export default CategoryHeader