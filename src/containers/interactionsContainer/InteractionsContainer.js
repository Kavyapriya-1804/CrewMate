import "./InteractionsContainer.scss";
import ChatSectionContainer from "../chatSectionContainer/ChatSectionContainer";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";

const { CREW_INTERACTION_PAGE } = PAGE_CONSTANTS;

const NoInteractionsYetFallback = () => (
  <div className="h-100 d-flex align-items-center justify-content-center">
    <h1>{CREW_INTERACTION_PAGE.noInteractionsYetContainer.message}</h1>
  </div>
);

const InteractionsContainer = ({
  interactions,
  agents,
  hasFinalSummary = false,
  isResultLoading = false,
  reportContent
}) => (
  <section className="col-9">
    {interactions && interactions.length > 0 ? (
      <ChatSectionContainer
        interactions={interactions}
        agents={agents}
        hasFinalSummary={hasFinalSummary}
        isResultLoading={isResultLoading}
        reportContent={reportContent}
      />
    ) : (
      <NoInteractionsYetFallback />
    )}
  </section>
);

export default InteractionsContainer;
