import Link from "next/link"

const AboutWorkItem=(props)=>{
return(
<>
<div className="latest-work-img-wrap">
<img className="w-100" src={props.img} alt=""/>
<div className="latest-work-hover-content d-flex align-items-end">
    <div className="latest-work-hover-child">
    <p>{props.name}</p>
    <h2>{props.title}</h2>
    <Link href="/"><a>Read More <i className="bi bi-arrow-right"></i></a></Link>
    </div>
</div>
</div>
</>
)
}
export default AboutWorkItem