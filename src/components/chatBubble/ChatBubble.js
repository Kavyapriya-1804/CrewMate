import "./ChatBubble.scss";
import crewLogo from "../../assets/logos/crewMate_logo.png";
import woman from "../../assets/icons/woman.png";

const ChatBubble = ({interaction, ROLE, isUser}) => {
    return (
        <div className={`chat-bubble-wrapper d-flex col-12 position-relative mb-5 ${ROLE}`}>
            <div className="profile-pic-wrapper position-absolute">
                <img src={isUser ? woman : crewLogo} alt={ROLE} className="w-100"/>
            </div>
            <div className="chat-bubble col-8 p-3">
                {!isUser ?
                        <p className="chat-text my-1">{interaction.message}</p>
                        : 
                        <>{interaction.message}</>
                }
            </div>
        </div>
    );
};

export default ChatBubble;
