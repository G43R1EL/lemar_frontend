import './Header.css'

// eslint-disable-next-line react/prop-types
function Header({header}) {
    return (
        <div className={'vw_header'}>
            <div className={'vw_header_logo'}>
                <img src={''} alt={'LOGO'} />
            </div>
            <div className={'vw_header_title'}>
                <h2>{header.title}</h2>
            </div>
            <div className={'vw_header_info'}>
                <fieldset>
                    <label>Informe No.:</label>
                    <span>{header.no}</span>
                </fieldset>
                <fieldset className={'col'}>
                    <label>Responsables:</label>
                    {
                        header.responsible.map((resp, idx)=>{
                            return <span key={idx}>{resp}</span>
                        })
                    }
                </fieldset>
                <fieldset>
                    <label>OC:</label>
                    <span>{header.po}</span>
                </fieldset>
                <fieldset>
                    <label>Fecha:</label>
                    <span>{(new Date(header.date)).toLocaleDateString()}</span>
                </fieldset>
            </div>
        </div>
    )
}

export default Header