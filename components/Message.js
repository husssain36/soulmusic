import React from 'react'
import styled from 'styled-components'

function Message({message, typeOfUser}) {
    //console.log(message)

    const TypeOfMessage = typeOfUser === "user" ? Bot : User

    return (
        <div>
            <TypeOfMessage>{message}</TypeOfMessage>
        </div>
    )
}

export default Message

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