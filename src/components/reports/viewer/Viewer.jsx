import './Viewer.css'
import {useLoaderData} from "react-router-dom";
import Header from "./header/Header.jsx";

function Viewer() {
    const data = useLoaderData()
    const report = data.payload
    const header = {
        title: report.report_title,
        no: report.report_no,
        date: report.report_date,
        responsible: report.responsible,
        issuers: report.issuers,
        po: report.po
    }
    return (
        <div>
            <Header header={header}/>
            <div className={'vw_body'}>
                {JSON.stringify(report)}
            </div>
        </div>
    )
}

export default Viewer