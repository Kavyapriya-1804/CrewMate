import RootLayout from "../../layout/RootLayout";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";
import PageTitle from "../../components/pageTitle/PageTitle";
import CrewInteractionContainer from "../../containers/crewInteractionContainer/CrewInteractionContainer";

var { CREW_INTERACTION_PAGE } = PAGE_CONSTANTS;

const PageWrapper = () => {
    return (
        <>
            <div className="page-header mb-4">
                <PageTitle title={CREW_INTERACTION_PAGE.pageTitle} />
            </div>
            <CrewInteractionContainer />
        </>
    );
}

const CrewInteractionPage = () => (
    <RootLayout children={<PageWrapper />}></RootLayout>
);

export default CrewInteractionPage;