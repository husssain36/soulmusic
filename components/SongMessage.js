import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

function SongMessage({song, typeOfUser}) {

  console.log(song)
  const TypeOfMessage = typeOfUser === "user" ? Bot : User

  return (
      <div>
          <TypeOfMessage>
            <Image src={song.Poster_URL} height={200} width={200}/>
            <h3 classname="font-xl">{song.Track_Name}</h3>
            <a href={song.Track_URL}>Click here to Open Spotify</a>
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
