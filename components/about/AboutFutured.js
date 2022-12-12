import FuturedItem from "./Futured/FuturedItem"

const AboutFutured=()=>{
return(
<>
<div className="featured-area positioning  pb-76">
<div className="container">
<div className="row">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1><span>Featured</span> We <br/> Provide for You</h1>
        </div>
    </div>
</div>
<div className="row justify-content-center mt-50">

  <FuturedItem
   icon="/assets/images/icon/featured-icon-1.png"
   title="Dashboard"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-2.png"
   title="Statistics"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

 <FuturedItem
   icon="/assets/images/icon/featured-icon-3.png"
   title="Easy Access"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-4.png"
   title="Collaboration"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

  <FuturedItem
   icon="/assets/images/icon/featured-icon-5.png"
   title="Total Control"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

</div>
</div>
</div>
</>
)
}
export default AboutFutured