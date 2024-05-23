import React from "react";
import "./CrewInteractionContainer.scss";
import PageModal from "../../components/modal/PageModal";
import InteractionsContainer from "../interactionsContainer/InteractionsContainer";
import Button from "../../components/button/Button";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";

var {CREW_INTERACTION_PAGE} = PAGE_CONSTANTS;

const interactions = [
    {
        role : "crewMate",
        message : "Hi, I'm Chitti the Robot. Speed 1 terahertz, memory 1 zigabyte. Hi, I'm Chitti the Robot. Speed 1 terahertz, memory 1 zigabyte. Hi, I'm Chitti the Robot. Speed 1 terahertz, memory 1 zigabyte."
    },{
        role : "user",
        message : "Don't trouble the trouble. If you trouble the trouble, the trouble troubles you. I am not the trouble. I am the truth."
    },{
        role : "crewMate",
        message : "Hi, I'm Chitti the Robot. Speed 1 terahertz, memory 1 zigabyte."
    },{
        role : "crewMate",
        message : "Hi, I'm Chitti the Robot. Speed 1 terahertz, memory 1 zigabyte."
    },{
        role : "user",
        message : "Don't trouble the trouble. If you trouble the trouble, the trouble troubles you. I am not the trouble. I am the truth."
    },{
        role : "crewMate",
        message : "Hi, I'm Chitti the Robot. Speed 1 terahertz, memory 1 zigabyte."
    }
];

const agents = [
    {
        agent_id: "1",
        agent_name: "Web scrapper",
        agent_task: ""
    },
    {
        agent_id: "2",
        agent_name: "Researcher",
        agent_task: ""
    },
    {
        agent_id: "3",
        agent_name: "Consultant",
        agent_task: ""
    },
    {
        agent_id: "4",
        agent_name: "Web scrapper",
        agent_task: ""
    },
    {
        agent_id: "5",
        agent_name: "Researcher",
        agent_task: ""
    },
    {
        agent_id: "6",
        agent_name: "Consultant",
        agent_task: ""
    },
    {
        agent_id: "7",
        agent_name: "Web scrapper",
        agent_task: ""
    },
    {
        agent_id: "8",
        agent_name: "Researcher",
        agent_task: ""
    },
    {
        agent_id: "9",
        agent_name: "Consultant",
        agent_task: ""
    }
];

const AgentTasks = ({agents, crewId}) => (
    <form className="agent-task-inputs-wrapper d-flex flex-column align-items-center">
        {agents && agents.map((agent, index) => (
            <div className="d-flex flex-column col-12 mb-4" key={index}>
                <label htmlFor="agent_task">{agent.agent_name}</label>
                <input type="text" className="agent-task mt-3 ps-3" name="agent_task" id={agent.agent_id} required/>
            </div>
        ))}
        <input type="hidden" value={crewId} />
        <Button type={"submit"} className={"primary-reverse block my-2 text-uppercase"} text={CREW_INTERACTION_PAGE.buttons.kickoff.label} />
    </form>
); 


const CrewInteractionContainer = ({crewId}) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <>
        <section className="page-content crew-interaction-container d-flex justify-content-center overflow-scroll">
            <InteractionsContainer interactions={interactions} hasFinalSummary={true} />
        </section>
        <footer className="d-flex justify-content-center">
            <div className="d-flex col-4 justify-content-between mt-4">
                <Button className={"primary block"} text={CREW_INTERACTION_PAGE.buttons.assignTask.label} onClick={() => setModalShow(true)}/>
                <Button className={"primary-reverse block"} text={CREW_INTERACTION_PAGE.buttons.kickoff.label} isDisabled={interactions.length < 1} />
            </div>
        </footer>
        <PageModal show={modalShow} title={CREW_INTERACTION_PAGE.modal.header.assignTasks} children={<AgentTasks agents={agents} crewId={crewId}/> } onHide={() => setModalShow(false)} />
    </>);
}

export default CrewInteractionContainer;
