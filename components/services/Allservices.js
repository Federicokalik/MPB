import ServiceItem from "./serviceitem"

const AllServices=()=>{
return(
<>
<div className="all-services-area pt-100 pb-76">
<div className="container">
<div className="row">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1>See our all <span>service</span></h1>
            <p className="latest-text">We are self-service data analytics software that lets you create visually appearing data visualizations and insightful dashboards in minutes.</p>
        </div>
    </div>
</div>
<div className="row mt-50">

 <ServiceItem
  Icon="bi bi-file-code-fill"
  title="Web Development"
  desc="Web development refers to the building, creating, and maintaining of websites. It includes aspects."
  actionBtn="Learn More"
 />

<ServiceItem
  Icon="bi bi-intersect"
  title="Collaborate Securely"
  desc="Share/publish your reports with your colleagues and collaborate securely with more than 25 users."
  actionBtn="Learn More"
 />

<ServiceItem
  Icon="bi bi-graph-up"
  title="Embedded Analytics"
  desc="Get a powerful analytics tool in your own brand name and enhance the predictive behaviors."
  actionBtn="Learn More"
 />

<ServiceItem
  Icon="bi bi-journal-text"
  title="File Management"
  desc="A file management software is an application that enables users to create, store, and access files."
  actionBtn="Learn More"
 />

<ServiceItem
  Icon="bi bi-file-earmark-richtext"
  title="UX Research"
  desc="UX research is an important part of your project design because it protects you from designing."
  actionBtn="Learn More"
 />

<ServiceItem
  Icon="bi bi-brush-fill"
  title="UI Design"
  desc="UI design is the process designers use to build interface in software, computerized devices."
  actionBtn="Learn More"
 />

</div>
</div>
</div>
</>
)
}
export default AllServices