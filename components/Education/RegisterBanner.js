
const RegisterBanner=()=>{
return(
<>
<div className="edu-register-style position-relative ">
<div className="vactor-shape position-absolute d-none d-lg-block wow fadeInLeft animated" data-wow-duration="2000ms">
    <img src="assets/images/education/shapes/edu-vactor5.svg" alt=""/>
</div>
<div className="edu-register-flort-bg d-none d-lg-block"></div>
<div className="container">
<div className="row align-items-end">
<div className="col-xxl-6 col-lg-8 col-md-8 pt-5 pt-lg-0 pb-5 pb-lg-0">
    <div className="row align-content-center">
        <div className="col-xxl-8 col-lg-8 position-relative">
            <h2 className="register-section-title edu-section-title text-start text-white">
                Create Free Account
                & Get Register
            </h2>
            <div className="arrow-vactor d-none d-lg-block">
                <img src="assets/images/education/shapes/arrow-vactor.svg" alt=""/>
            </div>
        </div>
        <div className="col-xxl-4 col-lg-4">
            <div className="register-btn text-lg-center">
                <a href="#" className="edu-btn-fill ">Register Now</a>
            </div>
        </div>
    </div>
</div>
<div className="col-xxl-6 col-lg-4 col-md-4 d-none d-md-flex justify-content-end">
    <div className="register-florting-image text-end">
        <img src="assets/images/education/edu-register-figure.png" alt="" className="img-fluid"/>
    </div>
</div>
</div>
</div>
</div>
</>
)
}
export default RegisterBanner