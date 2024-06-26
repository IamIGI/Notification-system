import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import NotificationModal from './components/Notifications/Modal/NotificationModal';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

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
