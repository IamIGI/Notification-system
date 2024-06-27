import CategoryButton, {
  ButtonType,
} from '../../components/CategoryButton/CategoryButton';
import { useAppDispatch } from '../../hooks/hooks';
import { notificationMock } from '../../mocks/notification';
import { fetchNotifications } from '../../redux/notificationsSlice';
import localStorageUtils from '../../utils/localStorage.utils';

export default function Home() {
  const dispatch = useAppDispatch();

  function resetLocalStorage() {
    localStorageUtils.removeNotificationData();
    localStorageUtils.updateNotificationData(notificationMock);
    dispatch(fetchNotifications({ data: notificationMock }));
  }

  return (
    <div className="global_wrapper">
      <h1>Home</h1>
      <CategoryButton type={ButtonType.active} onClick={resetLocalStorage}>
        LocalStorage reset
      </CategoryButton>
    </div>
  );
}
