import axios from "axios"
import { useEffect, useState } from "react"
import "./Conversation.css"

export default function Conversation({Conversation,currentUser}) {
const [user,setUser] = useState(null)
const PF = process.env.REACT_APP_PUBLIC_FOLDER

useEffect(()=>{
    const friendId = Conversation.members.find(m=>m !== currentUser._id)

    const getUser = async ()=>{
        try{
        const res = await axios("/user?userId="+friendId)
        setUser(res,data)
    }
    catch(err){
        console.log(err);
    }
};
getUser()
},[currentUser,Conversation]);



    return(
        <div className = "conversation">
            <img 
            className = "conversationImg" 
            src = {
                user?.profilePicture 
                    ? PF+user.profilePicture 
                    : PF+"person/noAvatar.png"
            } 
            alt = ""/>
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}
