import HBottom from "../components/ header/hbottom";
import HomeDetailOne from "../components/home/DetailOne";
import HomeDetailTwo from "../components/home/DetailTwo";
import Futured from "../components/home/futured";
import Header from "../components/layout/header";
import HomePricing from "../components/home/pricing";
import HomeNewsLater from "../components/home/NewsLater";
import LayoutAppGrid from "../components/layout/AppGrid";
import Footer from "../components/layout/footer"
import HomeDuelSlider from "../components/home/DuelSlider";

export default function Home() {
return (
<>
<header>
  <Header/>
  <HBottom/>
</header>
<Futured/>
<HomeDetailOne/>
<HomeDetailTwo/>
<LayoutAppGrid/>
<HomePricing/>
<HomeDuelSlider/>
<HomeNewsLater/>
<Footer/>
</>
)
}

