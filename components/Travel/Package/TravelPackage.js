import TravelPackageItem from "./Package/Item"

const TravelPackage=()=>{
return(
<>
<div className="tri-package-style positioning overflow-hidden">
<div className="container">
<div className="row">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="trip-section-title text-center">
        <h1>Our Upcoming <br/> Tour <span>Package</span></h1>
    </div>
    </div>
</div>
<div className="row align-items-end gy-4 " style={{"marginTop":"28px"}}>

<TravelPackageItem
 image="assets/images/trip/packages/tri-p1.png"
 price="$690"
 destination="London"
 TravelTime="4h - 5h"
/>
<TravelPackageItem
 image="assets/images/trip/packages/tri-p2.png"
 price="$690"
 destination="New York"
 TravelTime="10h - 12h"
 featured={true}
/>
<TravelPackageItem
 image="assets/images/trip/packages/tri-p3.png"
 price="$499"
 destination="Dubai"
 TravelTime="3h - 4h"
/>

</div>

<div className="row justify-content-center">
<div className="col-lg-6 text-center">
<a href="services.html" className="tri-btn-fill mt-3">View All <i className="bi bi-arrow-right"></i></a>
</div>
</div>
</div>
<h1 className="container-text package-text">Package</h1>
</div>
</>
)
}
export default TravelPackage