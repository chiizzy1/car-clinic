import React from 'react'
import styles from '@/style';
import { servicesContent } from '@/constants';
import ServicesCard from './ServicesCard';


const Services = () => (
  <section className={`${styles.paddingY} grid grid-cols-fluid gap-6`}> 
    {servicesContent.map(item => <ServicesCard key={item.id} {...item} />)}
  </section>
)

export default Services