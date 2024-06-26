import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import localStorageUtils from '../utils/localStorage.utils';
import {
  NotificationFilter,
  NotificationStatus,
} from '../models/notification.model';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    data: localStorageUtils.getNotificationData(),
    filter: NotificationFilter.All,
  },
  reducers: {
    readAllNotifications: (state) => {
      state.data.forEach((notification) => {
        notification.status = NotificationStatus.Read;
      });
    },
    readNotificationById: (state, action: PayloadAction<{ id: string }>) => {
      //Mark the notification as read after it is clicked.
      //Allow the user to mark notifications as read by clicking on a blue circle on the right side of the notification.
      // No point of adding listener for blue circle, when all notification can be interactive with the same effect
      const { id } = action.payload;

      const index = state.data.findIndex(
        (notification) => notification.id === id
      );

      if (index === -1) return;

      state.data[index].status = NotificationStatus.Read;
    },
    changeFilter: (
      state,
      action: PayloadAction<{ filter: NotificationFilter }>
    ) => {
      state.filter = action.payload.filter;
    },
  },
});

export const { readAllNotifications, readNotificationById, changeFilter } =
  notificationsSlice.actions;

export const getFilterStatus = (state: RootState) => state.notifications.filter;

export const getAllNotifications = (state: RootState) =>
  state.notifications.data;

export const getAllNotificationsByFilter = (state: RootState) => {
  if (state.notifications.filter === NotificationFilter.Unread) {
    return state.notifications.data.filter(
      (item) => item.status === NotificationStatus.UnRead
    );
  }
  return state.notifications.data;
};
export const getNotificationById = (state: RootState, id: string) =>
  state.notifications.data.find((item) => item.id === id);

export const unreadCounter = (state: RootState): number =>
  state.notifications.data.filter(
    (notification) => notification.status === NotificationStatus.UnRead
  ).length;

export default notificationsSlice.reducer;
