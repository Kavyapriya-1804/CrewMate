import "./CrewDetailsCard.scss";
import crew from "../../assets/icons/crew.png";
import { useNavigate } from "react-router-dom";
import ReportsIcons from "../reportsIcons/ReportsIcons";
import CrewAgentsList from "../crewAgentsList/CrewAgentsList";
import chat from "../../assets/icons/chat.png";
import Button from "../../components/button/Button";
import { ROUTE_CONSTANTS } from "../../constants/routeConstants";

const CrewDetailsCard = ({
  crewName,
  agents,
  isReportSectionPresent = false,
  isHome = false,
  id,
}) => {
  const navigate = useNavigate();

  const redirectToCrewInteraction = (id) => {
    navigate(`${ROUTE_CONSTANTS.CREW_PAGE}/${id}`);
  };
  return (
    <div className="crew-details-wrapper card align-items-center col-8">
      <Button
        className={"next-step-btn-wrapper p-2 mx-3 mt-3 chat"}
        onClick={() => redirectToCrewInteraction(id)}
      >
        <img src={chat} alt="crew interaction" className="w-100" />
      </Button>
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
};

export default CrewDetailsCard;
