import { Notification } from '../models/notification.model';

function sortNotificationsByDate(
  notifications: Notification[]
): Notification[] {
  const sortedNotifications = [...notifications];
  return sortedNotifications.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export default {
  sortNotificationsByDate,
};
