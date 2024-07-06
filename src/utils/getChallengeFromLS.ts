import { ChallengeDays, ChallengePushups } from "../types";

export const getChallengeFromLS = () => {
  const data = localStorage.getItem("challenge");

  if (data) {
    const { days, pushups, startDate, pushupsStats } = JSON.parse(data);

    return {
      days,
      pushups,
      startDate,
      pushupsStats,
    };
  }

  return {
    days: ChallengeDays.Days15,
    pushups: ChallengePushups.Pushups500,
    startDate: "",
    pushupsStats: [],
  };
};
