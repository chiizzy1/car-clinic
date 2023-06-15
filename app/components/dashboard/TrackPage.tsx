"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "@/style";
import { customerCare } from "@/assets";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { FC } from "react";
import { Button, Table, TrackUI } from "@/app/components";
import FAQ from "@/app/components/Track/FAQ";

interface TrackPageProps {}

// const info = [
//     {
//       id: 1,
//       carId: 1,
//       description: "Engine tune-up",
//       estimatedCost: 300,
//       status: "Check-In",
//     },
//   ];

const TrackPage: FC<TrackPageProps> = ({}) => {
  const trackData = async (id: any) => {
    const { data } = await axios.post(`/api/track/${id}`);
    return data.trackData;
  };

  const { mutate, error, isLoading, isError } = useMutation(
    ["track"],
    trackData,
    {
      onSuccess: (successData) => {
        console.log(successData);
      },
    }
  );

  const Schema = yup.object().shape({
    trackId: yup.string().required("please enter track id!!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const handleFormSubmit = (data: any) => {
    console.log(data);
    // mutate(data)
  };
  //   if (isLoading) {
  //     return <h1> Loading...</h1>;
  //   }

  //   if (isError) {
  //     return <div>Error!</div>;
  //   }

  return (
    <div>
      <h3 className="text-2xl text-dimPurple font-bold sm:pb-9 pb-6 w-full text-center">
        TRACK YOUR CAR
      </h3>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
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

        <div className="flex items-center justify-center w-full">
          <Button
            variant="default"
            className="items-center"
            isLoading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? "Registering New Car" : "Register New Car"}
          </Button>
        </div>
      </form>

      {/* <FAQ /> */}

      {/* <h4 className="text-dimPurple font-bold sm:py-9 py-6 w-full text-center">Tracking Details</h4>
          <Table info={info} />

          <div className="flex gap-8 sm:flex-row flex-col sm:py-9 py-6">
            <div className="w-full rounded-md bg-green-100 p-6">
            <h4 className="font-semibold text-center">Car Repair Status</h4>
              <TrackUI status={info[0].status} />
            </div>

            <div className="w-full bg-sky-200 border rounded-md p-6">
              <h4 className="font-semibold text-center">Not Satisfied?</h4>
              <div className="flex items-center justify-center sm:py-9 py-6">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src={customerCare}
                    alt="customer care"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-[.8rem] ml-8">
                  Have any Complaints!
                  <br /> Our agents are always online 24/7 to attent to you.
                </p>
              </div>
            </div>
          </div> */}
    </div>
  );
};

export default TrackPage;
