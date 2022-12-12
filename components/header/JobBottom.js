import Link from "next/link"
import JobConstantOne from "../../constant/Job/DetailOne"
import { v4 as uuidv4 } from "uuid"

const JobBottom=()=>{
return(
<>
<div className="hero-area">
<div className="container">
<div className="row align-items-center">
<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="hero-content">
            <h1>{JobConstantOne.Title.O} <span className="title-mark">{JobConstantOne.Title.T}</span> {JobConstantOne.Title.TR}</h1>
            <form action="#" className="hero-search-form">
            <div className="search-box">
                <input type="text" placeholder="Job / Position"/>
                <input type="text" placeholder="Location"/>
            </div>
            <button className="common-btn btn-style-2">Search</button>
            </form>
            <div className="recent-search">
            <ul>
                <li>Recent Search :</li>
                {
                  JobConstantOne.SearchTags.map(txt=>{
                    return <li key={uuidv4()}><Link href="/"><a>{txt}</a></Link></li>
                  })
                }
                
            </ul>
            </div>
        </div>
</div>
<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
    <div className="hero-img mobt-24">
        <img src={JobConstantOne.CoverImg} alt=""/>
        <div className="cart-box">
            <p>{JobConstantOne.CartTotalJob}</p>
            <ul>
                <li><img src={JobConstantOne.CartLogo1} alt=""/></li>
                <li><img src={JobConstantOne.CartLogo2} alt=""/></li>
                <li><img src={JobConstantOne.CartLogo3} alt=""/></li>
                <li><img src={JobConstantOne.CartLogo4} alt=""/></li>
                <li><Link href="/"><a><i className="bi bi-plus"></i></a></Link></li>
            </ul>
        </div>
    </div>
</div>
</div>
</div>
</div>
</>
)
}
export default JobBottom