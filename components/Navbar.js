import React from 'react'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import KnowMore from '../pages/KnowMore'
import {useRouter} from "next/router"

function Navbar() {
    const router = useRouter();
  return (
    
<nav className="bg-[#0A183D] border-b-4 border-[#DE2D63] px-2 sm:px-4 py-5" >
    <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a onClick={() => router.push('/Homepage')} className="flex items-center cursor-pointer">
            <img  src="/Logo.svg" className="mr-3 h-7 md:h-9" alt="SoulMusic"/>
        </a>
        
        <div className="flex justify-end max-w-2xl md:px-0 px-4 md:block md:w-auto">
            <ul className="flex flex-row font-small ml-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                     <a className="text-white text-xl font-semibold mx-3 cursor-pointer" onClick={() => router.push('/Homepage')}>Home</a>
                </li>
                <li>
                     <a className="text-white text-xl font-semibold mx-3 cursor-pointer" onClick={() => router.push('/About')}>About</a>
                </li>
                <li>
                     <a className="text-white text-xl font-semibold mx-3 cursor-pointer " onClick={() => router.push('/KnowMore')}>Know More</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

  )
}

export default Navbar