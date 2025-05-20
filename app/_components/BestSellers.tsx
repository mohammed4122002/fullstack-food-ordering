import MainHeading from '@/components/main-heading'
import Menu from '@/components/menu'
import { db } from "../../lib/prisma"

import React from 'react'

const  BestSellers =async () => {
 
  const bestSellers = await db.product.findMany({
   
    include: {
      extras: true,
      sizes: true,
    },
  })
  
  return (
    <section>
        <div className='container'>

            <div className='text-center mb-4'>  <MainHeading subTitle='checkout' title='Our Best Sellers'/> </div>
            
            <Menu items={bestSellers} />

        </div>
    </section>
  )
}

export default BestSellers