import Link from "next/link"
import TestimonialClientList from "../layout/TestimonialClientList"
import Carousel from 'react-slick';

const TestimonialClient=()=>{

const SliderSetting = {
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
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
<div className="about-testimonial-area">
<div className="container py-5">
<div className="row align-items-center">
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize">
            <h1>What  our <span>client</span> say</h1>
        </div>
    </div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
        <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
            <p>Trusted by over 40,000 worldwide customer since 2010. It’s awesome service. Land from day very fill that midst stars one dominion.</p>
        </div>
    </div>
</div>
<div className="row pt-50">
<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="inner-slide-wrap">

 <Carousel
  {...SliderSetting}
 >   
  <TestimonialClientList
   name="Sayem Ahmed"
   pic="/assets/images/about/client-img-1.png"
   position="Product Designer"
  /> 

  <TestimonialClientList
   name="Sayem Ahmed"
   pic="/assets/images/about/client-img-2.png"
   position="Product Designer"
  /> 

  <TestimonialClientList
   name="Sayem Ahmed"
   pic="/assets/images/about/client-img-2.png"
   position="Product Designer"
  /> 

  <TestimonialClientList
   name="Sayem Ahmed"
   pic="/assets/images/about/client-img-3.png"
   position="Product Designer"
  /> 

  <TestimonialClientList
   name="Sayem Ahmed"
   pic="/assets/images/about/client-img-4.png"
   position="Product Designer"
  /> 

  <TestimonialClientList
   name="Sayem Ahmed"
   pic="/assets/images/about/client-img-3.png"
   position="Product Designer"
  /> 


 </Carousel> 


</div>
</div>
</div>
</div>
</div>
</>
)
}
export default TestimonialClient