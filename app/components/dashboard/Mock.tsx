"use client";

import { FC } from "react";
import Axios, { AxiosError } from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import styles from "@/style";
import { toast } from "../ui/toast";
import axios from "axios";
import { useRouter } from "next/navigation";

interface MockProps {}



const Mock: FC<MockProps> = ({}) => {

  const { push } = useRouter();

  // Handle Form with Yup
  const Schema = yup.object().shape({
    firstName: yup.string().required("User Name cannot be empty!"),
    lastName: yup.string().required("User Name cannot be empty!"),
    email: yup.string().email().required("Please enter a valid email address"),
    phone: yup.number().required("Please enter a valid phone number"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(Schema) });


 let newCustomerToastId: string

  const { mutate, error, isLoading, isError } = useMutation(
    async(data)=>{
      return await axios.post("/api/customers/createNew", data)
    }, {
    onSuccess: (response) => { 
      toast({
        title: 'success creating new customer',
        message: 'okay.',
        type: 'success',
      })
      push("/dashboard/customers")
     },
     onError:(error) => {
      if (error instanceof AxiosError) {
        toast({
          title: 'Error creating new customer',
          message: `${error?.response?.data.error} ⚠️`,
          type: "error",
        })
      }
     }
  })

  const handleFormSubmit = (data: any) => {
    mutate(data)
  };

  


  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
          <p className="pb-2">First Name</p>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="First Name..."
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className={`text-red-400 text-xs italic`}>
              First name is required.
            </p>
          )}
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
          <p className="pb-2">Last Name</p>
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
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
          <p className="pb-2">Phone</p>
          <input
            className={`${styles.formInputStyles}`}
            type="tel"
            placeholder="Phone..."
            {...register("phone")}
          />
          {errors.phone && (
            <p className={`${styles.formErrorStyles}`}>
              Please enter a valid phone number.
            </p>
          )}
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
          <p className="pb-2">Email</p>
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
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <button
          type="submit"
          className={`bg-green-300 text-white px-6 py-2 rounded-sm`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Mock;
