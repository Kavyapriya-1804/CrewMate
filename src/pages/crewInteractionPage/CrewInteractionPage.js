import RootLayout from "../../layout/RootLayout";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";
import PageTitle from "../../components/pageTitle/PageTitle";
import CrewInteractionContainer from "../../containers/crewInteractionContainer/CrewInteractionContainer";

var { CREW_INTERACTION_PAGE } = PAGE_CONSTANTS;

const agents = [
    {
        agent_id: "13333",
        agent_name: "Web scrapper",
        agent_task: ""
    },
    {
        agent_id: "2",
        agent_name: "Researcher",
        agent_task: ""
    }
];

const PageWrapper = () => {
    return (
        <>
            <div className="page-header mb-4">
                <PageTitle title={CREW_INTERACTION_PAGE.pageTitle} />
            </div>
            <CrewInteractionContainer crewId={1} agents={agents} />
        </>
    );
}

const CrewInteractionPage = () => (
    <RootLayout children={<PageWrapper />}></RootLayout>
);

export default CrewInteractionPage;