import Header from "../components/layout/header"
import BreadCrumb from "../components/ header/breadcrumb"
import RecentPost from "../components/blog/RecentPosts"
import RecentComments from "../components/blog/RecentComments"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import CommentBox from "../components/blog/CommentBox"

const BlogDetail=()=>{
const [Tabs,setTabs] = useState([
    "App","Tech","Corporate","Landing","Software","UI/UX",
    "Web Design","Mobile Design"
])    

return(
<>
<header>
    <Header/>
    <BreadCrumb pagename="Blog Details" />
</header>

<div className="blog-details-area">
<div className="container">
<div className="row">
<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
<div className="blog-post-wrap blog-post-details">
    <h1><a href="blog-details.html">Design Studios That Everyone Should Know About?</a></h1>
    <ul>
        <li><i className="bi bi-person-fill"></i> <a href="blog-details.html">by Chris Ames</a></li>
        <li><i className="bi bi-calendar3"></i> <a href="blog-details.html">22 January, 2022</a></li>
    </ul>
    <div className="details-post-img">
        <img className="w-100" src="/assets/images/blog/details-img-1.png" alt=""/>
    </div>
    <p>Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey, cheer well me old mucker geez bodge some dodgy chad. Say me old mucker bobby I a he lost his bottle a load of old tosh cup of char cheers bleeding bugger. With over 25,000 customers worldwide. The Elegance is the world leading analytics and marketing suite for Instagram and. Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky palliating shot the little rotter, bubble and squeak vagabond cheeky bugger at public school parclose the BBC. Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey, che well me old mucker geez bodge some dodgy chad. Say me old mucker bobby I a he lost.</p>
</div>
<div className="blog-details-wrap">
    <div className="details-post-content">
        <h1 className="pb-2">The reason why everyone love business.</h1>
        <p>With over 25,000 customers worldwide, Elegance is the world leading analytics and market suite for Instagram and. Why I say old chap that is spiffing pukka, bamboozling up bugger buggered zonked hanky panay a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon your bloke the BBC.</p>
        <div className="row pb-4 pt-4">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="details-post-img">
                    <img className="w-100" src="/assets/images/blog/details-img-2.png" alt=""/>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
                <div className="details-post-img">
                    <img className="w-100" src="/assets/images/blog/details-img-3.png" alt=""/>
                </div>
            </div>
        </div>
        <p>Churchill lead Britain through one of its darkest periods.  Enemies are threatening to advanced across the English Channel, bombing London daily, the pressure to survive was paramount. But Churchy, like and entrepreneur worth their salt, understood that failure was part of the process. One learned from their mistake, the greatest lesson was that there was always another day to fight on.</p>
    </div>
    <div className="details-share d-flex align-items-center flex-wrap justify-content-between">
        <ul className="details-share-info">
            <li>Share :</li>
            <li><a href="#"><i className='bx bxl-facebook'></i></a></li>
            <li><a href="#"><i className='bx bxl-linkedin' ></i></a></li>
            <li><a href="#"><i className='bx bxl-instagram' ></i></a></li>
            <li><a href="#"><i className='bx bxl-twitter' ></i></a></li>
        </ul>
        <ul className="details-share-like pt-2 pt-sm-0">
            <li><a href="#"><i className='bx bxs-comment-detail' ></i></a></li>
            <li><a href="#"><i className='bx bxs-like' ></i></a></li>
            <li>Like</li>
        </ul>
    </div>
</div>

<CommentBox />

</div>
<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
<div className="cart-wrap">
    <div className="single-cart search-cart">
        <form action="#" className="cart-form">
            <a href="#"><i className="bi bi-search"></i></a>
            <input type="text" placeholder="Search here..."/>
        </form>
    </div>
    
    <RecentPost />

    <RecentComments />

    <div className="single-cart">
        <div className="cart-title">
            <h2>Keywords</h2>
        </div>
        <div className="keywords-tag">
            <ul>
                {
                  Tabs.map(tab=>{
                    return <li key={uuidv4()}><a href="#">{tab}</a></li>
                  })  
                }
            </ul>
        </div>
    </div>

</div>
</div>
</div>
</div>
</div>

</>    
)
}
export default BlogDetail