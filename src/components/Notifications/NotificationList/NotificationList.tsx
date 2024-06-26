import styles from './NotificationList.module.scss';

import NotificationItem from '../NotificationItem/NotificationItem';
import { NotificationImage } from '../../../models/notification.model';
import documentImg from '../../../assets/images/notifications/document.png';
import fireImg from '../../../assets/images/notifications/fire.png';
import mindPalImg from '../../../assets/images/notifications/mindPal.png';
import projectRevisionImg from '../../../assets/images/notifications/project_revision.png';
import stopImg from '../../../assets/images/notifications/stop.png';
import { useSelector } from 'react-redux';
import { getAllNotification } from '../../../redux/notificationsSlice';
import sortingUtils from '../../../utils/sorting.utils';

export default function NotificationList() {
  const notificationDataArr = sortingUtils.sortNotificationsByDate(
    useSelector(getAllNotification)
  );

  function getImage(name: NotificationImage) {
    switch (name) {
      case NotificationImage.Document:
        return documentImg;
      case NotificationImage.Fire:
        return fireImg;
      case NotificationImage.MindPal:
        return mindPalImg;
      case NotificationImage.ProjectRevision:
        return projectRevisionImg;
      case NotificationImage.Stop:
        return stopImg;

      default:
        console.error(`Wrong image name: ${name}`);
        break;
    }
  }

  return (
    <div className={styles.wrapper}>
      {notificationDataArr ? (
        notificationDataArr.map((notification) => (
          <NotificationItem
            key={notification.id}
            data={notification}
            img={getImage(notification.image)}
          />
        ))
      ) : (
        <p>Brak powiadomień</p>
      )}
    </div>
  );
}
