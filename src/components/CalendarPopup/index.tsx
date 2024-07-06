import Popup from "reactjs-popup";
import styles from "./CalendarPopup.module.scss";
import { ChangeEvent, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { addPushupsToDay } from "../../redux/challenge/slice";
import { PopupActions } from "reactjs-popup/dist/types";

type TProps = {
  day: number;
};

const CalendarPopup: React.FC<TProps> = ({ day }) => {
  const dispatch = useAppDispatch();
  const [reps, setReps] = useState(0);

  const ref = useRef<PopupActions>(null);
  const closeTooltip = () => ref.current?.close();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReps(Number(event.target.value));
  };

  const onSubmit = () => {
    if (reps > 0 && reps <= 250) {
      dispatch(addPushupsToDay({ day, reps }));
      closeTooltip();
    }
  };
  return (
    <Popup ref={ref} trigger={<button className={styles.addBtn}>+</button>}>
      <div className="popup">
        <p>Enter the number of reps (day {day}):</p>
        <input type="number" value={reps} onChange={handleInputChange} />
        <button onClick={onSubmit}>Add</button>
      </div>
    </Popup>
  );
};

export default CalendarPopup;
