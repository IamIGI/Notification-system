import styles from './NavBar.module.scss';
import companyLogo from '../../assets/images/mindpal.webp';
import bellIcon from '../../assets/images/bell_icon.svg';

interface NavBarProps {
  openNotification: () => void;
}

export default function NavBar({ openNotification }: NavBarProps) {
  return (
    <>
      <nav className={styles.navbar}>
        <img
          src={companyLogo}
          alt="Company Logo"
          className={styles.company_logo}
        />

        <button className={styles.button} onClick={() => openNotification()}>
          <img src={bellIcon} alt="Company Logo" className={styles.logo} />
          <span className={styles.indicator}>1</span>
        </button>
      </nav>
    </>
  );
}
