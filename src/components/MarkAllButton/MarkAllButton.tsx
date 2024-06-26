import markAllIcon from '../../assets/images/checkmark-double.svg';
import styles from './MarkAllButton.module.scss';
import {
  readAllNotifications,
  unreadCounter,
} from '../../redux/notificationsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

export default function MarkAllButton() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(unreadCounter);

  function readAll() {
    dispatch(readAllNotifications());
  }

  return (
    <button
      disabled={counter === 0}
      className={styles.button_styles}
      onClick={() => readAll()}
    >
      <img src={markAllIcon} alt="Marks Logo" className={styles.logo} />
      <span className={counter === 0 ? styles.disabled : ''}>
        Mark all as read
      </span>
    </button>
  );
}
