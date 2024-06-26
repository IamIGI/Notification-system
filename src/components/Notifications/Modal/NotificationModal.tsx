import Modal from '../../Modal/Modal';
import NotificationList from '../NotificationList/NotificationList';
import NotificationSettings from '../NotificationSettings/NotificationSettings';
import styles from './NotificationModal.module.scss';
import { unreadCounter } from '../../../redux/notificationsSlice';
import { useAppSelector } from '../../../hooks/hooks';

interface NotificationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function NotificationModal({
  open,
  onClose,
}: NotificationModalProps) {
  const counter = useAppSelector(unreadCounter);

  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.wrapper}>
        <div className={styles.title_wrapper}>
          <h1>
            Notifications
            <span className={styles.indicator}>{counter}</span>
          </h1>
        </div>
        <NotificationSettings />
        <NotificationList />
      </div>
    </Modal>
  );
}
