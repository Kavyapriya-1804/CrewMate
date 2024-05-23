import "./CrewSummaryContainer.scss";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";
import next from "../../assets/icons/next.png";
import CrewDetailsCard from "../../components/crewDetailsCard/CrewDetailsCard";
import Button from "../../components/button/Button";
import { submitCrew } from "../../service/CrewService"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../constants/routeConstants";


var {STEP_2} = PAGE_CONSTANTS.CREW_INITIALIZATION_PAGE;
var {formFields} = STEP_2;

const CrewSummaryContainer = ({agents, setCurrentStep, crewName, setCrewName, resetState}) => {
    const [crew,setCrew] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setCrewName(event.target.value);
    };
    
    const goToPrevStep = () => {
        setCurrentStep(1);
    };

    const isKickoffDisabled = () => (
        agents.length === 0 || !crewName || crewName.trim() === ""
    );

    const submitCrewData = async (crewName, agents) => {
        const submitCrewData = {
            crew_name : crewName,
            agents : agents
        }
       const crewData = await submitCrew(submitCrewData).catch((err) => console.log(err));
       setCrew(crewData);
       redirectToCrewInteractionPage(crewData);
       setCrew({});
       resetState();
    }

    const redirectToCrewInteractionPage = (crewData) => {
        navigate(`${ROUTE_CONSTANTS.CREW_PAGE}/${crewData.crew_id}`, {state : { crewName: crewName}})
    }

    return (
        <>
            <section className="page-content crew-summary-container d-flex mt-5">
                <div className="crew-name-form-wrapper col-6 d-flex justify-content-center align-items-center">
                    <form className="crew-name-form col-10">
                        <div className="crew-name-wrapper d-flex flex-column mb-3">
                            <label htmlFor="crew_name">{formFields.crewName.label}</label>
                            <input type="text" className="crew-name" name="crew_name" value={crewName} onChange={handleInputChange} required disabled={agents.length === 0}></input>
                        </div>
                        <div className="crew-name-btn-wrapper mt-5">
                            <Button className={"crew-name-btn primary block"} type={"button"} text={formFields.submitButton} isDisabled={isKickoffDisabled()} onClick={() => submitCrewData(crewName, agents)} />
                        </div>
                    </form>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    {agents.length > 0 && <CrewDetailsCard crewName={crewName} agents={agents}/>}
                </div>
            </section>
            <footer className="d-flex justify-content-center mt-5">
                <div className="col-11 d-flex justify-content-between align-items-center">
                    <Button className={"prev-step-btn-wrapper p-2"}  onClick={goToPrevStep} >
                        <img src={next} alt="Go to previous step" className="prev-step w-100"></img>
                    </Button>
                </div>
            </footer>
        </>
    );
}

export default CrewSummaryContainer;
