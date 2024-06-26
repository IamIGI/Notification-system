import { useParams } from 'react-router-dom';
import './Request.module.scss';
import NotificationPage from '../../components/Notifications/NotificationPage/NotificationPage';

export default function Request() {
  const id = useParams().id as string;

  return <NotificationPage id={id} />;
}
