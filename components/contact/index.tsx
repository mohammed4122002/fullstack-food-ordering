import { Routes } from '@/constants/enums'
import React from 'react'
import MainHeading from '../main-heading'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import getTrans from '@/lib/translation'

const Contact = async () => {
   const locale = await getCurrentLocale()
         const {home}= await getTrans(locale)
         const {contact} = home
  return (
    <section className='section-gap' id={Routes.CONTACT}>
     <div className='container text-center'>
        <MainHeading subTitle={contact['Don\'tHesitate']} title={contact.contactUs}/>
     <div className='mt-8'>
        <a className='text-4xl underline text-accent'  href="tel:+2009876543">+2009876543</a>
     </div>
     </div>
    </section>
  )
}

export default Contact