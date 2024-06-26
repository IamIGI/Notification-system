import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import NotificationModal from './components/Notifications/Modal/NotificationModal';
import Root from './Root';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openNotificationModal() {
    setIsOpen(true);
  }
  return (
    <>
      <NavBar openNotification={openNotificationModal} />
      <Root />
      <NotificationModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
