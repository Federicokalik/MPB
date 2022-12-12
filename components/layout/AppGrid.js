import AppsList from "./AppsList"

const LayoutAppGrid=()=>{
return(
<>
<div className="apps-area positioning pb-76  pt-100">
<div className="container">
<div className="row">
    <div className="col-lg-12">
        <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1>Easy to <span>Intricate</span> <br/> Your Apps</h1>
        </div>
    </div>
</div>
<div className="row row-cols-1 row-cols-xl-5 row-cols-lg-5 row-cols-md-2  row-cols-sm-2 mt-50">
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
    <AppsList
     icon="assets/images/client-logo/app-2.png"
    />
</div>
</div>
<img className="shape hrrd-app-shape" src="/assets/images/shape/hrrd-app.png" alt=""/>
</div>
</>
)
}
export default LayoutAppGrid