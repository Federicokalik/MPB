import Link from "next/link"
import JobCatItem from "./JobCategory/Item"

const JobCategories=()=>{
return(
<>
<div className="job-categories-area pb-76">
<div className="container">
<div className="row">
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
        <div className="ch-section-title text-center">
            <h1>Browse by <br/> <span className="title-mark title-mark-section">Job</span> Categories</h1>
        </div>
    </div>
</div>
<div className="row mt-50">

    <JobCatItem
     icon="bi bi-megaphone-fill"
     name="DIgital Marketing"
     opened="143 Jobs Opened"
    />

    <JobCatItem
     icon="bi bi-brush-fill"
     name="Art & Design"
     opened="110 Jobs Opened"
    />

    <JobCatItem
     icon="bi bi-currency-dollar"
     name="Accounting"
     opened="158 Jobs Opened"
    />

    <JobCatItem
     icon="bi bi-camera-fill"
     name="Photography"
     opened="95 Jobs Opened"
    />

    <JobCatItem
     icon="bi bi-pencil-square"
     name="Copy Writing"
     opened="143 Jobs Opened"
    />

    <JobCatItem
     icon="bi bi-headphones"
     name="Music"
     opened="143 Jobs Opened"
    />

    <JobCatItem
     icon="bi bi-people-fill"
     name="Human Resources"
     opened="143 Jobs Opened"
    />
    
 


    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
        <div className="job-category-box job-category-explore">
            <div className="explore-content">
                <h2>Explore <br/> 30 More <br/> Categories <Link href="/"><a><i className="bi bi-arrow-right-short"></i></a></Link></h2>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</>
)
}
export default JobCategories