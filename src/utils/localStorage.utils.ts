import { Notification } from '../models/notification.model';

function getNotificationData(): Notification[] {
  const savedTodos = localStorage.getItem('NotificationData');
  return savedTodos ? (JSON.parse(savedTodos) as Notification[]) : [];
}

function updatNotificationData(todos: Notification[]) {
  localStorage.setItem('NotificationData', JSON.stringify(todos));
}

export default {
  getNotificationData,
  updatNotificationData,
};
