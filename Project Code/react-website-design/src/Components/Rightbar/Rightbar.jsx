import "./Rightbar.css"
import Online from "../Online/Online"
import { Users } from "../../DummyData"

export default function Rightbar({ user }) {
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

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
                    <div className="RightbarInformationItem">
                        <span className="RightbarInformationKey">City:</span>
                        <span className="RightbarInformationValue">{user.city === "" ? "-" : user.city}</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <span className="RightbarInformationKey">From:</span>
                        <span className="RightbarInformationValue">{user.from === "" ? "-" : user.from}</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <span className="RightbarInformationKey">Relationship Status:</span>
                        <span className="RightbarInformationValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <img className="RightbarGamingImage" src={`${PublicFolder}Steam.png`} alt="" />
                        <span className="RightbarInformationValue"> {user.steamLink === "" ? "-" : user.steamLink}</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <img className="RightbarGamingImage" src={`${PublicFolder}Playstation.png`} alt="" />
                        <span className="RightbarInformationValue"> {user.playstationLink === "" ? "-" : user.playstationLink}</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <img className="RightbarGamingImage" src={`${PublicFolder}Xbox.png`} alt="" />
                        <span className="RightbarInformationValue"> {user.xboxLink === "" ? "-" : user.xboxLink}</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <img className="RightbarGamingImage" src={`${PublicFolder}Discord.png`} alt="" />
                        <span className="RightbarInformationValue"> {user.discordLink === "" ? "-" : user.discordLink}</span>
                    </div>
                </div>
                <h4 className="RightbarTittle">User Friends</h4>
                <div className="RightbarFollowingList">
                    <div className="RightbarFollowingList">
                        <div className="RightbarFollowing">
                            <img src={`${PublicFolder}person/1.jpeg`} alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PublicFolder}person/2.jpeg`} alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PublicFolder}person/3.jpeg`} alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PublicFolder}person/4.jpeg`} alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PublicFolder}person/5.jpeg`} alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PublicFolder}person/6.jpeg`} alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PublicFolder}person/7.jpeg`} alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src={`${PublicFolder}person/8.jpeg`} alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                    </div>
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