import Link from "next/link"
import AgencyConstantOne from "../../constant/Agency/DetailOne"

const AgencyBottom=()=>{
return(
<>
<div className="ag-hero-style">
<div className="container">
<div className="row justify-content-lg-between justify-content-center">
    <div className="col-lg-5 order-1 order-lg-0">
        <div className="ag-hero-content">
            <h2 className="ag-hero-title">
                {AgencyConstantOne.Title}
            </h2>
            <p className="test">
                {AgencyConstantOne.subTitle}
            </p>
            <div className="ag-hero-btn">
                <Link href="/"><a className="ag-btn-fill">{AgencyConstantOne.actionBtn}</a></Link>
            </div>
        </div>
    </div>

    <div className="col-lg-7 col-md-10 order-0 order-lg-1 d-flex align-items-end justify-content-lg-end justify-content-center">
        <div className="ag-hero-figure">
            <img src="/assets/images/agency/ag-hero-figure.png" alt=""/>


            <div className="project-label">
                <span>{AgencyConstantOne.ProjectLable.title}</span>
                <h5>{AgencyConstantOne.ProjectLable.count}</h5>
                <div className="label-shape d-none d-md-block">
                    <img src="/assets/images/agency/shapes/project-done-vactor.svg" alt=""/>

                    </div>
            </div>

            <div className="review-label">
                <div className="d-flex align-items-center label-header">
                    <div className="client-avater">
                        <img src={AgencyConstantOne.reviewLabel.pic} alt=""/>
                    </div>
                    <ul className="ag-rating">
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                        <li><i className="bi bi-star-fill"></i></li>
                    </ul>
                </div>

                <h5>{AgencyConstantOne.reviewLabel.title}</h5>
            </div>
        </div>
    </div>
</div>
</div>

<div className="ag-hero-random-shapes d-none d-xl-block">
<img src="/assets/images/agency/shapes/shape-1.svg" className="shape-one" alt=""/>
<img src="/assets/images/agency/shapes/shape-2.svg" className="shape-two" alt=""/>
</div>
</div>
</>
)
}
export default AgencyBottom