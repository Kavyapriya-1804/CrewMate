import "./ReportIconsPanel.scss";
import Image from "../../components/image/Image";
import excel from "../../assets/icons/excel.png";
import youtube from "../../assets/icons/youtube.png";
import graph from "../../assets/icons/graph.png";
import calendar from "../../assets/icons/calendar.png";

const handleReportIconClick = () => {

}

const ReportIcon = ({icon="", iconName="Alt text", classNames=""}) => (
    <div className="report-icon-wrapper" onClick={handleReportIconClick}>
        <Image src={icon} alt={iconName} classNames={classNames} />
    </div>
);

const ReportIconsPanel = ({isExcelPresent=false, isYoutubePresent=false, isChartPresent=false, isCalendarPresent=false, colSpan}) => (
    <div className={`report-icons-panel d-flex justify-content-end px-4 gap-4 position-absolute ${colSpan}`}>
        {isExcelPresent && <ReportIcon icon={excel} iconName={"Excel"} />}
        {isYoutubePresent && <ReportIcon icon={youtube} iconName={"Youtube"} />}
        {isChartPresent && <ReportIcon icon={graph} iconName={"Graph"} />}
        {isCalendarPresent && <ReportIcon icon={calendar} iconName={"Calendar"} />}
    </div>
);

export default ReportIconsPanel;
