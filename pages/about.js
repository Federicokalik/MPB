import BreadCrumb from "../components/ header/breadcrumb"
import AboutFutured from "../components/about/AboutFutured"
import AboutTeam from "../components/about/AboutTeam"
import AboutWorkGrid from "../components/about/AboutWorks"
import AboutDetailOne from "../components/about/DetailOne"
import TestimonialClient from "../components/about/TestimonialClient"
import LayoutAppGrid from "../components/layout/AppGrid"
import Header from "../components/layout/header"
import LayoutNewsLater from "../components/layout/NewsLater"
import Footer from "../components/layout/footer"

const About=()=>{
return(
<>
<header>
    <Header/>
    <BreadCrumb pagename="About Us"/>
</header>
<AboutDetailOne/>
<AboutFutured/>
<AboutWorkGrid/>
<AboutTeam/>
<LayoutAppGrid/>
<TestimonialClient/>
<LayoutNewsLater/>
<Footer/>
</>
)
}
export default About