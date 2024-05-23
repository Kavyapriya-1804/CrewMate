import RootLayout from "../../layout/RootLayout";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";
import PageTitle from "../../components/pageTitle/PageTitle";
import CrewInteractionContainer from "../../containers/crewInteractionContainer/CrewInteractionContainer";
import { useLocation } from "react-router-dom";

var { CREW_INTERACTION_PAGE } = PAGE_CONSTANTS;

const agents = [
  {
    agent_id: "13333",
    agent_name: "Worldwide Diseases Analyst",
    agent_task: "",
  },
  {
    agent_id: "2",
    agent_name: "Writer",
    agent_task: "",
  },
];

const PageWrapper = () => {
  const location = useLocation();
  const state = location.state;

  console.log(state);

  return (
    <>
      <div className="page-header mb-4">
        <PageTitle title={ state.crewName} />
      </div>
      <CrewInteractionContainer crewId={state.id} agents={agents} />
    </>
  );
};

const CrewInteractionPage = () => (
  <RootLayout children={<PageWrapper />}></RootLayout>
);

export default CrewInteractionPage;
