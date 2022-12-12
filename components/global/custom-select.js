import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const CustomSelect=(props)=>{
const [Options,setOptions] = useState([])    
const [selected,setSelected] = useState('')
const [visible,setVisible] = useState(false)
const [Edited,setEdited] = useState(false)

useEffect(()=>{

setOptions(props.options)  
setSelected(props.options[0])  

},[])

function change_select(o){
    !Edited?setEdited(true):setEdited(false)
    setSelected(o)
    setVisible(false)
}

return(
<>
<div className="custom_select_wraper">
<h6 onClick={e=>visible?setVisible(false):setVisible(true)}>{Edited?selected:`${props.placeholder}`}</h6>
{visible?
<div className="csw_box">
 {
    Options.map(option=>{
        return (
         <div 
         key={uuidv4()} 
         className={`csw_box_item ${selected===option?'active':''} `}
         onClick={e=>change_select(option)}
         >{option}
         </div>
        )
    })
 }
</div>:null
}
</div>
</>
)
}
export default CustomSelect