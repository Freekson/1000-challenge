import { Helmet } from "react-helmet";
import styles from "./GreetingPage.module.scss";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChallengeDays, ChallengePushups } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { setDays, setPushups, setDate } from "../../redux/challenge/slice";
import { RootState } from "../../redux/store";

const GreetingPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    days: reduxDays,
    pushups: reduxPushups,
    completed,
  } = useSelector((state: RootState) => state.challenge);

  const days: ChallengeDays[] = [15, 30, 60];
  const pushups: ChallengePushups[] = [500, 750, 1000, 1500];

  const [activeDay, setDay] = useState(reduxDays);
  const [activeQuantity, setQuantity] = useState(reduxPushups);

  const handleDay = (day: ChallengeDays): void => {
    setDay(day);
  };

  const handleQuantity = (quantity: ChallengePushups): void => {
    setQuantity(quantity);
  };

  const saveChallengeData = (): void => {
    const currentDate = new Date();
    const currentDateTimeString = currentDate.toLocaleString();

    dispatch(setDays(activeDay));
    dispatch(setPushups(activeQuantity));
    dispatch(setDate(currentDateTimeString));
    localStorage.setItem(
      "challenge",
      JSON.stringify({
        days: activeDay,
        pushups: activeQuantity,
        startDate: currentDateTimeString,
      })
    );
  };

  const handleStart = (): void => {
    if (!completed) {
      const confirmed = window.confirm(
        "Are you sure you want to start a new challenge?"
      );

      if (confirmed) {
        saveChallengeData();
        navigate("/calendar");
      }
    } else {
      saveChallengeData();
      navigate("/calendar");
    }
  };

  return (
    <>
      <Helmet>
        <title>1000 Challenge</title>
      </Helmet>
      <Layout>
        <div className={styles.wrapper}>
          <h1>1000 Pushups Challenge</h1>
          <div className={styles.container}>
            <p>Choose how many days you plan to train</p>
            <div className={styles.days}>
              {days.map((day) => {
                return (
                  <div
                    className={day === activeDay ? styles.active : ""}
                    key={day}
                    onClick={() => handleDay(day)}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.container}>
            <p>Choose how many pushups you want to do every day</p>
            <div className={styles.pushups}>
              {pushups.map((quantity) => {
                return (
                  <div
                    className={activeQuantity === quantity ? styles.active : ""}
                    key={quantity}
                    onClick={() => handleQuantity(quantity)}
                  >
                    {quantity}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.btn} onClick={handleStart}>
            Start
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GreetingPage;
