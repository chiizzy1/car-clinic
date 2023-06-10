"use client"


import MockNewCar from "@/app/components/dashboard/MockNewCar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



type URL = {
  params: {
    customerId: string
  }
  searchParams: string
}




export default function CreateCar(url: URL) {
//   console.log(url.params.customerId)
  return (
    <div>
      <MockNewCar customerId={url.params.customerId} />
    </div>
  )
}