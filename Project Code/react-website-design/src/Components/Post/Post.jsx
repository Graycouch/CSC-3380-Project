import "./Post.css"
import { MoreVert } from "@material-ui/icons"

export default function Post() {
    return (
        <div className="Post">
            <div className="PostWrapper">
                <div className="PostTop">
                    <div className="PostTopLeft">
                        <img className="PostProfilePicture" src="/assets/person/1.jpeg" alt="" />
                        <span className="PostUsername">Batata</span>
                        <span className="PostDate">5 min ago</span>
                    </div>
                    <div className="PostTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="PostCenter">
                    <span className="PostText">Hey, this is my first post!!</span>
                    <img className="PostImage" src="assets/post/1.jpeg" alt="" />
                </div>
                <div className="PostBottom">
                    <div className="PostBottomLeft">
                        <img className="LikeButton" src="assets/like.png" alt="" />
                        <img className="LikeButton" src="assets/heart.png" alt="" />
                        <span className="PostLikeCounter">32 People Liked this Post!</span>
                    </div>
                    <div className="PostBottomRight">
                        <span className="PostCommentText">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
