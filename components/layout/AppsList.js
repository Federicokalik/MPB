
const AppsList=(props)=>{
return(
    <>
    <div className="col wow animate fadeInUp" data-wow-delay="250ms" data-wow-duration="1500ms">
        <div className="apps-box">
            <img src={props.icon} alt=""/>
        </div>
    </div>
    </>
)
}
export default AppsList