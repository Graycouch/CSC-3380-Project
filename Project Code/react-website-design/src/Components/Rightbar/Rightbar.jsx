import "./Rightbar.css"
import Online from "../Online/Online"
import { Users } from "../../DummyData"

export default function Rightbar({ Profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="Controller">
                    <img className="ControllerImage" src="assets/controller.jpg" alt="" />
                    <span className="ControllerText">
                        <b>Afaq Mansour</b> and <b>3 other friends</b> are currently playing together!
                    </span>
                </div>
                <div className="Ad">
                    <img className="RightbarAd" src="assets/gamingAd.jpg" alt="" />
                    <span className="AdText">
                        An endless selection of video games right at your fingertips!!
                    </span>
                    <span className="AdBoldText">
                        <b> Click Here To Get Started!</b>
                    </span>
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
                        <span className="RightbarInformationValue">Baton Rouge</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <span className="RightbarInformationKey">From:</span>
                        <span className="RightbarInformationValue">Palestine</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <span className="RightbarInformationKey">Relationship Status:</span>
                        <span className="RightbarInformationValue">Single</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <span className="RightbarInformationKey">Gaming Platforms:</span>
                        <span className="RightbarInformationValue">Steam</span>
                    </div>
                    <div className="RightbarInformationItem">
                        <span className="RightbarInformationKey">Discord Name:</span>
                        <span className="RightbarInformationValue">Graycouch#3982</span>
                    </div>
                </div>
                <h4 className="RightbarTittle">User Friends</h4>
                <div className="RightbarFollowingList">
                    <div className="RightbarFollowingList">
                        <div className="RightbarFollowing">
                            <img src="assets/person/1.jpeg" alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src="assets/person/2.jpeg" alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src="assets/person/3.jpeg" alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src="assets/person/5.jpeg" alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src="assets/person/6.jpeg" alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src="assets/person/7.jpeg" alt="" className="RightbarFollowingImage" />
                            <span className="RightbarFollowingName">Ron Weasley</span>
                        </div>
                        <div className="RightbarFollowing">
                            <img src="assets/person/8.jpeg" alt="" className="RightbarFollowingImage" />
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
                {Profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}