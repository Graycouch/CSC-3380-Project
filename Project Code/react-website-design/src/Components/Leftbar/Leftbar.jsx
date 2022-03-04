import "./Leftbar.css"
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  Event,
  School,
  VideogameAsset
} from "@material-ui/icons"
import { Users } from "../../DummyData"
import CloseFriend from "../CloseFriend/CloseFriend"

export default function Leftbar() {
  return (
    <div className="Leftbar">
      <div className="LeftbarWrapper">
        <ul className="LeftbarList">
          <li className="LeftbarListItem">
            <RssFeed className="LeftbarIcon" />
            <span className="LeftbarListItemText">Feed</span>
          </li>
          <li className="LeftbarListItem">
            <Chat className="LeftbarIcon" />
            <span className="LeftbarListItemText">Chats</span>
          </li>
          <li className="LeftbarListItem">
            <PlayCircleFilledOutlined className="LeftbarIcon" />
            <span className="LeftbarListItemText">Videos</span>
          </li>
          <li className="LeftbarListItem">
            <Group className="LeftbarIcon" />
            <span className="LeftbarListItemText">Groups</span>
          </li>
          <li className="LeftbarListItem">
            <Bookmark className="LeftbarIcon" />
            <span className="LeftbarListItemText">Bookmarks</span>
          </li>
          <li className="LeftbarListItem">
            <HelpOutline className="LeftbarIcon" />
            <span className="LeftbarListItemText">Questions</span>
          </li>
          <li className="LeftbarListItem">
            <VideogameAsset className="LeftbarIcon" />
            <span className="LeftbarListItemText">Video Games</span>
          </li>
          <li className="LeftbarListItem">
            <Event className="LeftbarIcon" />
            <span className="LeftbarListItemText">Events</span>
          </li>
          <li className="LeftbarListItem">
            <School className="LeftbarIcon" />
            <span className="LeftbarListItemText">Coaching</span>
          </li>
        </ul>
        <button className="LeftbarButton">Show More</button>
        <hr className="LeftbarHr" />
        <ul className="LeftbarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}