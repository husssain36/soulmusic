import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div className="bg-[#0A183D] h-full min-h-screen overflow-scroll scrollbar-hide">
        <Navbar/>
        <h1 className="font-semibold text-center text-5xl text-[#DE2D63] mx-10 my-5">About Us</h1>

        <div className="grid grid-cols-2 my-5 "> 
            <div className="grid col-span-6 md:col-span-1 px-10">
                <div className="text-centre text-white font-semibold text-6xl" >
                  <p className="text-3xl text-white">Welcome to <span className="text-[#DE2D63]">SOULMUSIC.</span></p>
                  <p className="text-xl text-justify mt-3 text-white">While music genre plays an enormous role in building and displaying social identity, the emotional expression of a song and — even more importantly — its emotional impression on the listener is often underestimated in the domain of music preferences.</p>
                  <p className="text-xl text-justify mt-3">Only a few decades back, choosing music by genre and/or artist was effectively the only option. This has changed dramatically since millenials now a day's select music based on their mood, they listen to pop when sad, love song's when they feel happy.</p>
                  <p className="text-xl text-justify mt-3">We at <span className="text-[#DE2D63]">SoulMusic</span> have built an application that will detect users mood and suggest him/her relevant songs on the basis of a single chat input. Our model first predicts the users mood whether he/she is Angry, Happy, Feeling loved or Sad. Than based on the mood detected our AI recommend the user spotify links to songs that match the users mood.</p>
                </div>
                  
             </div> 
             <div className="hidden md:grid col-span-1 ">
              <img src="/main.svg" className="img-responsive" width="700px" height="500px"alt="main" />
             </div>  
          </div>

          <div className="my-10">
            <h1 className="font-semibold text-5xl text-center text-[#DE2D63] mx-10 my-5">Mentor</h1>
            <div className="grid grid-cols-2 ">
                <div className="col-span-6 md:col-span-1 place-items-center mx-40" >
                    <img src="/VipulDalal.png" className="img-responsive" alt="" />
                </div>
                <div className="col-span-6 md:col-span-1 text-white text-center">
                    <h1 className="text-[#DE2D63] text-4xl font-bold mt-20">Dr. Vipul Dalal</h1>
                    <h3 className="text-2xl font-bold">Professor and Head of the Department</h3>

                    <div className=" mt-3">
                        <p className="text-xl font-bold">Qualifications</p>
                        <ul>
                            <li className="text-lg ">PhD (Comp Sc & Tech), Nagpur University 2019</li>
                            <li className="text-lg ">M.E. (Computer Engineering), VJTI, Mumbai 2006</li>
                            <li className="text-lg ">B.E. (Computer Engineering), SVNIT, Surat 1997</li>
                        </ul>
                    </div>

                    <div className="mt-3 mb-6">
                    <p className="text-xl font-bold">Experience</p>
                    <ul>
                        <li className="text-lg ">Teaching Experience: 21 Years</li>
                        <li className="text-lg ">Administrative and managerial Experience: 5 Years</li>
                        <li className="text-lg ">Technical papers Published: 25</li>
                        <li className="text-lg ">Books Authored: 1</li>
                    </ul>
                    </div>
                    <a className=" bg-[#DE2D63] hover:bg-pink-600 text-white text-xl font-bold py-3 px-10 rounded" href="https://vit.edu.in/VipulDalal.html">Know More</a>
                </div>
            </div>
          </div>

          <div className="my-10">
            <h1 className="font-semibold text-5xl text-center text-[#DE2D63] mx-10 my-5">Team</h1>
            <div className="grid grid-cols-4 text-center">
                <div className="col-span-6 md:col-span-1 place-items-center mx-20 mb-10" >
                    <img src="/hussain.jpg" className="img-responsive rounded-full" alt="" />
                    <h1 className="text-[#DE2D63] text-center text-white text-xl font-bold mt-5">Hussain Rampurawala</h1>
                    <h3 className="text-lg text-center text-white font-bold mb-4">TE - INFT</h3>
                    <a className="mx-12 bg-[#DE2D63] hover:bg-pink-600 text-white font-bold py-2 px-4 rounded" href="https://www.linkedin.com/in/hussain-rampurawala-a605081a0/">Know More</a>
                </div>

                <div className="col-span-6 md:col-span-1 place-items-center mx-20 mb-10" >
                    <img src="/shahid.jpg" className="img-responsive rounded-full" alt="" />
                    <h1 className="text-[#DE2D63] text-center text-white text-xl font-bold mt-5">Shahid Afridi Mandal</h1>
                    <h3 className="text-lg text-center text-white font-bold mb-4">TE - INFT</h3>
                    <a className="mx-12 bg-[#DE2D63] hover:bg-pink-600 text-white font-bold py-2 px-4 rounded" href="https://www.linkedin.com/in/shahid-mandal-654ac6/">Know More</a>
                </div>

                <div className="col-span-6 md:col-span-1 place-items-center mx-20 mb-10" >
                    <img src="/mudassir.jpg" className="img-responsive rounded-full" alt="" />
                    <h1 className="text-[#DE2D63] text-center text-white text-xl font-bold mt-5">Mudassir Ansari</h1>
                    <h3 className="text-lg text-center text-white font-bold mb-4">TE - INFT</h3>
                    <a className="mx-12 bg-[#DE2D63] hover:bg-pink-600 text-white font-bold py-2 px-4 rounded" href="https://www.linkedin.com/in/mudassir-ansari-95649b205/">Know More</a>
                </div>

                <div className="col-span-6 md:col-span-1 place-items-center mx-20 mb-10" >
                    <img src="/rahul.jpg" className="img-responsive rounded-full" alt="" />
                    <h1 className="text-[#DE2D63] text-center text-white text-xl font-bold mt-5">Rahul Sakhalkar</h1>
                    <h3 className="text-lg text-center text-white font-bold mb-4">TE - INFT</h3>
                    <a className="mx-12 bg-[#DE2D63] hover:bg-pink-600 text-white font-bold py-2 px-4 rounded" href="https://www.linkedin.com/in/rahul-sakhalkar-797b391a4/">Know More</a>
                </div>
            </div>
          </div>
        
    </div>
  )
}

export default About