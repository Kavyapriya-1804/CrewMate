import PageNotFound from "../../assets/images/pageNotFound.webp";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";

var { message } = PAGE_CONSTANTS.ERROR_PAGE;

const ErrorPage = () => (
    <div className="d-flex flex-column col-12 min-vh-100 justify-content-center align-items-center bg-dark text-light">
        <h1 className="">{message.primary}</h1> 
        <h1 className="mb-5">{message.secondary}<a href={message.redirectToPage.link}>{message.redirectToPage.label}</a></h1>
        <div className="">
            <img src={PageNotFound} alt={"Page Not Found"} className={"w-100"} />
        </div>
    </div>
);

export default ErrorPage;
