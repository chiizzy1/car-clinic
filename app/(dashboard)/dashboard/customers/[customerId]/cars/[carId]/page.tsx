"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";







type URL = {
  params: {
    customerId: string
    carId: string
  }
  searchParams: string
}
//Fetch All posts
// const fetchDetails = async (customerId: string) => {
//   const {data} = await axios.get(`/api/customers/${customerId}`)
//   return data.customerData
// }



export default function CarDetail(url: URL) {
  const {customerId, carId } = url.params
  // const { data, isLoading } = useQuery({
  //   queryKey: ["customer"],
  //   queryFn: () => fetchDetails(url.params.customerId),
  // })
  // if (isLoading) return "Loading"
  // console.log(data)
  return (
    <div>dynamic car details fetch customer: {customerId}, car: {carId} </div>
  )
}