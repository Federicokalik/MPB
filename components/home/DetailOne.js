import DetailLeft from "./DetailOne/DetailLeft"
import DetailRight from "./DetailOne/DetailRight"

const HomeDetailOne=()=>{
return(
<>
<div className="everything-area positioning mt-100">
<div className="container">
<div className="row justify-content-between align-items-center">

<DetailLeft/>

<DetailRight/>

</div>
</div>
<img className="shape everything-left" src="/assets/images/shape/everything-hrrd-left.png" alt=""/>
</div>
</>
)
}

export default HomeDetailOne