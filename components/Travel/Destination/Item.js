
const DestinationSlide=(props)=>{
return(
<>
<div className="single-destination-slide-box">
<img className="w-100" src={props.img} alt=""/>
<div className="destination-slide-info">
    <div className="destination-slide-content">
        <h3>{props.address}</h3>
        <p>{props.place}</p>
    </div>
    <div className="destination-slide-rating">
        <h3>4.8 <i className="bi bi-star-fill"></i></h3>
    </div>
</div>
</div>
</>
)
}
export default DestinationSlide