import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ open, children, onClose }: ModalProps) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.outside_wrapper}>
        <div className={styles.inside_wrapper}>
          <div>{children}</div>
        </div>
      </div>
    </>,
    document.getElementById('portal')!
  );
}
