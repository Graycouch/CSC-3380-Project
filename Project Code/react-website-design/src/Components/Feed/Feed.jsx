import Share from "../Share/Share"
import Post from "../Post/Post"
import "./Feed.css"
import { Posts } from "../../DummyData"

export default function Feed() {
    return (
        <div className="Feed">
            <div className="FeedWrapper">
                <Share />
                {Posts.map(p => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}