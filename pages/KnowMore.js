import React from 'react'
import Navbar from '../components/Navbar'

function KnowMore() {
  return (
    <div className="bg-[#0A183D] h-full min-h-screen overflow-scroll scrollbar-hide">
        <Navbar/>
        <h1 className="font-semibold text-center text-5xl text-[#DE2D63] mx-10 my-5">Know More</h1>

        <div className="grid grid-cols-2 my-5 "> 
            <div className="grid col-span-6 md:col-span-1 px-10">
              <p className="text-white font-semibold text-xl mt-5 text-justify" >
                We at SoulMusic have built an application that will detect users' mood and suggest him/her relevant songs based on a single chat 
                input. Our model first predicts the user's mood whether he/she is Angry, Happy, Feeling loved or Sad. Then based on the 
                mood detected our AI recommend the user Spotify links to songs that match the user's mood.
                </p>

                <p className="text-white font-semibold text-xl mt-5 text-justify">
                The above-mentioned functionality is achieved by having two separate portions in our project, first being the mood detection 
                model called Emotion-BERT (Bidirectional encoder representation for transformer). The architecture behind Emotion-BERT
                is based on transformers which is used to clean, reduce, expand or generate features. 
                </p>

                <p className="text-white font-semibold text-xl mt-5 text-justify"> 
                We first train our model with over 136833 different mood-based inputs from a csv file in order to get a precise mood 
                detection during our test case. The user is expected to enter a text based on the question asked by our model. Based 
                on the user’s input our model trice to predict the mood.
                </p>

                <p className="text-white font-semibold text-xl mt-5 text-justify">
                Once the mood prediction is done, the detected mood is than mapped with a set of songs that has already been sorted 
                and the best matched songs are than suggested to the user by means of Spotify links.
                </p>
            </div>

            <div className="grid col-span-6 md:col-span-1 px-10">
              <img src="/knowmore1.svg" width="800" height="" alt="" />
            </div>
        </div>

        <h1 className="font-semibold text-center text-5xl text-[#DE2D63] mx-10 my-5">Features</h1>

        <div className="grid grid-cols-2 my-5 "> 
            <div className="grid col-span-6 md:col-span-1 px-10">
              <img src="/knowmore2.svg" width="600" height="" alt="" />
            </div>

            <div className="grid col-span-6 md:col-span-1 px-10">
              <ul>
                <li className="text-white font-semibold text-3xl mt-20 text-justify">
                •	To implement an AI based mood detection system named Emotion-BERT from scratch using transformers.
                </li>

                <li className="text-white font-semibold text-3xl mt-10 text-justify">
                • To use AI techniques to sort music based on features like acousticness, danceability, energy, loudness, tempo, audio valence.

                </li>

                <li className="text-white font-semibold text-3xl mt-10 text-justify">
                • To combine the above-mentioned features i.e. to detect mood and suggest a songs from the sorted list.

                </li>
              </ul>
               
            </div>
        </div>
    </div>

  )
}

export default KnowMore