import "./Online.css"

export default function Online({user}) {
    return (
        <li className="RightbarFriend">
            <div className="RightbarProfileImageContainer">
                <img className="RightbarProfilePicture" src={user.profilePicture} alt="" />
                <span className="RightbarOnline"></span>
            </div>
            <span className="RightbarUsername">{user.username}</span>
        </li>
    )
}
