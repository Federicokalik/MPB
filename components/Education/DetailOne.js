import Link from "next/link"
import EducationDetailTwo from "../../constant/education/DetailTwo"

const EducationDetailOne=()=>{
return(
<>
<div className="edu-success-style">
<div className="container">
<div className="row justify-content-between align-items-center gy-4">
    <div className="col-lg-6">
        <div className="success-student-image position-relative">
            <img src={EducationDetailTwo.CoverImg} alt="" className="img-fluid "/>
            <Link href={EducationDetailTwo.VideoURL}>
            <a target="_blank" className="success-play-btn wow animated zoomIn popup-youtube" data-wow-duration="2000ms">
                <i className="bi bi-play-fill"></i>
            </a>
            </Link>
            <div className="vactor-shape1 position-absolute d-none d-lg-block wow fadeInLeft animated" data-wow-duration="2000ms">
                <img src="assets/images/education/shapes/edu-vactor1.svg" alt=""/>
            </div>
        </div>
    </div>
    <div className="col-xxl-4 col-lg-6 col-md-8">
        <div className="edu-success-contents">
            <h2 className="edu-section-title text-start">
               {EducationDetailTwo.Title}
            </h2>
            <p>{EducationDetailTwo.subTitle}</p>
            <div className="success-btn">
                <Link href="/"><a className="edu-btn-fill">{EducationDetailTwo.actionBtn}</a></Link>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</>
)
}
export default EducationDetailOne