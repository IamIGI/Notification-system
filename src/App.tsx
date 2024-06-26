import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import NotificationModal from './components/Notifications/Modal/NotificationModal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openNotificationModal() {
    setIsOpen(true);
  }
  return (
    <>
      <NavBar openNotification={openNotificationModal} />
      <NotificationModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
