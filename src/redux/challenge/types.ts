import { ChallengeDays, ChallengePushups } from "../../types";

export type IChallenge = {
  days: ChallengeDays;
  pushups: ChallengePushups;
  startDate: string;
  completed: boolean;
  pushupsStats: IPushupsStats[] | [];
};

export interface IPushupsStats {
  day: number;
  reps: number[];
  completed: boolean;
}

export type SetRepType = {
  day: number;
  reps: number;
};
