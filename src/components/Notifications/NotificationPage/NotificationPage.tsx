import DOMPurify from 'dompurify';
import { notificationMock } from '../../../mocks/notification';
import styles from './NotificationPage.module.scss';

interface NotificationPageProps {
  id: string;
}

export default function NotificationPage({ id }: NotificationPageProps) {
  const data = notificationMock.find((item) => item.id === id);

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
