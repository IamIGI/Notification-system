import styles from './NavBar.module.scss';
import companyLogo from '../../assets/images/mindpal.webp';
import bellIcon from '../../assets/images/bell_icon.svg';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img
        src={companyLogo}
        alt="Company Logo"
        className={styles.company_logo}
      />

      <button className={styles.button}>
        <img src={bellIcon} alt="Company Logo" className={styles.logo} />
        <span className={styles.indicator}>1</span>
      </button>
    </nav>
  );
}
