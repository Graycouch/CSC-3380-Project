import "./messenger.css"
import Topbar from "../../Components/Topbar/Topbar"
import Conversation from "../../Components/Conversation/Conversation"
import Message from "../../Components/Message/Message"
import ChatOnline from "../../Components/ChatOnline/ChatOnline"
import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"
import axios from "axios"
import {io} from "socket.io-client"

export default function Messenger() {
    const [conversation, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([])
  
    const socket = useRef(io("ws://localhost:8900"))
    const {user} = useContext(AuthContext);
    const scrollRef = useRef();
       
    useEffect(()=>{
        socket.current.emit("addUser",user._id)
    },[user])

    useEffect(() =>{
        const getConversations = async ()=>{
            try{
            const res =await axios.get("/conversations/"+user._id)
           setConversations(res.data);
        }
        catch (err){
            console.log(err);
        }
        };
        getConversations();
    },[user._id])

    useEffect(()=>{
        const getMessages=async ()=>{
            try{
            const res = await axios.get("/messages/"+currentChat?._id);
            setMessages(res.data);
        }
        catch(err){
            console.log(err)
        }
    };
    getMessages();
    },[currentChat]);

    console.handleSubmit = async (e) =>{
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };
        try{
            const res = await axios.post("/messages", message)
            setMessages([...messages,res.data])
            setNewMessage("")
        }catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        ScrollRef.current?.scrollIntoView({ behavior : "smooth" });
    }.[messages])
    return(
        <>
            <Topbar/>
            <div className = "messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput"/>
                        {conversation.map(c=>(
                            <div onClick={()=>setCurrentChat(c)}>    
                            <Conversation conversation={c} currentUser={user}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ?
                        <>
                        <div className="chatBoxTop">
                            {messages.map(m=>(
                            <div ref = (scrollRef)>
                            <Message message={m} own={m.sender === user._id}/>
                            </div>
                            ))}
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" 
                            placeholder="write something..."
                            onChange={(e)=>setNewMessage(e.target.value)}
                            value={newMessage}
                            ></textarea>
                            <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                        </div>
                        </>
: (  //supposed to be ):( but didn't work
                        <span className ="noConversationText">
                            Open a conversation to start a chat.
                            </span>
                        )}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}
