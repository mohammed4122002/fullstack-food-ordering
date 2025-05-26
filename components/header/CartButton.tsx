"use client"

import React from 'react'
import Link from '../Link'
import { ShoppingCart } from 'lucide-react'
import { Routes } from '@/constants/enums'
import { useAppSelector } from '@/redux/hooks'
import { selectCartItems } from '@/features/cart/cartSlice'
import { getCartQuantity } from '@/lib/cart'

const CartButton = () => {
  const cart = useAppSelector(selectCartItems)

  return (
   <Link href={`/${Routes.CART}`} className='block relative  group'>
    <span className='absolute -top-4 start-4 w-5 h-5 text-sm bg-primary rounded-full text-white text-center'>{getCartQuantity(cart)}</span>
    <ShoppingCart    className={`text-accent group-hover:text-primary duration-200 transition-colors !w-6 !h-6`} />
   </Link>
  )
}

export default CartButton