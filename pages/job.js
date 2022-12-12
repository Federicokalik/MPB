import JobBottom from "../components/ header/JobBottom"
import AroundWorld from "../components/Job/AroundWorld"
import JobClientLogo from "../components/Job/ClientLogos"
import JobCategories from "../components/Job/JobCategories"
import JobSubsribe from "../components/Job/JobSubsribe"
import PlatformWork from "../components/Job/PlatformWork"
import PopulerJobs from "../components/Job/PopulerJobs"
import JobHeader from "../components/layout/JobHeader"
import Footer from "../components/layout/footer"

const Job=()=>{
return(
<>
<header>
<JobHeader/>
<JobBottom/>
</header>
<JobClientLogo/>
<JobCategories/>
<PlatformWork/>
<PopulerJobs/>
<AroundWorld/>
<JobSubsribe/>
<Footer/>
</>
)
}
export default Job