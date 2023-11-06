async function getReportNo(reportNo) {
    try {
        const REPORT_URL = 'http://localhost:8080/api/reports/'
        const response = await fetch(REPORT_URL + reportNo)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export default getReportNo