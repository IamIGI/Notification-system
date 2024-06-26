import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import localStorageUtils from '../utils/localStorage.utils';
import { NotificationStatus } from '../models/notification.model';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: localStorageUtils.getNotificationData(),
  reducers: {
    toggleStatus: (
      state,
      action: PayloadAction<{ id: string; completed: boolean }>
    ) => {
      console.log(state, action);
    },
  },
});

export const { toggleStatus } = notificationsSlice.actions;

export const getAllNotification = (state: RootState) => state.notifications;

export const unreadCounter = (state: RootState): number =>
  state.notifications.filter(
    (notification) => notification.status === NotificationStatus.UnRead
  ).length;

export default notificationsSlice.reducer;
