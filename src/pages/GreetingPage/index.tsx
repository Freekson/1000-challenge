import { Helmet } from "react-helmet";
import styles from "./GreetingPage.module.scss";
import Layout from "../../components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";

const GreetingPage: React.FC = () => {
  const days: number[] = [15, 30, 60];
  const pushups: number[] = [500, 750, 1000, 1500];

  const [activeDay, setDay] = useState(days[0]);
  const [activeQuantity, setQuantity] = useState(pushups[0]);

  const handleDay = (day: number): void => {
    setDay(day);
  };

  const handleQuantity = (quantity: number): void => {
    setQuantity(quantity);
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
          <Link to="/calendar" className={styles.btn}>
            Continue
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default GreetingPage;
