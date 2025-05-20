import React from 'react'
import Image from 'next/image'
import { formatCurrency } from '@/lib/formatters'
import AddToCartButton from './add-to-cart-button';
import type { ProductWithRelations } from '@/types/product';

const MenuItem =({
  item,
}: {
  item:ProductWithRelations
}) => {
  return (
   <li  className='flex flex-col items-center justify-between p-4 bg-muted rounded-lg shadow-md hover:scale-105 transition-all duration-300'>
          <div className="relative w-48 h-48 mx-auto">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full  mb-4">
            <h4 className="font-semibold text-xl my-3">{item.name}</h4>
            <strong className="text-accent text-lg ">
              {formatCurrency(item.basePrice)} 
            </strong>
          </div>
          <p className="text-sm text-muted-foreground">{item.description}</p>
          <AddToCartButton item={item} />
        </li>
  )
}

export default MenuItem