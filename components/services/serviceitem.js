import Link from "next/link"

const ServiceItem=(props)=>{
return(
<>
<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
    <div className="all-services-box text-center">
        <div className="all-services-icon">
        <i className={props.Icon}></i>
        </div>
        <div className="all-services-content">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <Link href="/"><a>{props.actionBtn}<i className="bi bi-arrow-right-short"></i></a></Link>
        </div>
    </div>
</div>
</>
)
}
export default ServiceItem