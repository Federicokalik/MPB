import CounupItem from "./countupitem"
import { useRef } from "react"
import { useIsVisible } from 'react-is-visible'


const AllCounter=()=>{
const nodeRef = useRef()
const isVisible = useIsVisible(nodeRef)


return(
<>
<div className="counter-area pb-100">
<div className="container" ref={nodeRef}>
<div className="row">
<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="counter-wrap">

{isVisible?
<div className="row">
    <CounupItem title="Happy Customer" countUp={20000}/>
    <CounupItem title="Five Star Review" countUp={5000}/>
    <CounupItem title="Award Winner" countUp={100}/>
    <CounupItem title="Country Using Our Service" countUp={50}/>
</div>:null
}

</div>
</div>
</div>
</div>
</div>
</>
)
}
export default AllCounter