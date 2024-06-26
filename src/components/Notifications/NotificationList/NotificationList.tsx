import styles from './NotificationList.module.scss';
import { notificationMock } from '../../../mocks/notification';
import NotificationItem from '../NotificationItem/NotificationItem';
import {
  Notification,
  NotificationImage,
} from '../../../models/notification.model';
import documentImg from '../../../assets/images/notifications/document.png';
import fireImg from '../../../assets/images/notifications/fire.png';
import mindPalImg from '../../../assets/images/notifications/mindPal.png';
import projectRevisionImg from '../../../assets/images/notifications/project_revision.png';
import stopImg from '../../../assets/images/notifications/stop.png';

export default function NotificationList() {
  const mockDataArr: Notification[] = notificationMock;

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
      {mockDataArr.map((notification) => (
        <NotificationItem
          key={notification.id}
          data={notification}
          img={getImage(notification.image)}
        />
      ))}
    </div>
  );
}
