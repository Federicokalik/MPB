import Link from "next/link"

const JobSubsribe=()=>{
return(
<>
<div className="subscribe-area pt-100 pb-100">
<div className="container">
<div className="row">
<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="subscribe-wrap">
    <div className="row align-items-center">
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="ch-section-title subscribe-title">
                <h1><span className="title-mark title-mark-section">Subscribe</span> Now for Get Special Features!</h1>
            </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50 wow animate flipInX" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="subscribe-btn-wrap text-lg-end">
                <Link href="/"><a className="common-btn btn-style-1">Subscribe Now</a></Link>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
<img className="shape h1-subscribe-dot" src="/assets/images/shape/h-1-subscribe.png" alt=""/>
</div>
</>
)
}
export default JobSubsribe