import "./CloseFriend.css"

export default function CloseFriend({user}) {
    return (
        <li className="LeftbarFriend">
            <img className="LeftbarFriendImage" src={user.profilePicture} alt="" />
            <span className="LeftbarFriendName">{user.username}</span>
        </li>
    )
}
