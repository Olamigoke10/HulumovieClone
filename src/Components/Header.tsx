import React from 'react'
import Logo from "../assets/Images/logo.png"
import { IoSearch } from 'react-icons/io5'


const Header = () => {
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
      <ul className='flex gap-8'>
        {menu.map((item) => (
            <li className='text-gray-400 text-[18px] font-medium cursor-pointer
             hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out'>{item.name}</li>
        ))}
      </ul>

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
