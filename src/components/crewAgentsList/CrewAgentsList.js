import "./CrewAgentsList.scss";
import agent from "../../assets/icons/agent.png";

const Agent = ({agentName, index}) => (
    <li key={index} className="d-flex align-items-center py-1">
        <div className="agent-icon-wrapper">
            <img src={agent} alt="Agent" className="w-100" />
        </div>
        <p className="mb-0 ms-2 agent-name">{agentName}</p>
    </li>
);

const CrewAgentsList = ({agents}) => {
    return(
        <ul className="card-text list-unstyled px-3 overflow-scroll">
            {agents && agents.map((agent, index) => (
                <Agent key={index} agentName={agent.agent_name} index={index} />
            ))}
        </ul>
    );
}

export default CrewAgentsList;
