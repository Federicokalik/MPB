
const FutureItem=(props)=>{
return(
<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp" data-wow-delay={props.AnimeDelay} data-wow-duration="1500ms">
<div className="featured-box">
    <div className="featured-icon">
        <img src={props.icon} alt=""/>
    </div>
    <div className="featured-content">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </div>
</div>
</div>
)
}
export default FutureItem