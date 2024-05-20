import "./CreateCrewPage.scss";
import RootLayout from "../../layout/RootLayout";
import PageTitle from "../../components/pageTitle/PageTitle";
import PageStepsIndicator from "../../components/pageStepsIndicator/PageStepsIndicator";
import CreateCrewContainer from "../../containers/createCrewContainer/CreateCrewContainer";
import CrewSummaryContainer from "../../containers/crewSummaryContainer/CrewSummaryContainer";

const currentStep = 1;
const agents = ["Web Scrapper 1", "Researcher 2", "Web Scrapper 3", "Web Scrapper 4", "Researcher 5", "Researcher 6", "Researcher 7" ];

const pageContainer = () => (
    <>
        <div className="page-header mb-4">
            <PageTitle title={currentStep === 1 ? "Create Agents" : "Crew Summary"} />
            <PageStepsIndicator currentStep={currentStep} />
        </div>
        {currentStep === 1 ? <CreateCrewContainer agents={agents} /> : <CrewSummaryContainer agents={agents} />}
    </>
);

const CreateCrewPage = () => (
    <RootLayout children={pageContainer()}></RootLayout>
);

export default CreateCrewPage;
