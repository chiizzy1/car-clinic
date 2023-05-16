import { FC } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


interface CalenderFormProps {
  
}

const CalenderForm: FC<CalenderFormProps> = ({}) => {
  return <div className='flex items-center justify-center'>
        <Calendar minDate={new Date()} view="month" onClickDay={(date)=>console.log(date)
        } />
  </div>
}

export default CalenderForm