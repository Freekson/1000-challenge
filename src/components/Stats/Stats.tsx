import { useSelector } from "react-redux";
import styles from "./Stats.module.scss";
import { RootState } from "../../redux/store";
import { getCurrentChallengeDay } from "../../utils/getCurrentChallengeDay";

const Stats = () => {
  const { startDate, pushups, days, pushupsStats } = useSelector(
    (state: RootState) => state.challenge
  );
  const currentChallengeDay = getCurrentChallengeDay(startDate);

  let totalPushups = 0;
  pushupsStats.forEach((dayStats) => {
    totalPushups += dayStats.reps.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  });

  const todayStats = pushupsStats.find(
    (item) => item.day === currentChallengeDay
  );
  let pushupsDoneToday = 0;
  if (todayStats) {
    pushupsDoneToday = todayStats.reps.reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  }

  let pushupsDoneBeforeToday = 0;
  for (let i = 0; i < currentChallengeDay - 1; i++) {
    if (pushupsStats[i]) {
      pushupsDoneBeforeToday += pushupsStats[i].reps.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    }
  }

  return (
    <>
      <div className={styles.statistics__item}>
        <h6>Today left:</h6>
        <p>{pushups - pushupsDoneToday < 0 ? 0 : pushups - pushupsDoneToday}</p>
      </div>
      <div className={styles.statistics__item}>
        <h6>Total left:</h6>
        <p>{days * pushups - totalPushups}</p>
      </div>
      <div className={styles.statistics__item}>
        <h6>Done:</h6>
        <p>{totalPushups}</p>
      </div>
      <div className={styles.statistics__item}>
        <h6>Debt:</h6>
        <p>
          {currentChallengeDay * pushups -
            (pushupsDoneBeforeToday + pushupsDoneToday)}
        </p>
      </div>
    </>
  );
};

export default Stats;
