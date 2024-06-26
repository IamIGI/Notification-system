import markAllIcon from '../../assets/images/checkmark-double.svg';
import styles from './MarkAllButton.module.scss';

export default function MarkAllButton() {
  return (
    <button className={styles.button_styles}>
      <img src={markAllIcon} alt="Company Logo" className={styles.logo} />
      <span> Mark all as read </span>
    </button>
  );
}
