import Link from "next/link"

const ClientItem=(props)=>{
return(
<>
<div className="single-client-testimonial">
    <div className="client-testimonial-img">
        
    </div>
    <div className="client-testimonial-info">
        <h2>{props.name}</h2>
        <p>{props.position}</p>
    </div>
    <div className="client-testimonial-rating">
        <ul>
            <li><Link href="/"><a><i className="bi bi-star-fill"></i></a></Link></li>
            <li><Link href="/"><a><i className="bi bi-star-fill"></i></a></Link></li>
            <li><Link href="/"><a><i className="bi bi-star-fill"></i></a></Link></li>
            <li><Link href="/"><a><i className="bi bi-star-fill"></i></a></Link></li>
            <li><Link href="/"><a><i className="bi bi-star-fill"></i></a></Link></li>
        </ul>
        <p>I’ve downloaded Hrrd from my Google Play  about 1 years ago. This make the prototype process so easy and faster. I feel it is a best app for prototype.</p>
    </div>
</div>
</>
)
}

export default ClientItem