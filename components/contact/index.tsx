import { Routes } from '@/constants/enums'
import React from 'react'
import MainHeading from '../main-heading'

const Contact = () => {
  return (
    <section className='section-gap' id={Routes.CONTACT}>
     <div className='container text-center'>
        <MainHeading subTitle="Don't Hesitate" title='Contact Us'/>
     <div className='mt-8'>
        <a className='text-4xl underline text-accent'  href="tel:+2009876543">+2009876543</a>
     </div>
     </div>
    </section>
  )
}

export default Contact