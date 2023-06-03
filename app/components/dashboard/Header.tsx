import { FC } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { RiHome2Line } from "react-icons/ri";

interface HeaderProps {
  name: string
}

const Header: FC<HeaderProps> = ({name}) => {
  return (
    <div className="flex justify-between pt-4">
      <div className="p-4">
        <h2 className="font-medium">Welcome Back, {name}</h2>
      </div>

      <div className="p-4 flex">
        <div className="relative flex justify-center items-center">
          <IoMdNotificationsOutline className="text-2xl cursor-pointer ml-4" />
          <div className="bg-red-600 text-xs text-white flex items-center justify-center  p-[2px] rounded-full absolute top-[-6px] right-[-6px]">
            22
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <BiMessage className="text-2xl cursor-pointer ml-4" />
          <div className="bg-red-600 text-xs text-white flex items-center justify-center p-[2px] rounded-full absolute top-[-6px] right-[-6px]">
            10
          </div>
        </div>

        <RiHome2Line className="text-2xl  cursor-pointer ml-4" />
      </div>
    </div>
  );
};

export default Header;
