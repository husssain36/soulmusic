import React from 'react'
import Navbar from '../components/Navbar'
import KnowMore from './KnowMore'
import ChatSection from './ChatSection'
import {useRouter} from "next/router"

function Homepage() {
  const router = useRouter();
  return (
    <div className="bg-[#0A183D] h-full min-h-screen overflow-scroll scrollbar-hide">
      <Navbar/>
        <div className="bg-[#0A183D] h-full min-h-screen mt-20">
          <div className="grid grid-cols-2 place-items-center "> 
            <div className="col-span-6 mt-10 text-center md:col-span-1 md:px-20">
                <div className="text-centre text-white font-semibold text-6xl" >
                  <h2><span className="text-[#DE2D63]">Music</span> For </h2>
                  <h2>Every Soul</h2>
                  <p className="py-5 text-2xl text-white">Welcome to SOULMUSIC. To start the detection process click on Launch</p>
                </div>
                  <button onClick = {() => router.push('/ChatSection')} class="bg-[#DE2D63] hover:bg-pink-500 text-white font-bold py-2 px-8 border-b-4 border-pink-800 hover:border-pink-600 rounded">
                    Launch
                  </button>
                  <button onClick = {() => router.push('/KnowMore')} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border-b-4 border-gray-400 rounded shadow mx-4">
                    Know More
                  </button>
             </div> 
             <div className="col-span-6 md:col-span-1 ">
              <img src="/main.svg" className="img-responsive" width="700px" height="500px"alt="main" />
             </div>  
          </div>
          
        </div>
    </div>
  )
}

export default Homepage