import FetchAllCars from "@/app/components/dashboard/FetchAllCars";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <div>
    <h1>See all cars in our database</h1>

    <FetchAllCars />
  </div>;
};

export default page;
