import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isOpen: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    add: (state, action) => {
      const order = state.items.find((item) => item.id === action.payload.id);
      if (!order) {
        console.log('Adding item to order:', action.payload);
        state.items.push(action.payload);
      } else {
        alert('Item já adicionado ao carrinho');
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, open, close, clear } = orderSlice.actions;
export default orderSlice.reducer;
