import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import "./FormModal.scss";
import cancel from "../../assets/icons/cancel.png";
import Button from "../../components/button/Button";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";

var {CREW_INTERACTION_PAGE} = PAGE_CONSTANTS;

const AgentTasks = ({agents, crewId, setAgentTaskData}) => {

    const [agentTasks, setAgentTasks] = useState(
        agents.reduce((acc, agent) => {
          acc[agent.agent_id] = '';
          return acc;
        }, {})
      );
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setAgentTasks((prevTasks) => ({
          ...prevTasks,
          [id]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formattedData = agents.map(agent => ({
          crew_id : crewId,
          agent_id: agent.agent_id,
          agent_name: agent.agent_name,
          agent_task: agentTasks[agent.agent_id] || ""
        }));
        setAgentTaskData(formattedData);
        // submitAgentTasksForm(formattedData);
      };


    return (
        <form className="agent-task-inputs-wrapper d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            {agents && agents.map((agent, index) => (
                <div className="d-flex flex-column col-12 mb-4" key={index}>
                    <label htmlFor="agent_task">{agent.agent_name}</label>
                    <input type="text" className="agent-task mt-3 ps-3" name="agent_task" id={agent.agent_id} onChange={handleInputChange} required/>
                </div>
            ))}
            <input type="hidden" value={crewId} />
            <Button type={"submit"} className={"primary-reverse block my-2 text-uppercase"} text={CREW_INTERACTION_PAGE.buttons.kickoff.label} />
        </form>
    );
}

const FormModal = (props) => {
  const { title, agents, crewId, setAgentTaskData } = props;

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="align-items-center justify-content-center position-relative" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="col-11 ms-5 text-center">
            {title}
        </Modal.Title>
        <div className="cancel-icon-wrapper position-absolute">
          <img className="cancel-icon w-100" src={cancel} alt="Remove Agent"/>
        </div>
      </Modal.Header>
      <Modal.Body className="px-5 overflow-scroll">
            <AgentTasks agents={agents} crewId={crewId} setAgentTaskData={setAgentTaskData} />
      </Modal.Body>
    </Modal>
  );
}

export default FormModal;
