
const WorldTop=()=>{
return(
<>
<div className="trip-map-area mt-100 d-lg-block d-none d-sm-none">
<div className="container">
<div className="row">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="trip-section-title text-center">
            <h1>World Top Visiting <br/> place in <span>2022</span></h1>
        </div>
    </div>
</div>
<div className="row mt-50">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="trip-map-wrap text-center">
            <img className="w-100" src="assets/images/map-trip.png" alt=""/>
            <div className="trip-map-country country-1">
                <img src="assets/images/map-country-1.png" alt=""/>
                <div className="trip-map-country-content">
                    <h2>Mexico</h2>
                    <p>03 Tour</p>
                </div>
            </div>
            <div className="trip-map-country country-2">
                <img src="assets/images/map-country-2.png" alt=""/>
                <div className="trip-map-country-content">
                    <h2>France</h2>
                    <p>05 Tour</p>
                </div>
            </div>
            <div className="trip-map-country country-3">
                <img src="assets/images/map-country-3.png" alt=""/>
                <div className="trip-map-country-content">
                    <h2>Australia</h2>
                    <p>02 Tour</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<h1 className="container-text places-text">Places</h1>
<img className="trip-map-shape" src="assets/images/shape/trip-map-shape.png" alt=""/>
</div>

<div className="trip-map-area mt-100 d-lg-none d-block d-sm-block">
	<div className="container">
		<div className="row">
			<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="trip-section-title text-center">
					<h1>World Top Visiting <br/> place in <span>2022</span></h1>
				</div>
			</div>
		</div>
		<div className="row mt-50">
			<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="trip-map-wrap text-center">
					<img className="w-100" src="assets/images/map-trip-mobile.png" alt=""/>
				</div>
			</div>
		</div>
	</div>
</div>


</>
)
}
export default WorldTop