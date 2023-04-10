"use client";

import styles from "@/style";
import Image from "next/image";

const ServicesCard = ({ content, title, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-2 border-2 border-purple-500 max-w-[300px] rounded-md min-h-[10em]">
      <h4 className="text-dimPurple ">{title}</h4>

      <p className="max-w-xl text-center font-normal text-sm text-black">
        {content}
      </p>
      <Image src={icon} alt="icon" width={40} height={40} />
    </div>
  );
};

export default ServicesCard;
