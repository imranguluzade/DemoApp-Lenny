import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "../actions/reviews";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    [getReviews.pending]: (state) => {
      state.loading = true;
    },
    [getReviews.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getReviews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
  },
});

export default reviewsSlice.reducer;
