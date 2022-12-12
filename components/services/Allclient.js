import ClientItem from "./clientItem"

const AllClient=()=>{
return(
<>
<div className="about-testimonial-area pt-100">
<div className="container">
<div className="row align-items-center">
<div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
    <div className="hrdd-section-title text-capitalize">
        <h1>What  our <span>client</span> say</h1>
    </div>
</div>
<div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
    <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
        <p>Trusted by over 40,000 worldwide customer since 2010. It’s awesome service. Land from day very fill that midst stars one dominion.</p>
    </div>
</div>
</div>
<div className="row pt-50">
<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="inner-slide-wrap">

    <ClientItem />
    <ClientItem />
    <ClientItem />
    <ClientItem />
        
    </div>
</div>
</div>
</div>
</div>
</>
)
}
export default AllClient