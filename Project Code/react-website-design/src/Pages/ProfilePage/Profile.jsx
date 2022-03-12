import Topbar from "../../Components/Topbar/Topbar";
import Leftbar from "../../Components/Leftbar/Leftbar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";
import "./Profile.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { useParams } from "react-router";

export default function Profile() {
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;
    const formDescription = useRef();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        }
        fetchUser();
    }, [username]);

    const openForm = (e) => {
        e.preventDefault();
        document.getElementById("myForm").style.display = "block";
    }

    const closeForm = (e) => {
        e.preventDefault();
        document.getElementById("myForm").style.display = "none";
    }

    const submitHandler = () => {
        try {
            axios.put("/users/" + user._id,
                {
                    userId: user._id,
                    description: formDescription.current.value
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Topbar />
            <div className="ProfileContainer">
                <Leftbar />
                <div className="ProfileRight">
                    <div className="ProfileRightTop">
                        <div className="form-popup" id="myForm">
                            <form className="form-container">
                                <label htmlFor="ProfilePicture"><b>Profile Picture: </b>
                                    <button type="submit" className="button profile">Change Profile Picture</button>
                                </label>

                                <label htmlFor="CoverPicture"><b>Cover Picture: </b>
                                    <button type="submit" className="button cover">Change Cover Picture</button>
                                </label>
                                <label htmlFor="CoverPicture"><b>Description: </b>
                                    <input type="text" placeholder="Enter Description" ref={formDescription} />
                                </label>
                                <button type="submit" className="button" onClick={submitHandler}>Submit</button>
                                <button type="button" className="button cancel" onClick={closeForm}>Close</button>
                            </form>
                        </div>
                        <div className="ProfileCover">
                            <button className="CoverPictureButton" onClick={openForm}>
                                <img className="ProfileCoverPicture" src={user.coverPicture ? PublicFolder + user.coverPicture : PublicFolder + "person/noCover.jpg"} alt="" />
                            </button>
                            <button className="ProfilePictureButton" onClick={openForm}>
                                <img className="ProfilePicture" src={user.profilePicture ? PublicFolder + user.profilePicture : PublicFolder + "person/noAvatar.png"} alt="" />
                            </button>
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
