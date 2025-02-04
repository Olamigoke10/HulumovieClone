import React, { useState } from 'react'
import Logo from "../assets/Images/logo.png"
import { IoChevronDownOutline, IoChevronUpOutline, IoSearch } from 'react-icons/io5'


const Header = () => {

    const  [toggle, setToggle] = useState(true);

    const menu = [
        {
            id:1,
            name:"Home"
        },
        {
            id:2,
            name:"Movies"
        },
        {
            id:3,
            name:"TV"
        },
        {
            id:4,
            name:"Sports"
        },
        {
            id:5,
            name:"MyStuff"
        },
        {
            id:6,
            name:"Hub"
        },

    ]
  return (
    <div className='flex justify-between items-center p-4 px-10'>
      <img src={Logo } alt="" className='w-[65px]'/>
      <ul className='hidden md:flex gap-8'>
        {menu.map((item) => (
            <li className='text-gray-400 text-[18px] font-medium cursor-pointer
             hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out'>{item.name}</li>
        ))}
      </ul>

      <div className='md:hidden'>
        <h2 className='text-white font-medium flex items-center bg-gray-700
         rounded-md cursor-pointer px-3 pb-2 py-1' onClick={()=>setToggle(!toggle)}>Home 
         {!toggle ? <IoChevronDownOutline  className='mt-1'/>:
         <IoChevronUpOutline className='mt-1'/>}
         </h2> 
         {toggle?
        <ul className='absolute bg-gray-700 w-[200px] text-center mt-3 left-0 right-0
        ml-auto mr-auto rounded-md px-3'>
            {menu.map((item) => (
            <li className='text-gray-400 text-[18px] font-medium 
            cursor-pointer mb-3 mt-2 hover:bg-gray-600 hover:text-white px-3
              pb-2 py-1 rounded-md transition-all duration-500 ease-in-out'>{item.name}</li>
        ))}
        </ul>: null 
        }
          </div>

      <div className='flex gap-10'>
        <IoSearch className='text-[35px] text-gray-300 hover:bg-gray-700 px-[3px] pb-[2px] py-[2px]
         rounded-md hover:text-white transition-all duration-500 ease-in-out cursor-pointer'/>

         <h2 className='px-[10px] text-[20px] text-gray-300 border-[2px]
          border-white rounded-full'>R</h2>
        
      </div>
    </div>
  )
}

export default Header
