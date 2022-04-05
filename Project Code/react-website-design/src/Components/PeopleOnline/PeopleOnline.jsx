import axios from "axios";
import { useEffect, useState } from "react";
import "./PeopleOnline.css";

export default function PeopleOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      axios.post("/conversations",
        {
          senderId: currentId,
          receiverId: user._id
        }
      );
      window.location.reload();
    }
  };

  return (
    <div className="peopleOnline">
      {onlineFriends.map((o) => (
        <div className="peopleOnlineFriend" onClick={() => handleClick(o)}>
          <div className="peopleOnlineImgContainer">
            <img
              className="peopleOnlineImg"
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            <div className="peopleOnlineBadge"></div>
          </div>
          <span className="peopleOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
}