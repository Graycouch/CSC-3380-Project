import Topbar from "../../Components/Topbar/Topbar";
import Leftbar from "../../Components/Leftbar/Leftbar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";
import "./Profile.css"

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="ProfileContainer">
                <Leftbar />
                <div className="ProfileRight">
                    <div className="ProfileRightTop">
                        <div className="ProfileCover">
                            <img className="ProfileCoverPicture" src="assets/post/3.jpeg" alt="" />
                            <img className="ProfilePicture" src="assets/person/Abdel Rahman Mansour.jpg" alt="" />
                        </div>
                        <div className="ProfileInformation">
                            <h4 className="ProfileInformationName">Abdel Rahman Mansour</h4>
                            <span className="ProfileInformationDescription">Hey there!!</span>
                            </div>
                    </div>
                    <div className="ProfileRightBottom">
                        <Feed />
                        <Rightbar Profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
