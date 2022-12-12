import Link from "next/link"
import HomeDetailOne from "../../../constant/home/DetailOne"

const DetailRight=()=>{



return(
<>
<div className="col-xxl-5 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 mobt-50">
    <div className="hrdd-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
        <h1 dangerouslySetInnerHTML={{__html: HomeDetailOne.Title}}></h1>
    </div>
    <div className="everything-info">
        <ul>
            <li className="wow animate fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">{HomeDetailOne.Feature1} <Link href="/"><a><i className="bi bi-arrow-right"></i></a></Link></li>
            <li className="wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">{HomeDetailOne.Feature2} <Link href="/"><a><i className="bi bi-arrow-right"></i></a></Link></li>
            <li className="wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">{HomeDetailOne.Feature3} <Link href="/"><a><i className="bi bi-arrow-right"></i></a></Link></li>
            <li className="wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">{HomeDetailOne.Feature4} <Link href="/"><a><i className="bi bi-arrow-right"></i></a></Link></li>
        </ul>
    </div>
    <div className="hrrd-everything-btn-wrap wow animate fadeInUp" data-wow-delay="450ms" data-wow-duration="1500ms">
        <Link href="/"><a>{HomeDetailOne.ActionBtn}</a></Link>
    </div>
</div>
</>
)
}
export default DetailRight