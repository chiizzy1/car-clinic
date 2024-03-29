"use client";

import { FC } from "react";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import styles from "@/style";
import { toast } from "../ui/toast";
import { useRouter } from "next/navigation";
import { createCar } from "@/helpers/customers";
import { Button } from "../ui/Button";

interface MockProps {
    customerId: string
}

const MockNewCar: FC<MockProps> = ({customerId}) => {
    // console.log(customerId)
  const { push } = useRouter();

  // Handle Form with Yup
  const Schema = yup.object().shape({
    carMake: yup.string().required("please enter car make"),
    carModel: yup.string().required("What model is your?"),
    carYear: yup.number().required("What year was your car manufactured?"),
    plateNumber: yup.string().required("enter plate number"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(Schema) });

  const createNewCar: any = async (info: any) => {
    console.log(info)
    const {data} = await axios.post(`/api/cars/createNew`, {...info, ownerId: customerId})
    return data
  }

  const { mutate, error, isLoading, isError } = useMutation(createNewCar, {
    onSuccess: (successData) => {
      console.log(successData);
      
      toast({
        title: "success creating new car",
        message: "okay",
        type: "success",
      });
      push(`/dashboard/customers/${customerId}`);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          title: "Error creating new customer",
          message: `${error?.response?.data.error} ⚠️`,
          type: "error",
        });
      }

      console.log(error);
      
    },
  });

  const handleFormSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
          <p className="pb-2">Vehicle Make</p>
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
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
          <p className="pb-2">Car Model</p>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="e.g GLE 63..."
            {...register("carModel")}
          />
          {errors.carModel && (
            <p className={`text-red-500 ${styles.formErrorStyles}`}>
              Please enter your car model
            </p>
          )}
        </div>
      </div>


      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
          <p className="pb-2">plate Number</p>
          <input
            className={`${styles.formInputStyles}`}
            type="text"
            placeholder="e.g GLE 63..."
            {...register("plateNumber")}
          />
          {errors.plateNumber && (
            <p className={`text-red-500 ${styles.formErrorStyles}`}>
              Please enter your car model
            </p>
          )}
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
          <p className="pb-2">Year</p>
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
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <Button
          variant="default"
          className="items-center"
          isLoading={isLoading}
          disabled={isLoading}
        >{ isLoading ? "Registering New Car" :"Register New Car"}</Button>
      </div>
    </form>
  );
};

export default MockNewCar;
