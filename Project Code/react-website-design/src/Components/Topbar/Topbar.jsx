import "./Topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

export default function Topbar() {
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);

    return (
        <div className="TopbarContainer">
            <div className="TopbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="Logo">GameHub</span>
                </Link>
            </div>
            <div className="TopbarCenter">
                <div className="SearchBar">
                    <Search className="SearchIcon" />
                    <input placeholder="Search for friends, post, or videos" className="SearchInput" />
                </div>
            </div>
            <div className="TopbarRight">
                <div className="TopbarLinks">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="TopbarLinks">Homepage</span>
                    </Link>
                    <Link to={`/profile/${user.username}`} style={{ textDecoration: "none" }}>
                        <span className="TopbarLinks">Timeline</span>
                    </Link>
                </div>
                <div className="TopbarIcons">
                    <div className="TopbarIconItems">
                        <Person />
                        <span className="TopbarIconCounter">1</span>
                    </div>
                    <div className="TopbarIconItems">
                        <Chat />
                        <span className="TopbarIconCounter">3</span>
                    </div>
                    <div className="TopbarIconItems">
                        <Notifications />
                        <span className="TopbarIconCounter">2</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? PublicFolder + user.profilePicture : PublicFolder + "person/noAvatar.png"} alt="" className="TopbarProfilePicture" />
                </Link>
            </div>
        </div>
    );
}