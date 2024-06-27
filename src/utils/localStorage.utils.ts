import { Notification } from '../models/notification.model';

const KEY = 'NotificationData';

function getNotificationData(): Notification[] {
  const savedTodos = localStorage.getItem(KEY);
  return savedTodos ? (JSON.parse(savedTodos) as Notification[]) : [];
}

function updateNotificationData(todos: Notification[]) {
  localStorage.setItem(KEY, JSON.stringify(todos));
}

function removeNotificationData() {
  localStorage.removeItem(KEY);
}

export default {
  getNotificationData,
  updateNotificationData,
  removeNotificationData,
};
