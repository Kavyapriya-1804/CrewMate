import "./CreatedAgentsList.scss";
import cancel from "../../assets/icons/cancel.png";

const Agent = ({agentName, index, handleAgentClick, handleDeleteAgent}) => (
    <li key={index} className="px-5 py-3 d-flex justify-content-between" onClick={() => handleAgentClick(index)}>
        {agentName}
        <div className="cancel-icon-wrapper" onClick={(event) => handleDeleteAgent(event, index)}>
            <img className="cancel-icon w-100" src={cancel} alt="Remove Agent"/>
        </div>
    </li>
);

const CreatedAgentsList = ({agents, handleAgentClick, handleDeleteAgent}) => (
    <ul className="created-agents-list list-unstyled h-100 overflow-scroll">
        {agents.map((agentName, index) => (
            <Agent key={index} agentName={agentName} index={index} handleAgentClick={handleAgentClick} handleDeleteAgent={handleDeleteAgent}/>
        ))}
    </ul>
);

export default CreatedAgentsList;
