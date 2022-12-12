import Link from "next/link"

const JobCatItem=(props)=>{
return(
<>
<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
<div className="job-category-box">
    <div className="job-category-icon">
        <i className={props.icon}></i>
    </div>
    <div className="job-category-content">
        <h3><Link href="/"><a>{props.name}</a></Link></h3>
        <ul>
            <li>
                {props.opened} 
                <Link href="/"><a><i className="bi bi-arrow-right-short"></i></a></Link>
            </li>
        </ul>
    </div>
</div>
</div>
</>
)
}
export default JobCatItem