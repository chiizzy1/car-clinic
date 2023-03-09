import React from 'react'
import styles from '@/style';
import { servicesContent } from '@/constants';
import ServicesCard from './ServicesCard';


const Services = () => (
  <section className={`${styles.paddingY}`}> 
    <h3 className={styles.heading2}>Our Services</h3>
    <div className={` grid grid-cols-fluid gap-6`}>

    {servicesContent.map(item => <ServicesCard key={item.id} {...item} />)}
    </div>
  </section>
)

export default Services