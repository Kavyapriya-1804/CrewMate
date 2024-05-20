import "./CrewDetailsCard.scss";
import crew from "../../assets/icons/crew.png";
import ReportsIcons from "../reportsIcons/ReportsIcons";
import CrewAgentsList from "../crewAgentsList/CrewAgentsList";

const CrewDetailsCard = ({crewName, agents, isReportSectionPresent=false}) => (
    <div className="crew-details-wrapper card align-items-center col-8">
        <div className="crew-icon-wrapper col-12">
            <img src={crew} className="card-img-top crew-icon w-100" alt="Crew" />
            <h5 className="card-title crew-name text-center">{crewName}</h5>
        </div>
        <div className="card-body mt-5 border border-bottom-0 border-start-0 border-end-0 col-12 d-flex flex-column align-items-center">
            <CrewAgentsList agents={agents} />
            {isReportSectionPresent && <ReportsIcons />}
        </div>
    </div>
);

export default CrewDetailsCard;
