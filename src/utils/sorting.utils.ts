import { Notification } from '../models/notification.model';

function sortNotificationsByDate(
  notifications: Notification[]
): Notification[] {
  return notifications.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export default {
  sortNotificationsByDate,
};
