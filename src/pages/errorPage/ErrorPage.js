import PageNotFound from "../../assets/images/pageNotFound.webp";
import { ROUTE_CONSTANTS } from "../../constants/routeConstants";

const ErrorPage = () => (
    <div className="d-flex flex-column col-12 min-vh-100 justify-content-center align-items-center bg-dark text-light">
        <h1 className="">OOPS ! Wrong Route :(</h1> 
        <h1 className="mb-5">Head back to <a href={ROUTE_CONSTANTS.HOME}>HOME</a></h1>
        <div className="">
            <img src={PageNotFound} alt="Page Not Found" />
        </div>
    </div>
);

export default ErrorPage;
