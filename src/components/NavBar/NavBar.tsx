import styles from './NavBar.module.scss';
import companyLogo from '../../assets/images/mindpal.webp';
import bellIcon from '../../assets/images/bell_icon.svg';
import { unreadCounter } from '../../redux/notificationsSlice';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  openNotification: () => void;
}

export default function NavBar({ openNotification }: NavBarProps) {
  const counter = useAppSelector(unreadCounter);
  const navigate = useNavigate();
  return (
    <>
      <nav className={styles.navbar}>
        <img
          src={companyLogo}
          alt="Company Logo"
          className={styles.company_logo}
          onClick={() => navigate('/')}
        />

        <button className={styles.button} onClick={() => openNotification()}>
          <img src={bellIcon} alt="Company Logo" className={styles.logo} />
          <span className={styles.indicator}>{counter}</span>
        </button>
      </nav>
    </>
  );
}
