import "./Rightbar.css"
import Online from "../Online/Online"
import { Users } from "../../DummyData"
import { axios } from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Rightbar({ user }) {
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);

    const openRightbarForm = (e) => {
        e.preventDefault();
        document.getElementById("myRightbarForm").style.display = "block";
    }

    const closeRightbarForm = (e) => {
        e.preventDefault();
        document.getElementById("myRightbarForm").style.display = "none";
    }

    const submitHandler = () => {

    }

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const HomeRightbar = () => {
        return (
            <>
                <div className="Controller">
                    <img className="ControllerImage" src={`${PublicFolder}controller.jpg`} alt="" />
                    <span className="ControllerText">
                        <b>Afaq Mansour</b> and <b>3 other friends</b> are currently playing together!
                    </span>
                </div>
                <div className="Ad">
                    <img className="RightbarAd" src={`${PublicFolder}gamingAd.jpg`} alt="" />
                    <span className="AdText">
                        An endless selection of video games right at your fingertips!!
                    </span>
                    <a href="https://store.steampowered.com/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                        <span className="AdBoldText">
                            <b> Click Here To Get Started!</b>
                        </span>
                    </a>
                </div>
                <h4 className="RightbarTitle">Online Friends</h4>
                <ul className="RightbarFriendList">
                    {Users.map((u) => (<Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="RightbarTitle2"><b>User Information</b></h4>
                <div className="RightbarInformation">
                    <div class="form-popup" id="myRightbarForm">
                        <form class="form-container">
                            <label><b>City: </b>
                                <input type="text" placeholder="Enter The City You Live In"></input>
                            </label>
                            <label><b>From: </b>
                                <input type="text" placeholder="Enter Where You're From"></input>
                            </label>
                            <label><b>Relationship Status: </b>
                                <input type="text" placeholder="Enter Your Relationship Status"></input>
                            </label>
                            <label><b>Steam Username: </b>
                                <input type="text" placeholder="Enter Your Steam Username"></input>
                            </label>
                            <label><b>Playstation Username: </b>
                                <input type="text" placeholder="Enter Your Playstation Username"></input>
                            </label>
                            <label><b>Xbox Username: </b>
                                <input type="text" placeholder="Enter Your Xbox Username"></input>
                            </label>
                            <label><b>Discord Username: </b>
                                <input type="text" placeholder="Enter Your Discord Username"></input>
                            </label>
                            <button type="submit" class="button" onClick={submitHandler}>Submit</button>
                            <button type="button" class="button cancel" onClick={closeRightbarForm}>Close</button>
                        </form>
                    </div>
                    <button className="RightbarButton" onClick={openRightbarForm}>
                        <div className="RightbarInformationItem">
                            <span className="RightbarInformationKey">City:</span>
                            <span className="RightbarInformationValue">{user.city === "" ? "-" : user.city}</span>
                        </div>
                    </button>
                    <button className="RightbarButton" onClick={openRightbarForm}>
                        <div className="RightbarInformationItem">
                            <span className="RightbarInformationKey">From:</span>
                            <span className="RightbarInformationValue">{user.from === "" ? "-" : user.from}</span>
                        </div>
                    </button>
                    <button className="RightbarButton" onClick={openRightbarForm}>
                        <div className="RightbarInformationItem">
                            <span className="RightbarInformationKey">Relationship Status:</span>
                            <span className="RightbarInformationValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                        </div>
                    </button>
                    <button className="RightbarButton" onClick={openRightbarForm}>
                        <div className="RightbarInformationItem">
                            <img className="RightbarGamingImage" src={`${PublicFolder}Steam.png`} alt="" />
                            <span className="RightbarInformationGamingValue"> {user.steamLink === "" ? "-" : user.steamLink}</span>
                        </div>
                    </button>
                    <button className="RightbarButton" onClick={openRightbarForm}>
                        <div className="RightbarInformationItem">
                            <img className="RightbarGamingImage" src={`${PublicFolder}Playstation.png`} alt="" />
                            <span className="RightbarInformationGamingValue"> {user.playstationLink === "" ? "-" : user.playstationLink}</span>
                        </div>
                    </button>
                    <button className="RightbarButton" onClick={openRightbarForm}>
                        <div className="RightbarInformationItem">
                            <img className="RightbarGamingImage" src={`${PublicFolder}Xbox.png`} alt="" />
                            <span className="RightbarInformationGamingValue"> {user.xboxLink === "" ? "-" : user.xboxLink}</span>
                        </div>
                    </button>
                    <button className="RightbarButton" onClick={openRightbarForm}>
                        <div className="RightbarInformationItem">
                            <img className="RightbarGamingImage" src={`${PublicFolder}Discord.png`} alt="" />
                            <span className="RightbarInformationGamingValue"> {user.discordLink === "" ? "-" : user.discordLink}</span>
                        </div>
                    </button>
                </div>
                <h4 className="RightbarTittle">User Friends</h4>
                <div className="RightbarFollowingList">
                    {friends.map((friend) => (
                        <Link to={"/profile/" + friend.username} style={{ textDecoration: "none" }}>
                            <div className="RightbarFollowing">
                                <img src={friend.profilePicture ? PublicFolder + friend.profilePicture : PublicFolder + "person/noAvatar.png"} alt="" className="RightbarFollowingImage" />
                                <span className="RightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="Rightbar">
            <div className="RightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}