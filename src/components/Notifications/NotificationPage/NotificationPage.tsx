import DOMPurify from 'dompurify';

import styles from './NotificationPage.module.scss';

import { getNotificationById } from '../../../redux/notificationsSlice';
import { useAppSelector } from '../../../hooks/hooks';
import { useNavigate } from 'react-router-dom';

interface NotificationPageProps {
  id: string;
}

export default function NotificationPage({ id }: NotificationPageProps) {
  const data = useAppSelector((state) => getNotificationById(state, id));
  const navigate = useNavigate();

  if (!data) {
    navigate('/not-found');
    return null;
  }

  const sanitizedText = DOMPurify.sanitize(data!.text);

  return (
    <div className="global_wrapper">
      <h1>{data.type}</h1>
      <div
        className={styles.text_styles}
        dangerouslySetInnerHTML={{ __html: sanitizedText }}
      ></div>
    </div>
  );
}
