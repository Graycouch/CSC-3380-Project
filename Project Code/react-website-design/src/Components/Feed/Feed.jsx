import Share from "../Share/Share"
import Post from "../Post/Post"
import "./Feed.css"

export default function Feed() {
    return (
        <div className="Feed">
            <div className="FeedWrapper">
                <Share />
                <Post />
            </div>
        </div>
    )
}