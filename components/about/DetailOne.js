import Link from "next/link"
import AboutDetail from "../../constant/about/AboutDetail"
import { v4 as uuidv4 } from "uuid"

const AboutDetailOne=()=>{
return(
<>
<div className="exceptionally-area positioning pb-100">
<div className="container">
<div className="row justify-content-between align-items-center">
<div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="hrdd-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
        <h1 dangerouslySetInnerHTML={{__html: AboutDetail.Title}}></h1>
    </div>
    <div className="collaborate-info">
        <p>{AboutDetail.short_desc}</p>
        <div className="row">
           {
             AboutDetail.services.map(text=>{
             return (
             <div key={uuidv4()} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="collaborate-info-list">
                    <p><i className="bi bi-check"></i> {text}</p>
                </div>
             </div>
             )
             })  
           }             
        </div>
    </div>
    <div className="hrrd-collaborate-btn-wrap wow animate fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
        <Link href="/"><a className="common-btn btn-hrrd-1">{AboutDetail.actionBtn}</a></Link>
    </div>
</div>
<div className="col-xxl-7 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mobt-50">
    <div className="exceptionally-wrap">
        <img src={AboutDetail.leftImage} alt=""/>
    <div className="exceptionally-content">

      {
       AboutDetail.feature.map(list=>{
        return (
        <div key={uuidv4()} className="exceptionally-content-child">
            <h2>{list.title}</h2>
            <p>{list.short_desc}</p>
        </div>  
        )
       })
      }
        
    </div>
    </div>
</div>
</div> 
</div>
</div>
</>
)
}
export default AboutDetailOne