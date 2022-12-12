import Link from "next/link"
import EducationDepertmentItem from "./Deperments/Item"

const EducationDepertment=()=>{
return(
<>
<div className="edu-department-style position-relative ">
<div className="vactor-shape position-absolute d-none d-lg-block end-0 wow animated fadeInRight" data-wow-duration="2000ms">
    <img src="/assets/images/education/shapes/edu-vactor2.svg" alt=""/>
</div>
<div className="container">
    <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-6">
            <h2 className="edu-section-title">We Have Most of Popular Departments</h2>
        </div>
    </div>
    <div className="row gy-4 mt-45">

    <EducationDepertmentItem
     img="assets/images/education/departments/depertment2.png"
     name="Artificial Intelligence"
     desc="Assertively parallel task synergistic deliverables after high-quality."
    />

    <EducationDepertmentItem
     img="assets/images/education/departments/depertment2.png"
     name="Civil Engineering"
     desc="Assertively parallel task synergistic deliverables after high-quality."
    />

    <EducationDepertmentItem
     img="assets/images/education/departments/depertment2.png"
     name="Business Studies"
     desc="Assertively parallel task synergistic deliverables after high-quality."
    />

    </div>

    <div className="row justify-content-center mt-60">
        <div className="col-lg-5 text-center">
            <div className="view-more-btn">
                <Link href="/"><a className="edu-btn-fill">View All Department</a></Link>
            </div>
        </div>
    </div>
</div>
</div>
</>
)
}
export default EducationDepertment