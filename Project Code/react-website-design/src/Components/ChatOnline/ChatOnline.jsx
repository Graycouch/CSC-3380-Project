import "./ChatOnline.css";
const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

export default function ChatOnline() {
    return(
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className="chatOnlineImg"
                src={PublicFolder + "person/noAvatar.png"} alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">John Doe</span>
        </div>
    )
}