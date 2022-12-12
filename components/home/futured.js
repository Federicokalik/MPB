import FutureItem from "./futured/item"

const Futured=()=>{
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

  <FutureItem
   AnimeDelay="400ms"
   icon="/assets/images/icon/featured-icon-1.png"
   title="Dashboard"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

  <FutureItem
   AnimeDelay="500ms"
   icon="/assets/images/icon/featured-icon-2.png"
   title="Statistics"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

 <FutureItem
   AnimeDelay="600ms"
   icon="/assets/images/icon/featured-icon-3.png"
   title="Easy Access"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

  <FutureItem
   AnimeDelay="700ms"
   icon="/assets/images/icon/featured-icon-4.png"
   title="Collaboration"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

  <FutureItem
   AnimeDelay="800ms"
   icon="/assets/images/icon/featured-icon-5.png"
   title="Total Control"
   desc="Assertively parallel task synergistic deliverables after high-quality"
  />

</div>
</div>
<img className="shape featured-shape" src="assets/images/shape/feasured-hrrd.png" alt=""/>
</div>
</>
)
}
export default Futured