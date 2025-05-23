import MainHeading from '@/components/main-heading'
import Menu from '@/components/menu'


import React from 'react'

import { getBestSellers } from '@/server/db/Products'

const  BestSellers =async () => {
 
 const bestSellers = await  await getBestSellers(3)
  
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