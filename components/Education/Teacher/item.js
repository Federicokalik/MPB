import Link from "next/link"

const EduTeacherItem=(props)=>{
return(
<>
<div className="col-lg-4 col-md-6 col-sm-6">
    <div className="edu-instructor-single">
        <div className="instructor-image">
            <img src={props.img} alt=""/>
        </div>
        <div className="instructor-info">
            <h4><Link href="/"><a>{props.name}</a></Link></h4>
            <span>{props.position}</span>
            <ul className="instructor-social-links d-flex">
                <li><Link href="/"><a><i className="bi bi-google"></i></a></Link></li>
                <li><Link href="/"><a><i className="bi bi-twitter"></i></a></Link></li>
                <li><Link href="/"><a><i className="bi bi-instagram"></i></a></Link></li>
                <li><Link href="/"><a><i className="bi bi-linkedin"></i></a></Link></li>
            </ul>
        </div>
    </div>
</div>
</>
)
}
export default EduTeacherItem