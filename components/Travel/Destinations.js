import { useRef , useEffect } from "react"
import Carousel from "react-slick"
import DestinationSlide from "./Destination/Item"

const TravelDestinations=()=>{
const SLiderNav = useRef(null)


const Settings={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "Travel_destination_slider",
    centerMode: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
}

async function SliderNext(){
  await SLiderNav?.current?.slickNext()
}

async function SliderPrev(){
  await SLiderNav?.current?.slickPrev()
}

return(
<>
<div className="destination-area positioning mt-100 pt-100 pb-100">
<div className="container-fluid container-fluid">
<div className="row justify-content-between align-items-center">
<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-xxl-0">


<Carousel
 {...Settings}
 ref={SLiderNav}
>

<DestinationSlide
 img="/assets/images/trip/destination-1.png"
 address="Lake Powell"
 place="Maryland"
/>

<DestinationSlide
 img="/assets/images/trip/destination-2.png"
 address="Lake Powell"
 place="Maryland"
/>

<DestinationSlide
 img="/assets/images/trip/destination-1.png"
 address="Lake Powell"
 place="Maryland"
/>

<DestinationSlide
 img="/assets/images/trip/destination-2.png"
 address="Lake Powell"
 place="Maryland"
/>

<DestinationSlide
 img="/assets/images/trip/destination-1.png"
 address="Lake Powell"
 place="Maryland"
/>

<DestinationSlide
 img="/assets/images/trip/destination-2.png"
 address="Lake Powell"
 place="Maryland"
/>


</Carousel>

<div className="tds_nav">
<button onClick={SliderPrev}><i className="bi bi-arrow-left"></i></button>
<button onClick={SliderNext}><i className="bi bi-arrow-right"></i></button>
</div>

</div>
<div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
    <div className="destination-right-wrap">
        <div className="trip-section-title">
            <h1>Most Popular <span>Destination</span> of Us!</h1>
        </div>
        <div className="destination-content">
            <p>Credibly unleash economically sound e-business with bleeding-edge users. Uniquely simplify mission-critical benefits with cross-unit manufactured products.</p>
            <div className="destination-btn-wrap">
                <a className="tri-btn-fill">View All <i className="bi bi-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<h1 className="container-text destination-text">Destination</h1>
</div>
</>
)
}
export default TravelDestinations