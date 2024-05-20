import "./CreatedAgentsListCard.scss";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";
import CreatedAgentsList from "../createdAgentsList/CreatedAgentsList";
import plus from "../../assets/icons/plus.png";

const EmptyListFallback = () => (
    <div className="col-12 h-75 d-flex align-items-center justify-content-center">
        <div className="empty-list-fallback-wrapper">
            <img src={plus} alt="Add an agent" className="w-100" />
        </div>
    </div>
);    

var {STEP_1} = PAGE_CONSTANTS.CREW_INITIALIZATION_PAGE;
var {createdAgents} = STEP_1;

const CreatedAgentsListCard = ({agents, handleAgentClick, handleDeleteAgent}) => (
    <div className="created-agents-wrapper col-10 h-75 overflow-hidden">
        <h3 className="created-agents-title py-3 text-center">{createdAgents.title}</h3>
        {agents.length > 0 ?
            <CreatedAgentsList agents={agents} handleAgentClick={handleAgentClick} handleDeleteAgent={handleDeleteAgent} />
            : <EmptyListFallback />
        }
    </div>
);

export default CreatedAgentsListCard;
