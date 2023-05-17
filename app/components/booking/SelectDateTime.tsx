"use client";

import { FC, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { add, format } from "date-fns";

interface SelectDateTimeProps {}

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const SelectDateTime: FC<SelectDateTimeProps> = ({}) => {
  const [session, setSession] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });

  const getTimes = () => {
    if (!session.justDate) return;

    const { justDate } = session;

    const beginning = add(justDate, { hours: 9 });
    const end = add(justDate, { hours: 17 });
    const interval = 30; //in minutes

    const times = [];

    for (let i = beginning; i < end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();

  console.log(session.dateTime);

  return (
    <div>
      <DatePicker
        selected={session.justDate}
        dateFormat="dd-MM-yy"
        minDate={new Date()}
        className="bg-sky-700 text-white rounded-md w-full h-[5rem] text-center cursor-pointer"
        placeholderText="select date"
        filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
        onChange={(date: Date) => {
          setSession((prevDetails) => ({ ...prevDetails, justDate: date }));
          console.log(date);
        }}
      />

      {times && <h4 className="font-medium text-sm">All available sessions</h4>}
      <div className="grid grid-cols-tile gap-6 mt-6">
        {times?.map((time, i) => (
          <div key={i} className="bg-green-200 rounded-lg py-2 text-center">
            <button
              type="button"
              onClick={() =>
                setSession((prevDetails) => ({
                  ...prevDetails,
                  dateTime: time,
                }))
              }
            >
              {format(time, "kk:mm")}
            </button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectDateTime;
