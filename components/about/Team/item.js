
const AboutTeamItem=(props)=>{
return(
<>
    <div className="single-about-team">
    <div className="single-about-team-img">
        <img className="w-100" src={props.pic} alt=""/>
    </div>
    <div className="single-about-team-content text-center">
        <h3>{props.name}</h3>
        <p>{props.position}</p>
    </div>
    </div>
</>
)
}

export default AboutTeamItem