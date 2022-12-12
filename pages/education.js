import EducationHeaderBottom from "../components/ header/EducationBottom"
import EducationDepertment from "../components/Education/Deperments"
import EducationDetailOne from "../components/Education/DetailOne"
import EducationTestimonial from "../components/Education/EduTestimonial"
import RegisterBanner from "../components/Education/RegisterBanner"
import EducationTeacher from "../components/Education/Teachers"
import TrustedCompany from "../components/Education/TrustedCompany"
import EducationFooter from "../components/layout/EducationFooter"
import EducationHeader from "../components/layout/EducationHeader"

const Education=()=>{
return(
<>
<header>
  <EducationHeader/>
  <EducationHeaderBottom/>
</header>
<TrustedCompany/>
<EducationDetailOne/>
<EducationDepertment/>
<EducationTeacher/>
<EducationTestimonial/>
<RegisterBanner/>
<EducationFooter/>
</>
)
}
export default Education