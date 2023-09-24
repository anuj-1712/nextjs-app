
import Link from 'next/link'
import React from 'react'

const Categories = ({setShowCategories}) => {
    const categories = ["Sports","Business","Technology"]
  return (
    <div className='absolute top-[50px] p-4 bg-black text-white flex flex-col gap-4 z-10' onMouseLeave={()=>setShowCategories(false)}>
      {categories.map((category,index)=>{
        return(
            <Link key={index} href={`/categories/${category.toLowerCase()}`} className=' hover:underline hover:text-violet-500' onClick={()=>setShowCategories(false)}>{category}</Link>
        )
      })}
    </div>
  )
}

export default Categories
