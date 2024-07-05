import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import challenge from "./challenge/slice";
export const store = configureStore({
  reducer: {
    challenge,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
