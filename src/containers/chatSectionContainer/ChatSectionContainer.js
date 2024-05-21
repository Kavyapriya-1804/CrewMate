import "./ChatSectionContainer.scss";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";
import ChatBubble from "../../components/chatBubble/ChatBubble";
import ReportIconsPanel from "../../components/reportIconsPanel/ReportIconsPanel";

const { ROLES } = PAGE_CONSTANTS.CREW_INTERACTION_PAGE;

const FinalReport = ({type, content, classNames="", colSpan=""}) => (
    <div className="col-12 d-flex justify-content-center position-relative">
        <div className={`final-report-section ${classNames} ${colSpan}`} >
            {content}
        </div>
        <ReportIconsPanel isExcelPresent={true} isYoutubePresent={true} isChartPresent={true} isCalendarPresent={true} colSpan={colSpan} />
    </div>
);

const ChatSectionContainer = ({interactions, hasFinalSummary}) => (
    <>
        {interactions.map((interaction, index)=> {
            const isUser = interaction.role === ROLES.user.name;
            const ROLE = isUser ? ROLES.user.className : ROLES.crewMate.className;

            return <ChatBubble key={index} interaction={interaction} ROLE={ROLE} isUser={isUser} /> 
        })}
        {hasFinalSummary && 
            <div className="final-report-section-wrapper col-12 pb-5">
                <FinalReport type={""} content={""} classNames={""} colSpan={"col-8"} />
            </div>
        }
    </>
);

export default ChatSectionContainer;
