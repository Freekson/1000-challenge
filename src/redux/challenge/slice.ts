import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChallenge } from "./types";
import { ChallengeDays, ChallengePushups } from "../../types";
import { getChallengeFromLS } from "../../utils/getChallengeFromLS";

const { days, pushups, startDate } = getChallengeFromLS();

const initialState: IChallenge = {
  days,
  pushups,
  startDate,
  completed: false,
};

export const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    setDays(state, action: PayloadAction<ChallengeDays>) {
      state.days = action.payload;
    },
    setPushups(state, action: PayloadAction<ChallengePushups>) {
      state.pushups = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.startDate = action.payload;
    },
  },
});

export const { setDays, setPushups, setDate } = challengeSlice.actions;

export default challengeSlice.reducer;
