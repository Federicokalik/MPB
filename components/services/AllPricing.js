import { useState } from "react"
import PricingItem from "./pricingitem"

const ServicePricing=()=>{
const [monthly,setMonthly] = useState(false)

return(
<>
<div className="pricing-plan-area mt-100 mb-76">
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize">
            <h1>Pricing <span>Plans</span></h1>
        </div>
    </div>
    <div className="col-xxl-5 col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12 mobt-24">
        <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
            <p>Start connecting with all your team and plan payment for every product as you want. Let’s start your package.</p>
        </div>
    </div>
    <div className="col-xxl-4 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 mobt-24">
        <div className="toggle-btn pricing-plan-toggle">
            <span style={{"marginRight":"30px"}}>Yearly</span>
            <label className="switch">
                <input type="checkbox" id="checbox"
                 onChange={e=>monthly?setMonthly(false):setMonthly(true)}
                />
                <span className="slider round"></span>
            </label>
            <span style={{"marginLeft":"30px"}}>Monthly</span>
        </div>
    </div>
</div>
<div className="row mt-50">

  <PricingItem 
    name="Basic"
    perMonth="$25"
    perYear="$99"
    monthly={monthly}
  />  

  <PricingItem 
    name="Standard"
    perMonth="$60"
    perYear="$159"
    monthly={monthly}
  /> 

  <PricingItem 
    name="Basic"
    perMonth="$89"
    perYear="$279"
    monthly={monthly}
  /> 

  <PricingItem 
    name="Basic"
    perMonth="$100"
    perYear="$399"
    monthly={monthly}
  /> 
    
</div>
</div>
</div>
</>
)
}
export default ServicePricing