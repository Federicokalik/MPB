import Link from "next/link"
import Slider from "react-slick";
import PopulerJobItem from "./PopulerJob/Item"

const PopulerJobs=()=>{

const SliderSettings = {
    dots: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    pauseOnDotsHover: true,
    responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

return(
<>
<div className="popular-jobs-area pt-100 pb-100">
<img className="shape popular-jobs-shape" src="/assets/images/shape/popular-job-shape.png" alt=""/>
<div className="container">
<div className="row align-items-center">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="ch-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1>Some <span className="title-mark title-mark-section">Popular</span> <br/> Jobs for You!</h1>
        </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mobt-24">
        <div className="popular-job-btn-wrap text-lg-end text-md-end text-sm-start wow animate fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
            <a className="common-btn btn-style-2" href="services.html">View All Job</a>
        </div>
    </div>
</div>
</div>
<div className="container">
<div className="row slide-wrapper-single mt-50">

<div className="popular-job-slide">

    <Slider
     {...SliderSettings}
    >
   
    <PopulerJobItem/>
    <PopulerJobItem/>
    <PopulerJobItem/>
    <PopulerJobItem/>
    <PopulerJobItem/>
    <PopulerJobItem/>


    </Slider>

</div>

</div>
</div>
</div>
</>
)
}
export default PopulerJobs