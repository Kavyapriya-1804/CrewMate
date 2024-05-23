import React from "react";
import "./ReportIconsPanel.scss";
import Image from "../../components/image/Image";
import excel from "../../assets/icons/excel.png";
import youtube from "../../assets/icons/youtube.png";
import graph from "../../assets/icons/graph.png";
import calendar from "../../assets/icons/calendar.png";
import Charts from "../../pages/Charts"

import PageModal from "../modal/PageModal";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";

var {CREW_INTERACTION_PAGE} = PAGE_CONSTANTS;

const VideoReport = ({src, title="YouTube video player"}) => {
    const urlObj = new URL(src);
    const videoId = urlObj.searchParams.get('v');

    return(
        <div>
            <iframe width="100%" height="400px" 
                    src={"https://www.youtube.com/embed/"+videoId}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    );
}

const ReportIcon = ({icon="", iconName="Alt text", classNames="", onClick}) => {
    return (
        <>
            <div className="report-icon-wrapper" onClick={onClick}>
                <Image src={icon} alt={iconName} classNames={classNames}/>
            </div>
        </>
    );
}

const ReportIconsPanel = ({isExcelPresent=false, isYoutubePresent=false, isChartPresent=false, isCalendarPresent=false, colSpan}) => {
    const [youtubeModalShow, setYoutubeModalShow] = React.useState(false);
    const [chartModalShow, setChartModalShow] = React.useState(false);

    return (
        <div className={`report-icons-panel d-flex justify-content-end px-4 gap-4 position-absolute ${colSpan}`}>
            {isExcelPresent && <ReportIcon icon={excel} iconName={"Excel"} />}
            {isYoutubePresent && 
                <>
                    <ReportIcon icon={youtube} iconName={"Youtube"} onClick={() => setYoutubeModalShow(true)}/>
                    <PageModal show={youtubeModalShow} title={CREW_INTERACTION_PAGE.modal.header.video} children={<VideoReport src={"https://www.youtube.com/watch?v=JkPTbWSnU30"} />} onHide={() => setYoutubeModalShow(false)} />
                </>
            }
            {isChartPresent && 
                <>
                    <ReportIcon icon={graph} iconName={"Graph"} onClick={() => setChartModalShow(true)}/>
                    <PageModal show={chartModalShow} title={CREW_INTERACTION_PAGE.modal.header.reportAnalysisChart} children={<Charts data={""} />} onHide={() => setChartModalShow(false)} />
                </>
            }
            {isCalendarPresent && <ReportIcon icon={calendar} iconName={"Calendar"} />}
        </div>
    );
}

export default ReportIconsPanel;
