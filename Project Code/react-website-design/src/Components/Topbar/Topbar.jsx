import "./Topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="TopbarContainer">
            <div className="TopbarLeft">
                <span className="Logo">GameHub</span>
            </div>
            <div className="TopbarCenter">
                <div className="SearchBar">
                    <Search className="SearchIcon" />
                    <input placeholder="Search for friends, post, or videos" className="SearchInput" />
                </div>
            </div>
            <div className="TopbarRight">
                <div className="TopbarLinks">
                    <span className="TopbarLinks">Homepage</span>
                    <span className="TopbarLinks">Timeline</span>
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
                <img src="/assets/person/Abdel Rahman Mansour.jpg" alt="" className="TopbarProfilePicture" />
            </div>
        </div>
    );
}