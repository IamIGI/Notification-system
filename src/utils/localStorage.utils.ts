import { Notification } from '../models/notification.model';

function getNotificationData(): Notification[] {
  const savedTodos = localStorage.getItem('NotificationData');
  return savedTodos ? (JSON.parse(savedTodos) as Notification[]) : [];
}

function updateNotificationData(todos: Notification[]) {
  localStorage.setItem('NotificationData', JSON.stringify(todos));
}

export default {
  getNotificationData,
  updateNotificationData,
};
