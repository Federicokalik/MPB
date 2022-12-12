import TravelBottom from "../components/ header/TravelBottom"
import TravelHeader from "../components/layout/TravelHeader"
import TravelDestinations from "../components/Travel/Destinations"
import TravelPackage from "../components/Travel/Package/TravelPackage"
import TravelFeedback from "../components/Travel/TravelFeedback"
import TravelSubsribe from "../components/Travel/TravelSubscribe"
import TripServices from "../components/Travel/TripServices"
import WorldTop from "../components/Travel/WorldTop"

const Travel=()=>{
return(
<>
<header>
  <TravelHeader/>  
  <TravelBottom/>
</header>
<TripServices/>
<TravelPackage/>
<TravelDestinations/>
<TravelFeedback/>
<WorldTop/>
<TravelSubsribe/>
</>
)
}
export default Travel