import Link from "next/link"
import { useState } from "react"
import AboutWorkItem from "../AboutWork/Item"
import { v4 as uuidv4 } from "uuid"

const AboutWorkGrid=()=>{
const [Tab,setTab] = useState('all')
const [Items,setItems] = useState([
    {
        tab: ["all","ui"],
        img: "/assets/images/about/latest-3.png",
        name: "UI/UX & Dev",
        title: "Gadding Market eCommerce Website Design and Development"
    },
    {
        tab: ["all","development"],
        img: "/assets/images/about/latest-3.png",
        name: "UI/UX & Dev",
        title: "Gadding Market eCommerce Website Design and Development"
    },
    {
        tab: ["all","ui"],
        img: "/assets/images/about/latest-3.png",
        name: "Development",
        title: "Gadding Market eCommerce Website Design and Development"
    },
    {
        tab: ["all","graphic"],
        img: "/assets/images/about/latest-3.png",
        name: "Graphic",
        title: "Gadding Market eCommerce Website Design and Development"
    },
    {
        tab: ["all","motion"],
        img: "/assets/images/about/latest-3.png",
        name: "Motion",
        title: "Gadding Market eCommerce Website Design and Development"
    },
    {
        tab: ["all","branding"],
        img: "/assets/images/about/latest-3.png",
        name: "Branding",
        title: "Gadding Market eCommerce Website Design and Development"
    }
])

function setTTab(t){
    setTab(t)
    setItems([...Items])
}

return(
<>
<div className="latest-work-area pt-100 pb-76">
<div className="container">
<div className="row justify-content-center">
<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
        <h1>Our <span>Latest</span> Work</h1>
        <p className="latest-text">We Create custom landing pages with Saasland and converts more visitors than any website. visually appearing.</p>
    </div>
    <div className="work-link text-center">
        <ul>
            <li className={`filter ${Tab==='all'?'active':''}`} onClick={e=>setTTab('all')}>All</li>
            <li className={`filter ${Tab==='ui'?'active':''}`} onClick={e=>setTTab('ui')}>UI/UX</li>
            <li className={`filter ${Tab==='development'?'active':''}`} onClick={e=>setTTab('development')}>Development</li>
            <li className={`filter ${Tab==='graphic'?'active':''}`} onClick={e=>setTTab('graphic')}>Graphic Design</li>
            <li className={`filter ${Tab==='motion'?'active':''}`} onClick={e=>setTTab('motion')}>Motion</li>
            <li className={`filter ${Tab==='branding'?'active':''}`} onClick={e=>setTTab('branding')}>Branding</li>
        </ul>
    </div>
</div>
</div>
<div className="row mt-50">

{Items.map(list=>{
return(
<>    
{list.tab.includes(Tab)?
<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp">
  <AboutWorkItem
   key={uuidv4()}
   img={list.img}
   name={list.name}
   title={list.title}
  />
</div>:null
}
</>
)
})}

</div>
</div>
</div>
</>
)
}
export default AboutWorkGrid