import { CountUp } from 'use-count-up'

const CounupItem=(props)=>{
return(
<>
<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
<div className="counter-item text-center wow fadeInUp">
    <h1 className="odometer">
    <CountUp 
     isCounting={true}
     end={props.countUp}
     duration={5}
     thousandsSeparator=","
     />
    </h1>
    <p>{props.title}</p>
</div>
</div>
</>
)
}
export default CounupItem