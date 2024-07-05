import { ChallengeDays, ChallengePushups } from "../types";

export const getChallengeFromLS = () => {
  const data = localStorage.getItem("challenge");

  if (data) {
    const { days, pushups, startDate } = JSON.parse(data);
    console.log(startDate);

    return {
      days,
      pushups,
      startDate,
    };
  }

  return {
    days: ChallengeDays.Days15,
    pushups: ChallengePushups.Pushups500,
    startDate: "",
  };
};
