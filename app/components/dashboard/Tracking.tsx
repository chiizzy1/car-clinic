"use client";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import styles from "@/style";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
import { FC } from "react";
import { Button } from "@/app/components";

interface TrackingProps {}


const Tracking: FC<TrackingProps> = ({}) => {
  // const trackData = async (id: any) => {
  //   const { data } = await axios.post(`/api/track/${id}`);
  //   return data.trackData;
  // };

  // const { mutate, error, isLoading, isError } = useMutation(
  //   ["track"],
  //   trackData,
  //   {
  //     onSuccess: (successData) => {
  //       console.log(successData);
  //     },
  //   }
  // );

  // const Schema = yup.object().shape({
  //   trackId: yup.string().required("please enter track id!!"),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ resolver: yupResolver(Schema) });

  // const handleFormSubmit = (data: any) => {
  //   console.log(data);
  //   // mutate(data)
  // };
  //   if (isLoading) {
  //     return <h1> Loading...</h1>;
  //   }

  //   if (isError) {
  //     return <div>Error!</div>;
  //   }

  let isLoading = true

  return (
    <div>
      {/* <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full sm:w-full px-3 mb-6 md:mb-0">
            <p className="pb-2">trackId</p>
            <input
              className={`${styles.formInputStyles}`}
              type="text"
              placeholder="trackId..."
              {...register("trackId")}
            />
            {errors.trackId && (
              <p className={`${styles.formErrorStyles}`}>
                Please enter a valid phone number.
              </p>
            )}
          </div>
        </div>
</form> */}
        <div className="flex items-center justify-center w-full">
          <h3>Btuhjkd</h3>
          <Button
            variant="default"
            className="items-center"
            isLoading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? "Registering New Car" : "Register New Car"}
          </Button>
        </div>
      
    </div>
  );
};

export default Tracking;