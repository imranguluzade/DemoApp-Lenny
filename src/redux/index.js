import { configureStore } from "@reduxjs/toolkit";
import reviewsSlice from "./reducers/reviewsReducer";

export const store = configureStore({
  reducer: {
    reviews: reviewsSlice,
  },
});
