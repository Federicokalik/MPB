import { useState } from 'react';
import TravelDetail from "../../constant/Travel/Detail";
import CustomSelect from "../global/custom-select";
import CustomDatePicker from '../global/custom-daterange';

const TravelBottom=()=>{
const [Location,setLocation] = useState([])


const Locations=[
    "Cox’s Bazar",
    "Barlin",
    "Solt Lack",
    "Sri Lanka"
]

const prices=[
    "$300 - $600",
    "$700 - $1200",
    "$1300 - $1800",
    "$1800 - $2000"
]

function handleSelect(date){
    console.log(date); // native Date object
}

return(
<>
<div className="tri-hero-style">
<div className="florting-shape-2 d-none d-lg-block  position-absolute ">
    <img src="assets/images/trip/shapes/tri-hero-shape1.svg" alt=""/>
</div>
<div className="container">
    <div className="row justify-content-lg-between align-items-center">
        <div className="col-xxl-5 col-lg-6 order-1 order-lg-0">
            <div className="tri-hero-content">
            <h2 className="tri-hero-title">
                    {TravelDetail.Title} <span className="position-relative">{TravelDetail.TitleBordered} <img src="/assets/images/trip/shapes/text-underline-vactor.svg" className="underline-vactor" alt=""/></span>
            </h2>
            <p>{TravelDetail.subTitle}</p>
            </div>
        </div>
        <div className="col-lg-6 col-md-9 order-0 order-lg-1 position-relative tri-hero-figure-trans py-4">
            <div className="tri-hero-label position-absolute">
                <img src={TravelDetail.LabelImage} alt=""/>
            </div>
            <div className="florting-shape-1  position-absolute ">
                <img src="/assets/images/trip/shapes/tri-hero-shape1.svg" alt=""/>
            </div>
            <div className="tri-hero-figure position-relative">
                <img src={TravelDetail.CoverImage} alt="" className="img-fluid"/>
            </div>
        </div>
    </div>
</div>
</div>


<div className="tri-explore-bar">
<div className="container">
<div className="row justify-content-end ">
<div className="col-xl-9 tri-explore-bar-row">
<form action="#" method="post">
    <div className="tri-maulti-searchbar d-flex align-items-center justify-content-lg-between gap-4 flex-lg-nowrap flex-wrap">
        <div className="d-flex gap-lg-5 gap-2 gap-sm-3 flex-wrap flex-sm-nowrap">
            <div className="filter-single location-select">
                <h5>Location <i className="bi bi-chevron-down"></i></h5>
                <CustomSelect options={Locations} placeholder="Pick Location" />
            </div>
            <div className="filter-single date-input">
                <h5>Date <i className="bi bi-chevron-down"></i></h5>

                <CustomDatePicker/>
                    
            </div>
            <div className="filter-single location-select">
                    <h5>Avg. Price <i className="bi bi-chevron-down"></i></h5>
                    <CustomSelect options={prices} placeholder="Price Range" />
            </div>
        </div>
        
        <div className="submit-btn">
            <button className="tri-submit-btn tri-btn-fill">Explore <i className="bi bi-arrow-right"></i></button>
        </div>
    </div>
</form>
</div>
</div>
</div>
</div>

</>
)
}
export default TravelBottom