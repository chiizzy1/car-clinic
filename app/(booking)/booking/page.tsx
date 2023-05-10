"use client"

import React, { useState, useEffect } from 'react';
// import { FC } from 'react'

// const page: FC = ({}) => {

  
//   return <h1>Book An Appointment</h1>
// }

// export default page



import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const BookingPage = () => {
  

  const fetchTimeSlots = async () => {
    const availableSlots = await prisma.timeSlot.findMany({
      where: {
        availability: 'available',
        day: { in: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
        time: { gte: '09:00:00', lte: '16:55:00' },
      },
      orderBy: { time: 'asc' },
    });
    setTimeSlots(availableSlots);
  };

  const handleBooking = async (selectedSlot) => {
    try {
      await prisma.timeSlot.update({
        where: { id: selectedSlot.id },
        data: { availability: 'booked' },
      });
      // Perform additional booking-related actions if needed
      console.log('Booking successful!');
    } catch (error) {
      console.error('Booking failed:', error);
      // Handle booking failure
    }
  };

  const addMinutes = (time, minutes) => {
    const currentTime = new Date(`1970-01-01T${time}`);
    currentTime.setMinutes(currentTime.getMinutes() + minutes);
    return currentTime.toTimeString().slice(0, 5);
  };

  return (
    <div>
      <h2>Appointment Booking</h2>
      {timeSlots.length === 0 ? (
        <p>No available time slots</p>
      ) : (
        <ul>
          {timeSlots.map((slot, index) => (
            <li key={slot.id}>
              {slot.day}, {slot.time} - {addMinutes(slot.time, 30)}{' '}
              {slot.availability === 'available' ? (
                <button onClick={() => handleBooking(slot)}>Book</button>
              ) : (
                <span>Booked</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingPage;
