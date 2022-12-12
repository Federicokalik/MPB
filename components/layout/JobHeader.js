import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import NavConstant from "../../constant/HeaderConstant/NavConstant"
import { useIsVisible } from "react-is-visible"

const JobHeader=()=>{
const navToggle = useRef(null)
const navHambargar = useRef(null)

const navRef = useRef()
const isVisible = useIsVisible(navRef)



// toggle nav
async function ToggleNav(){
    try{
    navHambargar.current.classList.toggle('h-active')
    navToggle.current.classList.toggle('slidenav')
    }catch(err){}
}

// toggle sub menu
async function ToggleSubMenu(e){
    try{
    if(e.target.nextSibling.style.display==="block"){
        e.target.nextSibling.style.display="none"
        e.target.innerHTML="+"
    }else{
        e.target.nextSibling.style.display="block"
        e.target.innerHTML="-"
    }
    }catch(err){}
}
    

    
return(

<>
<nav ref={navRef}>
<div className={`header-menu-area ${isVisible?'':'sticky'} `}>
<div className="container">
<div className="row align-items-center">
    <div className="col-xl-2 col-lg-2 col-sm-6 col-6">
        <div className="logo text-left">
            <Link href="/"><a><Image src={NavConstant.Logo} alt="" width="173" height="50px"/></a></Link>
        </div>
    </div>
    <div className="col-xl-7 col-lg-7 col-sm-6 col-6">
        <div className="hidden-lg hamburger" ref={navHambargar} onClick={ToggleNav}>
            <span className="h-top"></span>
            <span className="h-middle"></span>
            <span className="h-bottom"></span>
        </div>
        <nav className="main-nav" ref={navToggle}>
            <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                <Link href="/"><a><Image src={NavConstant.Logo} alt="" width="173" height="50px"/></a></Link>
            </div>
            <ul>
                <li className="has-child-menu">
                    <a className="active">Home</a>
                    <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                    <ul className="sub-menu">
                        <li><Link href="/"><a>Sass</a></Link></li>
                        <li><Link href="/travel"><a>Travel</a></Link></li>
                        <li><Link href="/education"><a>Education</a></Link></li>
                        <li><Link href="/job"><a>Job Finding</a></Link></li>
                        <li><Link href="/agency"><a>Digital Agency</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/services"><a>Services</a></Link></li>
                <li>
                    <Link href="/"><a>Blog</a></Link>
                    <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                    <ul className="sub-menu">
                        <li><Link href="/blog"><a>Blog</a></Link></li>
                        <li><Link href="/blog-detail"><a>Blog Details</a></Link></li>
                    </ul>
                </li>
                <li><a>Contact </a></li>
            </ul>
            <div className="menu-btn-wrap d-block d-lg-none">
                <Link href="/"><a className="menu-reg" href="#">Register</a></Link>
                <Link href="/"><a className="common-btn btn-style-1" href="#">Sing In</a></Link>
            </div>
        </nav>
    </div>
    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
        <div className="menu-btn-wrap">
            <Link href="/"><a className="menu-reg">Register</a></Link>
            <Link href="/"><a className="common-btn btn-style-1">Sing In</a></Link>
        </div>
    </div>
</div>
</div>
</div>
</nav>
</>
)
}
export default JobHeader