import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

function SongMessage({song, typeOfUser}) {

  const TypeOfMessage = typeOfUser === "user" ? Bot : User

  return (
      <div>
          <TypeOfMessage>
            
            <Image src={song.Poster_URL} height={400} width={400}/>
            <h3 className="text-xl font-semibold">{song.Track_Name}</h3>
            <h3 className="text-lg mb-4">{song.Artist_Name}</h3>
            <a className="bg-[#1DB954] hover:bg-green-500 text-white font-bold mb-2 py-2 px-16 border-b-4 border-green-800 hover:border-green-600 rounded" target="_blank" href={song.Track_URL}>Click here to Open Spotify</a>
            <img src="/spotify_logo.png" className="w-12 absolute right-5 bottom-1"  alt="" />
          </TypeOfMessage>
      </div>
  )
}

export default SongMessage

const MessageElement = styled.div`
  width: fit-content;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  min-width: 30px;
  padding-bottom: 15px;
  position: relative;
  text-align: right;
`;

const Bot = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;

const User = styled(MessageElement)`
  text-align: left;
  background-color: whitesmoke;
`;

const artistName = styled.h3`
  font-weight: 500;
`;
