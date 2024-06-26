import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import NotificationModal from './components/Notifications/Modal/NotificationModal';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';
import localStorageUtils from './utils/localStorage.utils';
import { notificationMock } from './mocks/notification';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //Init data to LS on first app run
    if (localStorageUtils.getNotificationData().length === 0) {
      localStorageUtils.updatNotificationData(notificationMock);
    }
  }, []);

  function openNotificationModal() {
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
