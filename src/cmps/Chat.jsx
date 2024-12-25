import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core'
export function Chat({ name, message, timestamp, profilePic}){
    return (
        <section className="chat-container">
            <Link to={`/chat/${name}`}>
                <div className="chat">
                    <Avatar className="chat-image" alt={name}
                        src={profilePic} />
                        <div className="chat-details">
                            <h2> {name} </h2>
                            <p> {message} </p>
                        </div>
                        <p className="chat-timestamps"> {timestamp} </p>
                </div>
            </Link>
        </section>
    )
}