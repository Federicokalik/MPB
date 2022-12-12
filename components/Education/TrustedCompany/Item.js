import Link from "next/link"

const TrustedCompanList=(props)=>{
return(
<>
<div className="edu-client-logobox">
    <Link href="/">
    <a>
        <img src={props.img} alt=""/>
    </a>
    </Link>
</div>
</>
)
}
export default TrustedCompanList