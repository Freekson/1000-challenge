import { useSelector } from "react-redux";
import styles from "./Calendar.module.scss";
import { RootState } from "../../redux/store";
import { getCurrentChallengeDay } from "../../utils/getCurrentChallengeDay";
import CalendarPopup from "../CalendarPopup";
import { useEffect } from "react";

const Calendar = () => {
  const { startDate, pushupsStats, days, pushups } = useSelector(
    (state: RootState) => state.challenge
  );
  const currentChallengeDay = getCurrentChallengeDay(startDate);

  useEffect(() => {}, [days, pushups]);

  return (
    <div className={styles.calendar}>
      {pushupsStats.map((item) => (
        <div
          key={item.day}
          className={`${styles.item} 
            ${item.day === currentChallengeDay ? styles.active : ""} 
            ${
              item.day < currentChallengeDay && !item.completed
                ? styles.failed
                : ""
            }
            ${item.completed ? styles.completed : ""}`}
        >
          {item.day <= currentChallengeDay && !item.completed && (
            <CalendarPopup day={item.day} />
          )}
          {item.day === currentChallengeDay && <CalendarPopup day={item.day} />}
          <p className={styles.day}>Day {item.day}</p>
          <p>
            Reps:{" "}
            {item.reps.length !== 0
              ? item.reps.map((num) => num.toString()).join(" + ")
              : 0}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
