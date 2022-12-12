import Link from "next/link"
import BreadCrumb from "../components/ header/breadcrumb"
import Blogs from "../components/blog/Blogs"
import RecentComments from "../components/blog/RecentComments"
import RecentPost from "../components/blog/RecentPosts"
import Header from "../components/layout/header"

const BlogPage=()=>{
return(
<>
<header>
  <Header />
  <BreadCrumb pagename="Blog" />
</header>

<div className="blog-post-area">
<div className="container">
<div className="row">
<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
  
  <Blogs/>

  <div className="row mt-100">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="pagination-wrap text-center">
        <ul>
          <li><a href="#"><i className="bi bi-chevron-left"></i></a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#"><i className="bi bi-chevron-right"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
  <div className="cart-wrap">

    <div className="single-cart search-cart">
      <form action="#" className="cart-form">
        <a href="#"><i className="bi bi-search"></i></a>
        <input type="text" placeholder="Search here..."/>
      </form>
    </div>
    
    <RecentPost/>
    
    <RecentComments/>
    
    <div className="single-cart">
      <div className="cart-title">
        <h2>Keywords</h2>
      </div>
      <div className="keywords-tag">
        <ul>
          <li><Link href="/"><a>App</a></Link></li>
          <li><Link href="/"><a>Tech</a></Link></li>
          <li><Link href="/"><a>Corporate</a></Link></li>
          <li><Link href="/"><a>Landing</a></Link></li>
          <li><Link href="/"><a>Software</a></Link></li>
          <li><Link href="/"><a>UI/UX</a></Link></li>
          <li><Link href="/"><a>Web Design</a></Link></li>
          <li><Link href="/"><a>Mobile Design</a></Link></li>
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
export default BlogPage