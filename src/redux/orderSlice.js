import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  note: ""
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setNote: (state, action) => {
      state.note = action.payload;
    },
  },
});

export const { setNote } = orderSlice.actions;
export default orderSlice.reducer;