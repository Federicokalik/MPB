import Link from "next/link"
import FooterConstant from "../../constant/FooterConstant/FooterConstant"

const EducationFooter=()=>{
return(
<>
<div className="edu-footer-style">
<div className="container">
<div className="edu-footer-main-wrap">
<div className="row">
<div className="col-lg-3 col-md-7">
    <div className="edu-footer-about">
        <div className="logo">
            <Link href="/"><a>
            <img src={FooterConstant.Logo} alt=""/>
            </a>
            </Link>
        </div>
        <p className="f-about-texts">{FooterConstant.subTitle}</p>
        <ul className="footer-social-links d-flex gap-3 ">
            <li><Link href={FooterConstant.GoogleLink}><a><i className="bi bi-google"></i></a></Link></li>
            <li><Link href={FooterConstant.TwitterLink}><a><i className="bi bi-twitter"></i></a></Link></li>
            <li><Link href={FooterConstant.InstagramLink}><a><i className="bi bi-instagram"></i></a></Link></li>
            <li><Link href={FooterConstant.LinkedinLink}><a><i className="bi bi-linkedin"></i></a></Link></li>
        </ul>
    </div>
</div>
<div className="col-lg-6">
    <div className="row">
        <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget">
                <h4 className="footer-widget-title">Services</h4>
                <ul className="footer-links">
                    <li><Link href="/"><a>Design</a></Link></li>
                    <li><Link href="/"><a>Development</a></Link></li>
                    <li><Link href="/"><a>Marketing</a></Link></li>
                    <li><Link href="/"><a>Content Writing</a></Link></li>
                </ul>
            </div>
        </div>  
        <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget ">
                <h4 className="footer-widget-title">Company</h4>
                <ul className="footer-links">
                    <li><Link href="/"><a>About</a></Link></li>
                    <li><Link href="/"><a>Terms</a></Link></li>
                    <li><Link href="/"><a>Privacy Policy</a></Link></li>
                    <li><Link href="/"><a>Careers</a></Link></li>       
                </ul>
            </div>
        </div>
        <div className="col-lg-4 col-md-4 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget">
                <h4 className="footer-widget-title">Job Info</h4>
                <ul className="footer-links">
                    <li><Link href="/"><a>Select</a></Link></li>
                    <li><Link href="/"><a>Services</a></Link></li>
                    <li><Link href="/"><a>Payment</a></Link></li>       
                </ul>
            </div>
        </div>
    </div>
</div>
<div className="col-lg-3 col-md-6 d-lg-flex justify-content-end pt-4 pt-lg-0">
    <div className="footer-widget">
        <h4 className="footer-widget-title">Contact</h4>
        <ul className="footer-contact-links">
            <li><span>Call :</span><Link href="/"><a> {FooterConstant.phone}</a></Link></li>
            <li><span>Email :</span><Link href="/"><a> {FooterConstant.email}</a></Link></li>
            <li><span>Address :</span><Link href="/"><a> {FooterConstant.address[0]}</a></Link></li>
        </ul>
    </div>

</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
    <div className="footer-copyright text-center" dangerouslySetInnerHTML={{__html: FooterConstant.copyrightTwo}}>
    </div>
</div>
</div>
</div>
</div>
</>
)
}
export default EducationFooter