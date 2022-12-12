import Link from "next/link"

const AroundWorld=()=>{
return(
<>
<div className="around-world-area mt-100">
<div className="container">
<div className="row align-items-center justify-content-between">
    <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="map-img">
            <img src="assets/images/map-1.png" alt=""/>
        </div>
    </div>
    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
        <div className="ch-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1>20k+ Job Seeker Find their Job Around the <span className="title-mark title-mark-section">World</span></h1>
        </div>
        <div className="around-world-content wow animate fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
            <p>Intrinsically disintermediation economically sound process improvements after market positioning. Professionally scale cross functional human capital and extensive technology. Authoritatively e-enable stand-alone initiatives </p>
            <div className="around-world-btn-wrap">
                <Link href="/"><a className="common-btn btn-style-2">Find Your Job</a></Link>
            </div>
        </div>
    </div>
</div>
</div>
<img className="shape around-world-shape" src="/assets/images/shape/around-world-shape.png" alt=""/>
</div>
</>
)
}
export default AroundWorld