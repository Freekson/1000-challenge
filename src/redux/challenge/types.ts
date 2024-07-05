import { ChallengeDays, ChallengePushups } from "../../types";

export type IChallenge = {
  days: ChallengeDays;
  pushups: ChallengePushups;
  startDate: string;
  completed: boolean;
};
