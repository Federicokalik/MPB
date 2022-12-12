import AgencyBlogItem from "./blog/item"

const AgencyBlog=()=>{
return(
<>
<div className="ag-blog-style">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-4">
        <h2 className="ag-section-title">
            Read Our Blog
        </h2>
    </div>
</div>
<div className="row gy-4">
    
    <AgencyBlogItem
     img="/assets/images/agency/blog/blog-c2.png"
     title="How great Content helps drive success in Marketplace"
    />

    <AgencyBlogItem
     img="/assets/images/agency/blog/blog-c2.png"
     title="How great Content helps drive success in Marketplace"
    />

    <AgencyBlogItem
     img="/assets/images/agency/blog/blog-c2.png"
     title="How great Content helps drive success in Marketplace"
    />

</div>
</div>
</div>
</>
)
}
export default AgencyBlog