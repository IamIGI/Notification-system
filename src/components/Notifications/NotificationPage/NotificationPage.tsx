import DOMPurify from 'dompurify';

import styles from './NotificationPage.module.scss';

import { getNotificationById } from '../../../redux/notificationsSlice';
import { useAppSelector } from '../../../hooks/hooks';

interface NotificationPageProps {
  id: string;
}

export default function NotificationPage({ id }: NotificationPageProps) {
  const data = useAppSelector((state) => getNotificationById(state, id));

  const sanitizedText = DOMPurify.sanitize(data!.text);

  return (
    <>
      {data && (
        <>
          <h1>{data.type}</h1>
          <div
            className={styles.text_styles}
            dangerouslySetInnerHTML={{ __html: sanitizedText }}
          />
        </>
      )}
    </>
  );
}
