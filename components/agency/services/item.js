
const AgencyServiceItem=(props)=>{
return(
<>
<div className="col-lg-4 col-md-6">
<div className="ag-service-card">
    <div className={`service-icon ${props.bg} `}>
        <img src={props.img} alt="" className="img-fluid"/>
    </div>
    <div className="service-info">
        <h4 className="service-title">{props.name}</h4>
        <p>{props.title}</p>
    </div>
</div>
</div>
</>
)
}
export default AgencyServiceItem