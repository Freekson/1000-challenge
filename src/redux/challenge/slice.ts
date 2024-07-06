import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChallenge, IPushupsStats, SetRepType } from "./types";
import { ChallengeDays, ChallengePushups } from "../../types";
import { getChallengeFromLS } from "../../utils/getChallengeFromLS";

const { days, pushups, startDate, pushupsStats } = getChallengeFromLS();

const initialState: IChallenge = {
  days,
  pushups,
  startDate,
  completed: false,
  pushupsStats:
    pushupsStats.length !== 0
      ? pushupsStats
      : Array.from({ length: days }, (_, index) => ({
          day: index + 1,
          reps: [],
          completed: false,
        })),
};

const updateLocalStorage = (state: IChallenge) => {
  localStorage.setItem(
    "challenge",
    JSON.stringify({
      days: state.days,
      pushups: state.pushups,
      startDate: state.startDate,
      pushupsStats: state.pushupsStats,
    })
  );
};

export const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    setDays(state, action: PayloadAction<ChallengeDays>) {
      state.days = action.payload;
      updateLocalStorage(state);
    },
    setPushups(state, action: PayloadAction<ChallengePushups>) {
      state.pushups = action.payload;
      updateLocalStorage(state);
    },
    setDate(state, action: PayloadAction<string>) {
      state.startDate = action.payload;
      updateLocalStorage(state);
    },
    setPushupsStats(state, action: PayloadAction<IPushupsStats[]>) {
      state.pushupsStats = action.payload;
      updateLocalStorage(state);
    },
    addPushupsToDay(state, action: PayloadAction<SetRepType>) {
      const { day, reps } = action.payload;

      const dayToUpdate = state.pushupsStats.find((item) => item.day === day);

      if (dayToUpdate) {
        dayToUpdate.reps.push(reps);
        const repsSum = dayToUpdate.reps.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        if (repsSum >= pushups) {
          dayToUpdate.completed = true;
        }
        updateLocalStorage(state);
      } else {
        console.error(`Day ${day} not found at pushupsStats.`);
      }
    },
  },
});

export const {
  setDays,
  setPushups,
  setDate,
  setPushupsStats,
  addPushupsToDay,
} = challengeSlice.actions;

export default challengeSlice.reducer;
