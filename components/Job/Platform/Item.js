
const PlatformWorkList=(props)=>{
return(
<>
<div className="platform-work-box wow animate fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
    <div className="platform-icon">
        <i className={props.icon}></i>
    </div>
    <div className="platform-content">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </div>
</div>
</>
)
}
export default PlatformWorkList