import "./Post.css"
import { MoreVert } from "@material-ui/icons"
import { Users } from "../../DummyData"
import { useState } from "react"

export default function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = ()=>{
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="Post">
            <div className="PostWrapper">
                <div className="PostTop">
                    <div className="PostTopLeft">
                        <img className="PostProfilePicture" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="PostUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className="PostDate">{post.date}</span>
                    </div>
                    <div className="PostTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="PostCenter">
                    <span className="PostText">{post?.desc}</span>
                    <img className="PostImage" src={post.photo} alt="" />
                </div>
                <div className="PostBottom">
                    <div className="PostBottomLeft">
                        <img className="LikeButton" src="assets/like.png" onClick={likeHandler} alt="" />
                        <img className="LikeButton" src="assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="PostLikeCounter">{like} People Liked this Post!</span>
                    </div>
                    <div className="PostBottomRight">
                        <span className="PostCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
