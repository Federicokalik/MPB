import RecentBlogItem from "./RecentBlogItem"

const RecentPost=()=>{
return(
<>
<div className="single-cart">
    <div className="cart-title">
    <h2>Recent Posts</h2>
    </div>

    <RecentBlogItem
     image="/assets/images/blog/cart-post-1.png"
     name="Top project management software."
     date="February 22, 2021"
    />

   <RecentBlogItem
     image="/assets/images/blog/cart-post-1.png"
     name="Top project management software."
     date="February 22, 2021"
    />

    <RecentBlogItem
     image="/assets/images/blog/cart-post-1.png"
     name="Top project management software."
     date="February 22, 2021"
    />

</div>
</>
)
}
export default RecentPost