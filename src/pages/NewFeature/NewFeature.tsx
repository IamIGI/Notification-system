import { useParams } from 'react-router-dom';
import './NewFeature.module.scss';
import NotificationPage from '../../components/Notifications/NotificationPage/NotificationPage';

export default function NewFeature() {
  const id = useParams().id as string;

  return <NotificationPage id={id} />;
}
