import { Link } from 'react-router-dom';
import {
  Notification,
  NotificationStatus,
} from '../../../models/notification.model';
import styles from './NotificationItem.module.scss';

import dateUtils from '../../../utils/date.utils';
import classNames from 'classnames';
import DOMPurify from 'dompurify';

interface NotificationItemProps {
  data: Notification;
  img: string | undefined;
  onClick: () => void;
}

export default function NotificationItem({
  data,
  img,
  onClick,
}: NotificationItemProps) {
  const { id, type, status, text, date } = data;

  const sanitizedText = DOMPurify.sanitize(text);
  const notificationClasses = classNames(styles.wrapper, {
    [styles.unread]: status === NotificationStatus.UnRead,
  });

  //Latter add id to link `${type}/${id}`
  return (
    <Link
      className={notificationClasses}
      to={`${type}/${id}`}
      onClick={onClick}
    >
      <div className={styles.inside_wrapper}>
        <div className={styles.icon_wrapper}>
          <img src={img} alt="notification logo" className={styles.logo} />
        </div>
        <div className={styles.context_wrapper}>
          <div
            className={styles.text_styles}
            dangerouslySetInnerHTML={{ __html: sanitizedText }}
          />
          <p>
            <span>{dateUtils.formatDate(date)}</span>
          </p>
        </div>
        <div className={styles.status_wrapper}>
          {status === NotificationStatus.UnRead && (
            <div className={styles.status_dot} />
          )}
        </div>
      </div>
    </Link>
  );
}
