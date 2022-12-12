import Link from "next/link"
import TripServiceItem from "./Trip/Item"

const TripServices=()=>{
return(
<>
<div className="trip-service-area positioning pt-100 pb-76">
<div className="container">
<div className="row align-items-end">
    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
    <div className="trip-section-title">
        <h1>Start Your Vacation with Lots of <span>Services!</span></h1>
    </div>
    </div>
    <div className="col-xxl-7 col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12 mobt-24">
    <div className="trip-service-btn text-lg-end text-md-start text-sm-start">
        <Link href="/"><a>View All Services <i className="bi bi-arrow-right"></i></a></Link>
    </div>
    </div>
</div>
<div className="row mt-50">

    <TripServiceItem
     icon="/assets/images/trip/icon/service-1.svg"
     name="Family Vacations"
     desc="155 Properties"
    />

    <TripServiceItem
     icon="/assets/images/trip/icon/service-2.svg"
     name="Scuba Diving"
     desc="142 Properties"
    />

    <TripServiceItem
     icon="/assets/images/trip/icon/service-3.svg"
     name="Family Vacations"
     desc="122 Properties"
    />

    <TripServiceItem
     icon="/assets/images/trip/icon/service-2.svg"
     name="Family Vacations"
     desc="105 Properties"
    />

</div>
</div>
<h1 className="container-text trip-service-text">Services</h1>
</div>  
</>
)
}
export default TripServices