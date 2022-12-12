import Link from "next/link"
import serviceDetail from "../../constant/services/serviceDetail"

const SolutionArea=()=>{
return(
<>
<div className="solutions-area positioning pb-100">
<div className="container">
<div className="row justify-content-between align-items-center">
<div className="col-xxl-4 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="hrdd-section-title text-capitalize wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
        <h1 dangerouslySetInnerHTML={{__html: serviceDetail.Title}}></h1>
    </div>
    <div className="collaborate-info">
        <p>{serviceDetail.subTitle}</p>
    </div>
    <div className="solutions-btn-wrap d-xl-flex align-items-center justify-content-xl-between g-1 wow animate fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
        <Link href="/"><a className="common-btn btn-hrrd-1">{serviceDetail.btnTextOne}</a></Link>
        <Link href="/"><a className="common-btn btn-hrrd-2 popup-youtube"><i className="bi bi-play-circle-fill"></i>{serviceDetail.btnTextTwo}</a></Link>
    </div>
</div>
<div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 mobt-50">
    <div className="collaborate-img-wrap">
        <img src={serviceDetail.coverImage} alt=""/>
        <div className="engagement-cart">
            <img src="assets/images/engagement-cart.png" alt=""/>
        </div>
        <div className="testimonial-cart">
            <div className="testimonial-cart-people">
                <h3>Jenifar Goz</h3>
                <h6>CEO, Xavale</h6>
            </div>
            <p>Everyone please read these condition ...</p>
            <i className="bx bxs-quote-right"></i>
        </div>
    </div>
</div>
</div> 
</div>
</div>
</>
)
}
export default SolutionArea