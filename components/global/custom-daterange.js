import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from 'react';

const CustomDatePicker=()=>{
const [show,setShow] = useState()
const [dates,setDates] = useState({
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
})

function handleSelect(ranges){
  setDates({
    startDate: ranges.selection.startDate,
    endDate: ranges.selection.endDate,
    key: 'selection',
  })
}

let today = new Date()


return(
<>
<div className="custom_date_picker">
    <div className="custom_date_display">
      <div>
      <span>{new Date(dates.startDate).toDateString()}</span>
      <span>{new Date(dates.endDate).toDateString()}</span>
      </div>
      <div onClick={e=>show?setShow(false):setShow(true)} className="cl_toggle">
        <i className="bi bi-calendar-event"></i>
      </div>
    </div>
    {show?
    <div className='custom_date_calender'>
      <DateRange
       ranges={[dates]}
       onChange={handleSelect}
      />
    </div>:null
    }
</div>
</>
)
}
export default CustomDatePicker