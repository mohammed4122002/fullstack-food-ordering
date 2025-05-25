'use client';
import { selectCartItems } from '@/features/cart/cartSlice'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'

const CartItems = () => {
    const Cart = useAppSelector(selectCartItems)
  return (
    <div>CartItems</div>
  )
}

export default CartItems