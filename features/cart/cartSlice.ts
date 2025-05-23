import type { RootState } from "@/redux/store";
import type { Size } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
export type CartItem = {
  name: string;
  id: string;
  image: string;
  basePrice: number;
  quantity?: number;
  size?: Size;
};
type CartState = {
  item: CartItem[];
}
const initialState : CartState= {
  item: [], 
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartItem = (state: RootState) => state.cart.item;
