import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const Header = () => {
  const { startDate } = useSelector((state: RootState) => state.challenge);
  return (
    <header className={styles.header}>
      <Link to="/">1000 Challenge</Link>
      {startDate !== "" && <Link to="/calendar">Calendar</Link>}
    </header>
  );
};

export default Header;
