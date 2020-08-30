import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';
import "./SideBarChat.css";
import db from './firebase';
import { Link } from 'react-router-dom';

const SideBarChat = ({ addNewChat, id, name }) => {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter a name for chat");
        if (roomName) {
            db.collection("rooms").add({
                name: roomName
            })
        }
    }
    useEffect(() => {
        if(id) {
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }
    }, [id])
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[messages.length - 1]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add new chat</h2>
            </div>
        )
}

export default SideBarChat
