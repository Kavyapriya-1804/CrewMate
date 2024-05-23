import "./ChatSectionContainer.scss";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";
import ChatBubble from "../../components/chatBubble/ChatBubble";
import ReportIconsPanel from "../../components/reportIconsPanel/ReportIconsPanel";
import loader from "../../assets/images/loader.webp";

const { ROLES } = PAGE_CONSTANTS.CREW_INTERACTION_PAGE;

const FinalReport = ({type, content, classNames="", colSpan=""}) => (
    <div className="col-12 d-flex justify-content-center position-relative">
        <div className={`final-report-section ${classNames} ${colSpan}`} >
            {content}
        </div>
        <ReportIconsPanel isExcelPresent={true} isYoutubePresent={true} isChartPresent={true} isCalendarPresent={true} colSpan={colSpan} />
    </div>
);

const ChatSectionContainer = ({interactions, agents=[], hasFinalSummary}) => {
    return (
    <>
        {interactions.map((interaction, index)=> {
            const isUser = interaction.role === ROLES.user.name;
            const ROLE = isUser ? ROLES.user.className : ROLES.crewMate.className;

            return interaction.message !== "" ? 
                    <ChatBubble key={index} interaction={interaction} ROLE={ROLE} isUser={isUser} /> 
                    : <></>
        })}
        {hasFinalSummary && interactions[1].message === "" &&
            <div className="d-flex col-12 align-items-center justify-content-center pb-5">
                <div className="loader-wrapper">
                    <img src={loader} alt="Loader" className="w-100" />
                </div>
            </div>
        }
        {hasFinalSummary && interactions[1].message !== "" &&
            <div className="final-report-section-wrapper col-12 pb-5">
                <FinalReport type={""} content={""} classNames={""} colSpan={"col-8"} />
            </div>
        }
    </>
    );
}

export default ChatSectionContainer;
