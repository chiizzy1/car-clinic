"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "@/style";

interface BookingFormProps {}

const BookingForm: FC<BookingFormProps> = ({}) => {
  // Handle Form with Yup
  const Schema = yup.object().shape({
    firstName: yup.string().required("User Name cannot be empty!"),
    lastName: yup.string().required("User Name cannot be empty!"),
    email: yup.string().email().required("Please enter a valid email address"),
    phone: yup.number().required("Please enter a valid phone number"),
    date: yup.date().required("Please select a date"),
    time: yup.array(),
    carMake: yup.string().required("please enter car make"),
    carModel: yup.string().required("What model is your?"),
    carYear: yup.number().required("What year was your car manufactured?"),
    message: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });


  const onSubmit = (data: any) => {
    alert('clicked!')
    console.log(data);
};


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
            <label className="">
                <span>First Name</span>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="First Name..."
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className={`${styles.formErrorStyles}`}>
              First name is required.
            </p>
          )}
          </label>
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
            <label className="">
                <span>Last Name</span>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="Last name..."
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className={`${styles.formErrorStyles}`}>
              Last name is required.
            </p>
          )}
          </label>
        </div>
      </div>

      
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
            <label className="">
                <span>Phone</span>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="Phone..."
            {...register("phone")}
          />
          {errors.phone && (
            <p className={`${styles.formErrorStyles}`}>
              Please enter a valid phone number.
            </p>
          )}
          </label>
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
            <label className="">
                <span>Email</span>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="Email..."
            {...register("email")}
          />
          {errors.email && (
            <p className={`${styles.formErrorStyles}`}>
              Please enter a valid email address.
            </p>
          )}
          </label>
        </div>
      </div>



      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
            <label className="">
                <span>Date</span>
          <input
            className={`${styles.formInputStyles}`}
            type="date"
            {...register("date")}
          />
          {errors.date && (
            <p className={`${styles.formErrorStyles}`}>
              Please choose a date!
            </p>
          )}
          </label>
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
            <label className="">
                <span>Time</span>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="select time"
            {...register("time")}
          />
          {errors.time && (
            <p className={`${styles.formErrorStyles}`}>
              Please select a time!
            </p>
          )}
          </label>
        </div>
      </div>


      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full sm:w-1/3 px-3 mb-6 md:mb-0">
            <label className="">
                <span>Vehicle Make</span>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="e.g Mercedes Benz..."
            {...register("carMake")}
          />
          {errors.carMake && (
            <p className={`${styles.formErrorStyles}`}>
              Please enter your car manufacturer name!
            </p>
          )}
          </label>
        </div>
        <div className="w-full sm:w-1/3 px-3 mb-6 sm:mb-0">
            <label className="">
                <span>Car Model</span>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="e.g GLE 63..."
            {...register("carModel")}
          />
          {errors.carModel && (
            <p className={`${styles.formErrorStyles}`}>
              Please enter your car model
            </p>
          )}
          </label>
        </div>
        <div className="w-full sm:w-1/3 px-3 mb-6 sm:mb-0">
            <label className="">
                <span>Year</span>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="e.g 2022..."
            {...register("carYear")}
          />
          {errors.carYear && (
            <p className={`${styles.formErrorStyles}`}>
              please enter the year your car was manufactured!
            </p>
          )}
          </label>
        </div>
      </div>


      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 sm:mb-0">
            <label className="">
                <span>Reason for Appointment</span>
          <textarea
            className={`${styles.formInputStyles}`}
            placeholder="Share any additional information with us."
            {...register("message")}
          />
          {errors.message && (
            <p className={`${styles.formErrorStyles}`}>
              cannot be blank!
            </p>
          )}
          </label>
        </div>
      </div>
      

    <div className="flex items-center justify-center w-full">
    <button type="submit" className={`bg-green-300 text-white px-6 py-2 rounded-sm`}>Submit</button>
    </div>
    </form>
  );
};

export default BookingForm;
