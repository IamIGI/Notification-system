import Modal from '../../Modal/Modal';
import styles from './NotificationModal.module.scss';

interface NotificationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function NotificationModal({
  open,
  onClose,
}: NotificationModalProps) {
  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.wrapper}>
        <h2>Notification Modal</h2>
        <p>This is your notification content.</p>
      </div>
    </Modal>
  );
}
