import {useState, useEffect} from "react";
import "./CrewInteractionContainer.scss";
import FormModal from "../../components/formModal/FormModal";
import InteractionsContainer from "../interactionsContainer/InteractionsContainer";
import Button from "../../components/button/Button";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";

var {CREW_INTERACTION_PAGE} = PAGE_CONSTANTS;

var interactions = [
    {
        role : "crewMate",
        message : "Hi ! Welcome to CrewMate. Seems like you have built a great Crew! Kickoff the crew with your tasks now !"
    },{
        role : "user",
        message : ""
    },{
        role : "crewMate",
        message : ""
    }
];

const AgentTaskLines = ({message}) => (
    <p className="chat-text my-1">{message}</p>
);

const AgentTaskLinesList = ({agentTaskData}) => (
    <>
        {agentTaskData.map((agent, index) => <AgentTaskLines key={index} message={`${index + 1}. ${agent.agent_name} - ${agent.agent_task}`}/>)}
    </>
)

const CrewInteractionContainer = ({crewId, agents}) => {
    const [modalShow, setModalShow] = useState(false);
    const [agentTaskData, setAgentTaskData] = useState([]);

    useEffect(()=>{
        interactions[1].message = <AgentTaskLinesList agentTaskData={agentTaskData} />;
        interactions[2].message = "Enjoy the animation while the intelligent system is spinning up some impactful work for you !"
        setModalShow(false);
    }, [agentTaskData]);


    return (
    <>
        <section className="page-content crew-interaction-container d-flex justify-content-center overflow-scroll">
            <InteractionsContainer interactions={interactions} agents={agents} hasFinalSummary={true} />
        </section>
        <footer className="d-flex justify-content-center">
            <div className="d-flex col-4 justify-content-between mt-4">
                <Button className={"primary block"} text={CREW_INTERACTION_PAGE.buttons.assignTask.label} onClick={() => setModalShow(true)}/>
                <Button className={"primary-reverse block"} text={CREW_INTERACTION_PAGE.buttons.kickoff.label} isDisabled={interactions.length < 1} />
            </div>
        </footer>
        <FormModal show={modalShow} title={CREW_INTERACTION_PAGE.modal.header.assignTasks} agents={agents} crewId={crewId} onHide={() => setModalShow(false)} setAgentTaskData={setAgentTaskData} />
    </>);
}

export default CrewInteractionContainer;
