import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { NotificationFilter } from '../../../models/notification.model';
import {
  changeFilter,
  getFilterStatus,
} from '../../../redux/notificationsSlice';
import CategoryButton, {
  ButtonType,
} from '../../CategoryButton/CategoryButton';
import MarkAllButton from '../../MarkAllButton/MarkAllButton';
import SettingsButton from '../../SettingsButton/SettingsButton';
import styles from './NotificationSettings.module.scss';

export default function NotificationSettings() {
  const dispatch = useAppDispatch();
  const filterStatus = useAppSelector(getFilterStatus);

  function changeFilterValue(filter: NotificationFilter) {
    dispatch(changeFilter({ filter }));
  }

  return (
    <div className={styles.category_wrapper}>
      <CategoryButton
        type={
          filterStatus === NotificationFilter.All
            ? ButtonType.active
            : ButtonType.inactive
        }
        onClick={() => changeFilterValue(NotificationFilter.All)}
      >
        All Notifications
      </CategoryButton>
      <CategoryButton
        type={
          filterStatus === NotificationFilter.Unread
            ? ButtonType.active
            : ButtonType.inactive
        }
        onClick={() => changeFilterValue(NotificationFilter.Unread)}
      >
        Unread Notifications
      </CategoryButton>
      <MarkAllButton />
      <SettingsButton />
    </div>
  );
}
