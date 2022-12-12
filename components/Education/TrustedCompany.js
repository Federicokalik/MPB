import TrustedCompanList from "./TrustedCompany/Item"

const TrustedCompany=()=>{
return(
<>
<div className="edu-client-logo-style">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-5">
            <h2 className="edu-section-title text-center">Trusted Companies</h2>
        </div>
    </div>
    <div className="edu-client-logo-row mt-5">

       <TrustedCompanList 
        img="/assets/images/education/client-logo/airbnb.png"
       /> 
       <TrustedCompanList 
        img="/assets/images/education/client-logo/airbnb.png"
       /> 
       <TrustedCompanList 
        img="/assets/images/education/client-logo/airbnb.png"
       /> 
       <TrustedCompanList 
        img="/assets/images/education/client-logo/airbnb.png"
       /> 
       <TrustedCompanList 
        img="/assets/images/education/client-logo/airbnb.png"
       /> 
        
    </div>
</div>
</div>
</>
)
}
export default TrustedCompany