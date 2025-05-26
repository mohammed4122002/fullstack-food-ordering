import type { CartItem } from "@/features/cart/cartSlice";




export const getCartQuantity = (cart: CartItem[]) => {
  return cart.reduce((quantity, item) => item.quantity! + quantity, 0);
};

export const getCartItemQuantity = (cart: CartItem[], itemId: string) => {
  const item = cart.find((item) => item.id === itemId);
  return item ? item.quantity! : 0;
}
export const getSubTotal = (cart : CartItem[])=>{
return cart.reduce((total , cartItem)=>{
const extrasTotal = cartItem.extras?.reduce((sum , extra)=>sum+(extra.price || 0) , 0)
const itemTotal = cartItem.basePrice + (extrasTotal || 0) + (cartItem.size?.price || 0)
return total + ( itemTotal* (cartItem.quantity!))
}, 0

)
}
export const deliveryfee = 5;
export const getTotalAmount = (cart: CartItem[]) => {
  const subTotal = getSubTotal(cart);
  return subTotal === 0 ? 0 : subTotal + deliveryfee;
};