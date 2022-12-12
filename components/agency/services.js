import AgencyServiceItem from "./services/item"

const AgencyServices=()=>{
return(
<>
<div className="ag-service-style">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lx-3 col-lg-5">
        <h2 className="ag-section-title">Why Choose
            Agency!</h2>
    </div>
</div>

<div className="row gy-4">

    <AgencyServiceItem 
     bg=""
     img="/assets/images/agency/icons/3d-design.svg"
     name="Design"
     title="Distinctively expedite real-time 'outside the box' thinking whereas resource maximizing. Completely reinvent extensive e-tailers via"
    />

    <AgencyServiceItem 
     bg="bg-v2"
     img="/assets/images/agency/icons/web-development.svg"
     name="Development"
     title="Distinctively expedite real-time 'outside the box' thinking whereas resource maximizing. Completely reinvent extensive e-tailers via"
    />

    <AgencyServiceItem 
     bg="bg-v3"
     img="/assets/images/agency/icons/megaphone.svg"
     name="Marketing"
     title="Distinctively expedite real-time 'outside the box' thinking whereas resource maximizing. Completely reinvent extensive e-tailers via"
    />

</div>
</div>
</div>
</>
)
}
export default AgencyServices