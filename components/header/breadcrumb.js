import Link from "next/link"

const BreadCrumb=(props)=>{
return(
<>
<div className="breadcrumb-area positioning">
   <div className="container">
      <div className="row">
         <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="breadcrumb-text text-center">
               <h1>{props.pagename}</h1>
               <p><Link href="/"><a>Home</a></Link> / {props.pagename}</p>
            </div>
         </div>
      </div>
   </div>
	<img className="shape hrrd-hero-shape-top" src="assets/images/shape/hrrd-hero-shape-top.png" alt=""/>
</div>
</>    
)
}
export default BreadCrumb