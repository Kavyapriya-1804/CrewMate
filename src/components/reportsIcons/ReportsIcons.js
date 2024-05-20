import "./ReportsIcons.scss";
import excel from "../../assets/icons/excel.png";
import youtube from "../../assets/icons/youtube.png";
import graph from "../../assets/icons/graph.png";
import calendar from "../../assets/icons/calendar.png";

const ReportIcon = ({icon, iconName}) => (
    <div className="report-icon-wrapper">
        <img src={icon} alt={iconName} className="w-100" />
    </div>
);

const ReportsIcons = () => (
    <div className="reports-icons-wrapper d-flex flex-column align-items-center">
        <div className="row">
            <ReportIcon icon={excel} iconName={"Excel"} />
            <ReportIcon icon={youtube} iconName={"Youtube"} />
        </div>
        <div className="row">
            <ReportIcon icon={graph} iconName={"Graph"} />
            <ReportIcon icon={calendar} iconName={"Calendar"} />
        </div>
    </div>
);

export default ReportsIcons;
