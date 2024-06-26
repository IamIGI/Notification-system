import styles from './NotificationList.module.scss';

import NotificationItem from '../NotificationItem/NotificationItem';
import { NotificationImage } from '../../../models/notification.model';
import documentImg from '../../../assets/images/notifications/document.png';
import fireImg from '../../../assets/images/notifications/fire.png';
import mindPalImg from '../../../assets/images/notifications/mindPal.png';
import projectRevisionImg from '../../../assets/images/notifications/project_revision.png';
import stopImg from '../../../assets/images/notifications/stop.png';

import {
  getAllNotifications,
  getAllNotificationsByFilter,
  readNotificationById,
} from '../../../redux/notificationsSlice';
import sortingUtils from '../../../utils/sorting.utils';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { useEffect } from 'react';
import localStorageUtils from '../../../utils/localStorage.utils';

export default function NotificationList() {
  const dispatch = useAppDispatch();
  const allNotifications = useAppSelector(getAllNotifications);

  const notificationDataArr = sortingUtils.sortNotificationsByDate(
    useAppSelector(getAllNotificationsByFilter)
  );

  useEffect(() => {
    localStorageUtils.updateNotificationData(allNotifications);
  }, [allNotifications]);

  function markAsRead(id: string) {
    dispatch(readNotificationById({ id }));
  }

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
            onClick={() => markAsRead(notification.id)}
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
