import React, { useState } from 'react';
import "./CrewInitializationPage.scss";
import { PAGE_CONSTANTS } from '../../constants/pageConstants';
import RootLayout from "../../layout/RootLayout";
import PageTitle from "../../components/pageTitle/PageTitle";
import PageStepsIndicator from "../../components/pageStepsIndicator/PageStepsIndicator";
import CreateCrewContainer from "../../containers/createCrewContainer/CreateCrewContainer";
import CrewSummaryContainer from "../../containers/crewSummaryContainer/CrewSummaryContainer";

var {STEP_1, STEP_2} = PAGE_CONSTANTS.CREW_INITIALIZATION_PAGE;

const PageWrapper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [crewName, setCrewName] = useState('');
    // const agents = ["Web Scrapper 1", "Researcher 2", "Web Scrapper 3", "Web Scrapper 4", "Researcher 5", "Researcher 6", "Researcher 7"];
    const [agents, setAgents] = useState([]);

    const addAgent = (newAgent) => {
        newAgent = {
            agent_name: newAgent.agent_name || '',
            agent_role: newAgent.agent_role || '',
            agent_goal: newAgent.agent_goal || '',
            agent_backstory: newAgent.agent_backstory || ''
        }
        setAgents([...agents, newAgent]);
    };

    const deleteAgent = (indexToDelete) => {
        setAgents(agents.filter((_, index) => index !== indexToDelete));
    };

    const resetState = () => {
        setAgents([])
        setCrewName('')
    }

    return (
        <>
            <div className="page-header mb-4">
                <PageTitle title={currentStep === 1 ?  STEP_1.pageTitle : STEP_2.pageTitle} />
                <PageStepsIndicator currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </div>
            {currentStep === 1 ? 
                <CreateCrewContainer agents={agents} setCurrentStep={setCurrentStep} addAgent={addAgent} setAgents={setAgents} deleteAgent={deleteAgent} /> 
                : <CrewSummaryContainer resetState={resetState} agents={agents} setCurrentStep={setCurrentStep} crewName={crewName} setCrewName={setCrewName} />
            }
        </>
    );
}

const CrewInitializationPage = () => (
    <RootLayout children={<PageWrapper />}></RootLayout>
);

export default CrewInitializationPage;
