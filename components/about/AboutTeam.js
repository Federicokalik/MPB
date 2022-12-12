import Carousel from 'react-slick';
import AboutTeamItem from './Team/item';

const AboutTeam=()=>{

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
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
<div className="about-team-area pb-100 pt-100">
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize">
            <h1>Best dedicated <span>team</span></h1>
        </div>
    </div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
        <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
            <p>We have 700 plus official workers and thousands of remote workers. They do work them dedicated and they are expert in the particular topic.</p>
        </div>
    </div>
</div>
<div className="row pt-50">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
     <Carousel
      {...SliderSetting}
     >

      <AboutTeamItem 
       pic="/assets/images/about/team-1.png"
       name="Daniyel Vettori"
       position="Web Developer"
      />

      <AboutTeamItem 
       pic="/assets/images/about/team-1.png"
       name="Daniyel Vettori"
       position="Web Developer"
      />

     <AboutTeamItem 
       pic="/assets/images/about/team-1.png"
       name="Daniyel Vettori"
       position="Web Developer"
      />

     <AboutTeamItem 
       pic="/assets/images/about/team-1.png"
       name="Daniyel Vettori"
       position="Web Developer"
      />

      <AboutTeamItem 
       pic="/assets/images/about/team-1.png"
       name="Daniyel Vettori"
       position="Web Developer"
      />

     </Carousel>
    </div>
</div>
</div>
</div>
</>
)
}
export default AboutTeam