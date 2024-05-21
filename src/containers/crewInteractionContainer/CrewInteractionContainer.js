import "./CrewInteractionContainer.scss";
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

const CrewInteractionContainer = () => (
    <>
        <section className="page-content crew-interaction-container d-flex justify-content-center overflow-scroll">
            <InteractionsContainer interactions={interactions} hasFinalSummary={true} />
        </section>
        <footer className="d-flex justify-content-center">
            <div className="d-flex col-4 justify-content-between mt-4">
                <Button className={"primary block"} text={CREW_INTERACTION_PAGE.buttons.assignTask.label}/>
                <Button className={"primary-reverse block"} text={CREW_INTERACTION_PAGE.buttons.kickoff.label} isDisabled={interactions.length < 1} />
            </div>
        </footer>
    </>
);

export default CrewInteractionContainer;
