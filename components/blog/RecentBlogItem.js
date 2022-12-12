import Link from "next/link"

const RecentBlogItem=(props)=>{
return(
<>
<div className="cart-post">
    <div className="cart-post-img">
        <Link href="/blog/demo">
        <a>
            <img src={props.image} alt=""/>
        </a>
        </Link>
    </div>
    <div className="cart-post-content">
        <h4>
           <Link href="/blog/demo">
            <a>
            {props.name}
            </a>
           </Link>
        </h4>
        <p>{props.date}</p>
    </div>
</div>
</>
)
}
export default RecentBlogItem