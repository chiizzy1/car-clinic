"use client";

import styles from "@/style";
import Image from "next/image";



const ServicesCard = ({content, title, icon}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]"> 

      <Image src={icon} alt="icon" width={100} height={100} />

      <h4 className="text-dimPurple ">
        {title}
      </h4>

      <p className={`${styles.paragraph}`}>
        {content}
      </p>
    </div>
  )
}

export default ServicesCard