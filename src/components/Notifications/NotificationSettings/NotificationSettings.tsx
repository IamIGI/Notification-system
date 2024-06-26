import CategoryButton, {
  ButtonType,
} from '../../CategoryButton/CategoryButton';
import MarkAllButton from '../../MarkAllButton/MarkAllButton';
import SettingsButton from '../../SettingsButton/SettingsButton';
import styles from './NotificationSettings.module.scss';

export default function NotificationSettings() {
  return (
    <div className={styles.category_wrapper}>
      <CategoryButton type={ButtonType.active}>
        All Notifications
      </CategoryButton>
      <CategoryButton type={ButtonType.inactive}>
        Unread Notifications
      </CategoryButton>
      <MarkAllButton />
      <SettingsButton />
    </div>
  );
}
