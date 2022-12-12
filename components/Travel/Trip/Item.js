import Link from "next/link"

const TripServiceItem=(props)=>{
return(
<>
<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
<div className="trip-service-box text-center">
    <div className="trip-service-icon">
        <img src={props.icon} alt=""/>
    </div>
    <div className="trip-service-content">
        <h2><Link href="/"><a>{props.name}</a></Link></h2>
        <p>{props.desc}</p>
    </div>
</div>
</div>
</>
)
}
export default TripServiceItem