import Link from "next/link"
import HomeDetailOne from "../../../constant/home/DetailOne"

const DetailLeft=()=>{
return(
<>
<div className="col-xxl-6 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="everything-img-wrap">
        <img src="assets/images/shape/everything-hrrd.png" alt=""/>
        <div className="income-cart">
            <p>{HomeDetailOne.Income}</p>
            <div className="income-price-wrap">
                <div className="income-main-price">
                    <h2>{HomeDetailOne.Price}</h2>
                </div>
                <div className="income-percent">
                    <span><i className="bi bi-arrow-up-right"></i>{HomeDetailOne.IncomeIncressed}</span>
                </div>
            </div>
            <img src="/assets/images/shape/income-cart-graf.png" alt=""/>
        </div>
        <div className="like-cart">
        <div className="like-cart-box">
                <div className="like-cart-icon">
                    <i className='bx bxs-like'></i>
                </div>
                <div className="like-cart-content">
                    <h4>{HomeDetailOne.TotalLike}</h4>
                    <h6>Total Likes</h6>
                </div>
            </div>
    </div>
        <div className="time-cart">
            <div className="time-cart-img-list">
                <img src={HomeDetailOne.MeetingIcon1} alt=""/>
                <img src={HomeDetailOne.MeetingIcon2} alt=""/>
                <img src={HomeDetailOne.MeetingIcon3} alt=""/>
                <img src={HomeDetailOne.MeetingIcon4} alt=""/>
                <img src={HomeDetailOne.MeetingIcon5} alt=""/>
            </div>
            <div className="time-cart-content text-center">
                <h2>Saturday, 8pm</h2>
                <p>Time to active in meeting</p>
            </div>
            <div className="time-cart-btn-wrap">
             <Link href="/"><a className="time-cart-btn time-cart-btn-1">Schedule Post</a></Link>
             <Link href="/"><a className="time-cart-btn time-cart-btn-2">See Insight</a></Link>
            </div>
        </div>
    </div>
</div>
</>
)
}
export default DetailLeft