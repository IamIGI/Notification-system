import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import NotificationModal from './components/Notifications/Modal/NotificationModal';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';
import localStorageUtils from './utils/localStorage.utils';
import { notificationMock } from './mocks/notification';
import { useAppDispatch } from './hooks/hooks';
import { changeFilter } from './redux/notificationsSlice';
import { NotificationFilter } from './models/notification.model';

export default function App() {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //Init data to LS on first app run
    if (localStorageUtils.getNotificationData().length === 0) {
      localStorageUtils.updateNotificationData(notificationMock);
    }
  }, []);

  function openNotificationModal() {
    dispatch(changeFilter({ filter: NotificationFilter.All }));
    setIsOpen(true);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar openNotification={openNotificationModal} />
        <Root />
        <NotificationModal open={isOpen} onClose={() => setIsOpen(false)} />
      </BrowserRouter>
    </>
  );
}
