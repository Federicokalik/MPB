import HomeConstantTwo from "../../../constant/home/DetailTwo"
import Link from "next/link"

const DetailTwoText=()=>{
return(
<>
<div className="col-xxl-4 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="hrdd-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
    <h1 dangerouslySetInnerHTML={{__html: HomeConstantTwo.Title}}></h1>
</div>
<div className="collaborate-info">
    <p>{HomeConstantTwo.desc}</p>
    <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
            <div className="collaborate-info-list">
                <p><i className="bi bi-check"></i> {HomeConstantTwo.Fetured1}</p>
            </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="collaborate-info-list">
                <p><i className="bi bi-check"></i> {HomeConstantTwo.Fetured2}</p>
            </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="collaborate-info-list">
                <p><i className="bi bi-check"></i> {HomeConstantTwo.Fetured3}</p>
            </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="collaborate-info-list">
                <p><i className="bi bi-check"></i> {HomeConstantTwo.Fetured4}</p>
            </div>
        </div>
    </div>
</div>
<div className="hrrd-collaborate-btn-wrap wow animate fadeInUp" data-wow-delay="45ms" data-wow-duration="1500ms">
    <Link href="/"><a className="common-btn btn-hrrd-1">{HomeConstantTwo.ActionBtn}</a></Link>
</div>
</div>
</>
)
}
export default DetailTwoText