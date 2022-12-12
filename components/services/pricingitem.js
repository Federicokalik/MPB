import Link from "next/link"

const PricingItem=(props)=>{

return(
<>
<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
<div className="pricing-plan-wrap">
    <div className="pricing-plan-info d-flex align-items-center">
        <div className="pricing-plan-icon d-flex align-items-center justify-content-center">
            <i className="bi bi-person-bounding-box"></i>
        </div>
        <div className="pricing-plan-compare">
            <p>{props.name}</p>
            {props.monthly?
            <h1>{props.perMonth}</h1>:
            <h1>{props.perYear}</h1>
            }
        </div>
    </div>
    <div className="pricing-plan-details">
        <ul>
            <li>1 Landingzone Asset</li>
            <li>10 Illustration Asset</li>
            <li>10 Template Animation</li>
            <li>15 Icon Asset</li>
            <li>10 Photos Asset</li>
        </ul>
        <div className="pricing-plan-btn-wrap">
            <Link href=""><a>Buy Package</a></Link>
        </div>
    </div>
</div>
</div>
</>
)
}
export default PricingItem