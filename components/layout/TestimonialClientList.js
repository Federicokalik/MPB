
const TestimonialClientList=(props)=>{
return(
<>
<div className="single-client-testimonial text-center">
    <div className="client-testimonial-img">
        <img src={props.pic} alt=""/>
    </div>
    <div className="client-testimonial-info">
        <h2>{props.name}</h2>
        <p>{props.position}</p>
    </div>
    <div className="client-testimonial-rating">
        <ul>
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-fill"></i></li>
        </ul>
        <p>I’ve downloaded Hrrd from my Google Play  about 1 years ago. This make the prototype process so easy and faster. I feel it is a best app for prototype.</p>
    </div>
</div>
</>
)
}
export default TestimonialClientList