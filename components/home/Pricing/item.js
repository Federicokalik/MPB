
const PricingItem=(props)=>{
return(
<>
<div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 wow animate ${props.animation}`} data-wow-delay="400ms" data-wow-duration="1500ms">
<div className={`price-content-box ${props.premium?'design-2':''}`}>
    <div className="price-top-content">
        <h2>{props.name}</h2>
        {props.priceMonthly?
        <h1>{props.permonth} <span>/ month</span></h1>:
        <h1>{props.peryear} <span>/ year</span></h1>
        }
    </div>
    <div className="price-list">
        <ul>
            <li><i className="bi bi-check-lg"></i>Access to editing all blocks</li>
            <li><i className="bi bi-check-lg"></i>Editing blocks together</li>
            <li><i className="bi bi-check-lg"></i>Access to all premium icons</li>
            <li><i className="bi bi-check-lg"></i>A dedicated domain</li>
        </ul>
    </div>
    <div className="pricing-btn-wrap">
        <a className={`pricing-btn ${props.premium?'style-2':''}`}>Try for Free</a>
    </div>
</div>
</div>
</>
)
}
export default PricingItem