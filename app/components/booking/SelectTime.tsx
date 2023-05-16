"use client"

import { FC, useState } from 'react'

interface SelectTimeProps {
  
}

const SelectTime: FC<SelectTimeProps> = ({}) => {

    const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');


  // Generate allTime array for a specific date (e.g., "2023-05-18")
// const generateAllTimeSlots = (date) => {
//     const startTime = new Date(`${date}T09:00:00`);
//     const endTime = new Date(`${date}T17:00:00`);
//     const timeSlots = [];
  
//     while (startTime <= endTime) {
//       timeSlots.push(new Date(startTime));
//       startTime.setMinutes(startTime.getMinutes() + 30); // Add 30 minutes
//       startTime.setMinutes(startTime.getMinutes() + 5); // Add 5 minutes break
//     }
  
//     return timeSlots;
//   };
  
  // Example usage
//   const allTimeSlots = generateAllTimeSlots('2023-05-18');
  
  // Store allTimeSlots in the TimeSlot model
//   const timeSlot = await prisma.timeSlot.create({
//     data: {
//       date: new Date('2023-05-18'),
//       allTime: allTimeSlots,
//     },
//   });
  

  return (
    <div>
        {/* <label>
                Select Time:
                <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                  <option value="">Select a time</option>
                  {allTimeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label> */}
    </div>
  )
}

export default SelectTime