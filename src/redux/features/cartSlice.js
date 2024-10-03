import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

// cart Slice

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },

    // remove item from cart
    removeCart: (state, action) => {
      const data = state.carts.filter((el) => el.id !== action.payload);
      state.carts = data;
    },

    // remove single item
    removeSingleItem: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex].qnty >= 1) {
        state.carts[itemIndex].qnty -= 1;
      }
    },

    removeAllCart: (state, action) => {
      state.carts = [];
    },
  },
});

export const { addToCart, removeCart, removeSingleItem, removeAllCart } =
  cartSlice.actions;

export default cartSlice.reducer;
