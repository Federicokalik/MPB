import Link from "next/link"

const TravelSubsribe=()=>{
return(
<>
<div className="tri-footer-style positioning">
<div className="container">
<div className="row align-items-end">
    <div className="col-lg-6 col-md-8">
        <div className="tri-footer-main-wrap">
                <div className="tri-footer-subscribe-wrap">
                    <h2>Subscribe <br/>
                        for every Tour <br/>
                        News & Tips </h2>
                    <form action="#">
                        <div className="subscribe-form-input">
                                <input type="text" placeholder="Enter Your Email"/>
                                <button className="tri-submit-btn tri-btn-fill">Subscribe<i className="bi bi-arrow-right"></i></button>
                        </div>
                    </form>
                </div>
                <div className="d-flex justify-content-between align-items-end footer-bottom-wrap flex-wrap flex-md-nowrap gap-4">
                    <div className="footer-bottom text-start">
                        <div className="footer-logo"><a>
                            <img src="assets/images/logo.png" alt=""/></a></div>
                        <p>Copyright©<a>Tripp</a>.All right reserved</p>
                    </div>
                    <ul className="d-flex footer-social-links">
                        <li><Link href="/"><a><i className="bi bi-google"></i></a></Link></li>
                        <li><Link href="/"><a><i className="bi bi-twitter"></i></a></Link></li>
                        <li><Link href="/"><a><i className="bi bi-instagram"></i></a></Link></li>
                        <li><Link href="/"><a><i className="bi bi-linkedin"></i></a></Link></li>
                    </ul>
                </div>
        </div>
    </div>
    <div className="col-lg-6 col-md-4 text-end">
        <div className="tri-footer-figure d-none d-md-block">
                <img src="/assets/images/trip/footer-figure.png" alt=""/>
        </div>
    </div>
</div>
</div>
<h1 className="container-text newsletter-text">Newsletter</h1>
</div>
</>
)
}
export default TravelSubsribe