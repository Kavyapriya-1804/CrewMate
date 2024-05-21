import React, { useState } from 'react';
import "./CreateCrewContainer.scss";
import { PAGE_CONSTANTS } from '../../constants/pageConstants';
import next from "../../assets/icons/next.png";
import Button from "../../components/button/Button";
import CreatedAgentsListCard from "../../components/createdAgentsListCard/CreatedAgentsListCard";

var {STEP_1} = PAGE_CONSTANTS.CREW_INITIALIZATION_PAGE;
var {formFields} = STEP_1;

const CreateCrewContainer = ({agents, addAgent, setAgents, deleteAgent, setCurrentStep}) => {
    const [formData, setFormData] = useState({
        agent_name: '',
        agent_role: '',
        agent_goal: '',
        agent_backstory: ''
    });
    const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddAgent = (event) => {
        event.preventDefault();
        if (selectedAgentIndex !== null) {
            // Update existing agent
            const updatedAgents = [...agents];
            updatedAgents[selectedAgentIndex] = { ...formData };
            setAgents(updatedAgents);
        } else {
            // Add new agent
            if (validateFormSubmit()) {
                addAgent(formData);
            }
        }
        resetForm();
    };

    const handleDeleteAgent = (event, index) => {
        event.stopPropagation();
        deleteAgent(index);
        resetForm();
    };

    const goToNextStep = () => {
        setCurrentStep(2);
    };

    const handleAgentClick = (index) => {
        setSelectedAgentIndex(index);
        let selectedAgent = agents[index];
        setFormData({
            agent_name: selectedAgent.agent_name,
            agent_role: selectedAgent.agent_role,
            agent_goal: selectedAgent.agent_goal,
            agent_backstory: selectedAgent.agent_backstory
        });
    };

    const resetForm = () => {
        setSelectedAgentIndex(null);
        setFormData({
            agent_name: '',
            agent_role: '',
            agent_goal: '',
            agent_backstory: ''
        });
    };

    const validateFormSubmit = () => (
        formData.agent_name.trim() && formData.agent_role.trim() && formData.agent_goal.trim() && formData.agent_backstory.trim()
    );

    return (
        <>
            <section className="page-content create-crew-container d-flex">
                <div className="create-agent-form-wrapper col-6 d-flex justify-content-center align-items-center">
                    <form className="create-agent-form col-10" onSubmit={handleAddAgent}>
                        <div className="agent-name-wrapper d-flex flex-column mb-3">
                            <label htmlFor="agent_name">{formFields.agentName.label}</label>
                            <input type="text" className="agent-name" name="agent_name" value={formData.agent_name} onChange={handleChange} required></input>
                        </div>
                        <div className="agent-role-wrapper d-flex flex-column mb-3">
                            <label htmlFor="agent_role">{formFields.agentRole.label}</label>
                            <textarea name="agent_role" value={formData.agent_role} onChange={handleChange} required></textarea>
                        </div>
                        <div className="agent-goal-wrapper d-flex flex-column mb-3">
                            <label htmlFor="agent_goal">{formFields.agentGoal.label}</label>
                            <textarea name="agent_goal" value={formData.agent_goal} onChange={handleChange} required></textarea>
                        </div>
                        <div className="agent-backstory-wrapper d-flex flex-column mb-3">
                            <label htmlFor="agent_backstory">{formFields.agentBackstory.label}</label>
                            <textarea name="agent_backstory" value={formData.agent_backstory} onChange={handleChange} required></textarea>
                        </div>
                        <div className="create-agent-btn-wrapper mt-5">
                            <Button className={"create-agent-btn primary block"} type={"submit"} text={"Create Agent"} isDisabled={!validateFormSubmit()}/>
                        </div>
                    </form>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <CreatedAgentsListCard agents={agents.map(agent => agent.agent_name)} handleAgentClick={handleAgentClick} handleDeleteAgent={handleDeleteAgent}/>
                </div>
            </section>
            <footer className="d-flex justify-content-center">
                <div className="col-11 d-flex justify-content-end">
                    <Button className={"next-step-btn-wrapper p-2"} onClick={goToNextStep}>
                        <img src={next} alt="Go to next step" className="next-step w-100" />
                    </Button>
                </div>
            </footer>
        </>
    );
}

export default CreateCrewContainer;
