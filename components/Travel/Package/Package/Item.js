
const TravelPackageItem=(props)=>{
return(
<>
<div className="col-lg-4 col-md-6">
<div className={`tri-package-card ${props.featured?'tri-package-featured':''}`}>
        <div className="tri-package-thumb">
            <a href="#">
                <img src={props.image} alt=""/>
            </a>
            <h4 className="tri-package-price">{props.price}</h4>
        </div>
        <div className="tri-package-disc">
            <div className="package-info">
                <div className="location-icon"><i className="bi bi-geo-alt-fill"></i></div>
                <div className="location">
                        <h4><a href="#">{props.destination}</a></h4>
                        <p className="package-duration">{props.TravelTime}</p>
                </div>
            </div>
            <ul className="package-rating d-flex">
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
            </ul>
        </div>
</div>
</div>
</>
)
}
export default TravelPackageItem