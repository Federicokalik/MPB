import PlatformWorkList from "./Platform/Item"

const PlatformWork=()=>{
return(
<>
<div className="platform-area pt-100 pb-100">
<div className="container">
<div className="row align-items-center">
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="platform-img">
            <img src="assets/images/platform-img.png" alt=""/>
        </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
        <div className="ch-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <h1>Watch How Our <br/> Platform <span className="title-mark title-mark-section">Work!</span></h1>
        </div>
        <div className="platform-work-wrap mt-50">

         <PlatformWorkList
          icon="bi bi-person-fill"
          title="Create Account"
          desc="Competently foster backward-compatible alignments and multimedia based resources."
         />

         <PlatformWorkList
          icon="bi bi-file-earmark-arrow-up-fill"
          title="Upload CV/Resume"
          desc="Competently foster backward-compatible alignments and multimedia based resources."
         />

         <PlatformWorkList
          icon="bi bi-search"
          title="Choose Job"
          desc="Competently foster backward-compatible alignments and multimedia based resources."
         />

         <PlatformWorkList
          icon="bi bi-file-check-fill"
          title="Complete Apply"
          desc="Competently foster backward-compatible alignments and multimedia based resources."
         />   
          
        </div>
    </div>
</div>
</div>
</div>
</>
)
}
export default PlatformWork