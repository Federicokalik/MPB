import Slider from "react-slick"

const AgencyCircleSlider=()=>{
return(
<>
<div className="ag-testimonial-style">
<div className="container position-relative">
<div className="row justify-content-center">
    <div className="col-lg-6">
       <Slider
        infinite={true}
        arrows={false}
       >
        <div className="ag-testimonial-silder">
            <div className="ag-testimonial-card">
                <h4 className="testiminial-texts">“I’ve completed support from my Agency  about 1 years ago. Their make the prototyping process so easy and faster. I feel this is the best apps for the prototyping use”</h4>

                <h5 className="reviewer-name">William Smith</h5>
                <span>CEO f ZaVad Company</span>
            </div>
        </div>
        <div className="ag-testimonial-silder">
            <div className="ag-testimonial-card">
                <h4 className="testiminial-texts">“I’ve completed support from my Agency  about 1 years ago. Their make the prototyping process so easy and faster. I feel this is the best apps for the prototyping use”</h4>

                <h5 className="reviewer-name">William Smith</h5>
                <span>CEO f ZaVad Company</span>
            </div>
        </div>
       </Slider>
    </div>
</div>
<div className="ag-testimonial-background d-none d-lg-block">
    <img src="assets/images/agency/backgrounds/testi-bg.png" alt=""/>
</div>
</div>
</div>
</>
)
}
export default AgencyCircleSlider