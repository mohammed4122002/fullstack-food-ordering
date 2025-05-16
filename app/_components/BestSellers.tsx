import MainHeading from '@/components/main-heading'
import { formatCurrency } from '@/lib/formatters'
import Image from 'next/image'
import React from 'react'

const BestSellers = () => {
  const bestSellers = [
    {
      id : crypto.randomUUID(),
      name : 'pizza 1',
      description : "this is a description of product 1",
      basePrise : 100,
      image : "/assets/3.png"
    },
    {
      id : crypto.randomUUID(),
      name : 'Pizza 2',
      description : "this is a description of product 2",
      basePrise : 50,
      image : "/assets/3.png"
    },
    {
      id : crypto.randomUUID(),
      name : 'Pizza 3',
      description : "this is a description of product 3",
      basePrise : 8,
      image : "/assets/3.png"
    },
  ]
  return (
    <section>
        <div className='container'>

            <div className='text-center mb-4'>  <MainHeading subTitle='checkout' title='Our Best Sellers'/> </div>
            
            <ul className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
              {bestSellers.map((item) => (
                <li key={item.id} >
                   <div className='relative w-48 h-48 mx-auto'>
                    <Image src={item.image} alt={item.name} fill className='object-cover' />
                   </div>
                   <div className='flex items-center justify-between mb-4'>
                    <h4 className='font-semibold text-xl my-3'>{item.name}</h4>
                    <strong className='text-accent text-lg'>
                     {formatCurrency(item.basePrise)}
                    </strong>
                   </div>
                    <p className='text-sm text-muted-foreground'>{item.description}</p>
                  </li>
              ))}
            </ul>
        </div>
    </section>
  )
}

export default BestSellers