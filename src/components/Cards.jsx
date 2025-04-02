import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <div className='relative bg-zinc-500 w-56 h-72 rounded-4xl py-10 px-5 text-white  cursor-pointer overflow-hidden'>
        <FaRegFileAlt />
        <p className='mt-5 font-semibold text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim odit dolore dignissimos aliquid cum?</p>

        <div className="w-full h-18 absolute bottom-0 left-0 bg-sky-400">

        </div>

    </div>
  )
}

export default Cards
