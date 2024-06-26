import { useParams } from 'react-router-dom';
import './OnHold.module.scss';
import NotificationPage from '../../components/Notifications/NotificationPage/NotificationPage';

export default function OnHold() {
  const id = useParams().id as string;

  return <NotificationPage id={id} />;
}
