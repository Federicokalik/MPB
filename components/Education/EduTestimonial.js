import { useRef } from "react";
import Carousel from "react-slick"

const EducationTestimonial=()=>{
const carouselRef = useRef(null)

const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(0);
    }
    };
    
    const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(items.length);
    }
    };    

return(
<>
<div className="edu-testimonial-style">
<div className="vactor-shape position-absolute d-none d-lg-block end-0 wow fadeInRight" data-wow-duration="2000ms">
    <img src="assets/images/education/shapes/edu-vactor4.svg" alt=""/>
</div>
<div className="container">

<div className="row align-items-center justify-content-between gy-4">
<div className="col-xxl-7 col-lg-7">
<div className="edu-testimonial-carusol-wrap position-relative">
    <div className="edu-testimonial-card floted-testmonial-card d-none d-md-block animated wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2500ms">
        <div className="testi-card-header">
            <div className="reviwer-info">
                <div className="reviewer-avater">
                    <img src="assets/images/education/reviewer-avater2.png" alt=""/>
                </div>
                <div className="reviewer-self">
                    <h4>Jaquon Hart</h4>
                    <span>Civil Engineer</span>
                </div>
            </div>
            <ul className="reviewer-rating d-flex ">
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
            </ul>
        </div>
        <div className="testi-card-body">
            <p>
                “With Edu, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.” 
            </p>
        </div>
    </div>
    <div className="edu-testimonial-silder">
       <Carousel
        vertical={true}
        speed={1000}
       >
        <div className="edu-testimonial-card">
            <div className="testi-card-header">
                <div className="reviwer-info">
                    <div className="reviewer-avater">
                        <img src="assets/images/education/reviewer-avater.png" alt=""/>
                    </div>
                    <div className="reviewer-self">
                        <h4>Jaquon Hart</h4>
                        <span>Civil Engineer</span>
                    </div>
                </div>
                <ul className="reviewer-rating d-flex">
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                </ul>
            </div>
            <div className="testi-card-body">
                <p>
                    “With Edu, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.” 
                </p>
            </div>
        </div>
        <div className="edu-testimonial-card">
            <div className="testi-card-header">
                <div className="reviwer-info">
                    <div className="reviewer-avater">
                        <img src="assets/images/education/reviewer-avater.png" alt=""/>
                    </div>
                    <div className="reviewer-self">
                        <h4>Jaquon Hart</h4>
                        <span>Civil Engineer</span>
                    </div>
                </div>
                <ul className="reviewer-rating d-flex">
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                </ul>
            </div>
            <div className="testi-card-body">
                <p>
                    “With Edu, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.” 
                </p>
            </div>
        </div>
        </Carousel>

    </div>
</div>
</div>
<div className="col-xxl-4 col-lg-5">
<div className="edu-testimonial-right">
    <h2 className="edu-section-title text-start">5000 Reviews from
        Our Successful Students!</h2>
    <p>Reactively recapitalize intermediated e-commerce after sticky applications. Dynamically intermediate viral testing procedures through technically sound.</p>
</div>
</div>
</div>
</div>
</div>
</>
)
}
export default EducationTestimonial