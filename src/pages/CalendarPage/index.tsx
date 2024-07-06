import { Helmet } from "react-helmet";
import styles from "./CalendarPage.module.scss";
import Layout from "../../components/Layout";
import Calendar from "../../components/Calendar";
import Stats from "../../components/Stats/Stats";

const CalendarPage = () => {
  return (
    <>
      <Helmet>
        <title>Calendar</title>
      </Helmet>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.calendar__wrapper}>
            <h1>Calendar</h1>
            <Calendar />
          </div>
          <div className={styles.statistics}>
            <h2>Stats</h2>
            <Stats />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CalendarPage;
