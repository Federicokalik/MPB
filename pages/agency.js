import AgencyBottom from "../components/ header/agencyBottom"
import AgencyBlog from "../components/agency/agencyBlog"
import AgencyCircleSlider from "../components/agency/CircleSlider"
import AgencyClientLogo from "../components/agency/ClientLogo"
import AgencyDetail from "../components/agency/DetailOne"
import AgencyNewslater from "../components/agency/Newslater"
import AgencyServices from "../components/agency/services"
import AgencyHeader from "../components/layout/AgencyHeader"
import Footer from "../components/layout/footer"

const Agency=()=>{
return(
<>
<header>
   <AgencyHeader/>
   <AgencyBottom/> 
</header>
<AgencyClientLogo/>
<AgencyServices/>
<AgencyDetail/>
<AgencyBlog/>
<AgencyCircleSlider/>
<AgencyNewslater/>
<Footer/>
</>
)
}

export default Agency