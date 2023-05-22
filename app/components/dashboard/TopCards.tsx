import { FC } from "react";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";
import { RxPerson } from "react-icons/rx";

interface TopCardsProps {}

const TopCards: FC<TopCardsProps> = ({}) => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 p-4">
      <div className="lg:col-span-1 col-span-1 bg-white shadow-lg flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col justify-between">
          <p className="">Users</p>
          <p className="text-gray-600 py-2">2000</p>
          <span className="text-xs text-gray-600">See all users</span>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex text-red-500">
            <TiArrowSortedDown />
            <span>-5%</span>
          </div>
          <div className="p-2 bg-red-300 flex items-center justify-center rounded-sm">
            <RxPerson />
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 col-span-1 bg-white shadow-lg flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col justify-between">
          <p className="">Users</p>
          <p className="text-gray-600 py-2">2000</p>
          <span className="text-xs text-gray-600">See all users</span>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex text-green-500">
            <TiArrowSortedDown />
            <span>-5%</span>
          </div>
          <div className="p-2 bg-red-300 flex items-center justify-center rounded-sm">
            <RxPerson />
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 col-span-1 bg-white shadow-lg flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col justify-between">
          <p className="">Users</p>
          <p className="text-gray-600 py-2">2000</p>
          <span className="text-xs text-gray-600">See all users</span>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex text-green-500">
            <TiArrowSortedUp />
            <span>+25%</span>
          </div>
          <div className="p-2 bg-red-300 flex items-center justify-center rounded-sm">
            <RxPerson />
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 col-span-1 bg-white shadow-lg flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col justify-between">
          <p className="">Users</p>
          <p className="text-gray-600 py-2">2000</p>
          <span className="text-xs text-gray-600">See all users</span>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex text-green-500">
            <TiArrowSortedUp />
            <span>-5%</span>
          </div>
          <div className="p-2 bg-red-300 flex items-center justify-center rounded-sm">
            <RxPerson />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
