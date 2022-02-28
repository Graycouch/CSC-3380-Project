import "./Share.css"
import { PermMedia, VideoLibrary, Label, Room, EmojiEmotions, Reply } from "@material-ui/icons"

export default function Share() {
    return (
        <div className="Share">
            <div className="ShareWrapper">
                <div className="ShareTop">
                    <img className="ShareProfilePicture" src="/assets/person/Abdel Rahman Mansour.jpg" alt="" />
                    <input placeholder="What's on your mind Abdel Rahman?" className="ShareInput" />
                </div>
                <hr className="ShareHr" />
                <div className="ShareBottom">
                    <div className="ShareOptions">
                        <div className="ShareOption">
                            <PermMedia htmlColor="grey" className="ShareIcon" />
                            <span className="ShareOptionText">Photo</span>
                        </div>
                        <div className="ShareOption">
                            <VideoLibrary htmlColor="grey" className="ShareIcon" />
                            <span className="ShareOptionText">Video</span>
                        </div>
                        <div className="ShareOption">
                            <Label htmlColor="grey" className="ShareIcon" />
                            <span className="ShareOptionText">Tag</span>
                        </div>
                        <div className="ShareOption">
                            <Room htmlColor="grey" className="ShareIcon" />
                            <span className="ShareOptionText">Location</span>
                        </div>
                        <div className="ShareOption">
                            <EmojiEmotions htmlColor="grey" className="ShareIcon" />
                            <span className="ShareOptionText">Emojis</span>
                        </div>
                        <div className="ShareOption">
                            <button className="ShareButton">
                                <Reply htmlColor="grey" className="ShareIcon" />
                            </button>
                            <span className="ShareOptionText">Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
