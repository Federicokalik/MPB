import { useRef, useState , useEffect } from "react";
import Slider from "react-slick"

const TravelFeedback=()=>{
const [nav1, setNav1] = useState();
const [nav2, setNav2] = useState();
const sliderOne = useRef(null)


const TextSliderSetting={
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    arrows: false,
}

const ImgSliderSetting={
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  fade: false,
  arrows: false,
  speed: 1000,
}   

return(
<>
<div className="testimonial-area trip-testimonial positioning mt-100">
<div className="container">
<div className="row align-items-center justify-content-between">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
        <div className="testimonial-img-slide-wrap">
          <Slider
           {...ImgSliderSetting}
           asNavFor={nav2} 
           ref={sliderOne}
          >
            <div className="testimonial-img-slide-box">
                <img src="assets/images/testimonial-img-trip.png" 
                alt=""
                />
            </div>
            <div className="testimonial-img-slide-box">
                <img src="assets/images/testimonial-img-trip.png" 
                alt=""
                />
            </div>
          </Slider>
        </div>
    </div>
    <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
        <div className="testimonial-content-slide-wrap">
           <Slider
            {...TextSliderSetting}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
           > 
            <div className="testimonial-content-slide-box">
                <div className="trip-section-title">
                    <h1>Feedback from Our <span>Customers</span></h1>
                </div>
                <h2>“I’ve  Went ot America from Trippe Play  about 1 years ago. Trippe make the prototyping process so easy and faster. I feel this is the best apps for Prototyping use”</h2>
                <p>— Ferrous - CEO of Coco</p> 
            </div>
            <div className="testimonial-content-slide-box">
                <div className="trip-section-title">
                    <h1>Feedback from Our <span>Customers</span></h1>
                </div>
                <h2>“I’ve  Went ot America from Trippe Play  about 1 years ago. Trippe make the prototyping process so easy and faster. I feel this is the best apps for Prototyping use”</h2>
                <p>— Ferrous - CEO of Coco</p> 
            </div>
          </Slider>  
        </div>
    </div>
    <div className="tds_nav">
        <button onClick={() => sliderOne?.current?.slickPrev()}
        ><i className="bi bi-arrow-left"></i></button>
        <button onClick={() => sliderOne?.current?.slickNext()}
        ><i className="bi bi-arrow-right"></i></button>
    </div>
</div>
</div>
<h1 className="container-text reviews-text">Reviews</h1>
</div>
</>
)
}
export default TravelFeedback