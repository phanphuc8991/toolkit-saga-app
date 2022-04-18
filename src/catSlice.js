import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  isFetching: false,
  error: false,
};

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    // GET ALL
    getAllCatStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAllCatSuccess: (state, action) => {
      state.isFetching = false;
      state.cats = action.payload;
    },
    getAllCatFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
  },
});

const { reducer, actions } = catSlice;
export const { getAllCatStart, getAllCatSuccess, getAllCatFailure } = actions;

export default reducer;
