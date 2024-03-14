"use client";
import React from 'react';
import {Conversation, Avatar} from  "@chatscope/chat-ui-kit-react";

function ConvoList(props) {
    const{image, name, info} = props
    return (
        <div
            style={{
                width: "100%",
                cursor: "pointer"
            }}
        >
        {
            image.map((img, index) => (
                <Conversation key={index} name={name[index]} info={info[index]} >
                    <Avatar size="lg" key={index} src={img} name={name[index]}  status="available" />
                </Conversation>
            ))
        }
       
        </div>
 
    );
}

export default ConvoList;