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
    const base64 = "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";
    const setExcelDownload = (base64Data) =>{
        const link = document.createElement('a');
        link.href = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${base64Data}`;
        link.download = 'data.xlsx';
        link.click();
    }

    return (
        <div className={`report-icons-panel d-flex justify-content-end px-4 gap-4 position-absolute ${colSpan}`}>
            {isExcelPresent && <ReportIcon icon={excel} iconName={"Excel"} onClick={()=>setExcelDownload(base64)} />}
            {isYoutubePresent && 
                <>
                    <ReportIcon icon={youtube} iconName={"Youtube"} onClick={() => setYoutubeModalShow(true)}/>
                    <PageModal show={youtubeModalShow} title={CREW_INTERACTION_PAGE.modal.header.video} children={<VideoReport src={"https://www.youtube.com/watch?v=CUs3XjBLwHg"} />} onHide={() => setYoutubeModalShow(false)} />
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
