import settingsLogo from '../../assets/images/settings.svg';
import styles from './SettingsButton.module.scss';

export default function SettingsButton() {
  return (
    <button className={styles.button_styles}>
      <img src={settingsLogo} alt="Settings Logo" className={styles.logo} />
    </button>
  );
}
