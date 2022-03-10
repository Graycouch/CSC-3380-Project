import Topbar from "../../Components/Topbar/Topbar";
import Leftbar from "../../Components/Leftbar/Leftbar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";
import "./Profile.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router";

export default function Profile() {
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        }
        fetchUser();
    }, [username]);

    return (
        <>
            <Topbar />
            <div className="ProfileContainer">
                <Leftbar />
                <div className="ProfileRight">
                    <div className="ProfileRightTop">
                        <div className="ProfileCover">
                            <img className="ProfileCoverPicture" src={user.coverPicture || PublicFolder+"person/noCover.jpg"} alt="" />
                            <img className="ProfilePicture" src={user.profilePicture || PublicFolder+"person/noAvatar.png"} alt="" />
                        </div>
                        <div className="ProfileInformation">
                            <h4 className="ProfileInformationName">{user.username}</h4>
                            <span className="ProfileInformationDescription">{user.description}</span>
                        </div>
                    </div>
                    <div className="ProfileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
