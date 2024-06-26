import {
  Notification,
  NotificationImage,
  NotificationStatus,
  NotificationType,
} from '../models/notification.model';
import dateUtils from '../utils/date.utils';

export const notificationMock: Notification[] = [
  {
    id: crypto.randomUUID(),
    type: NotificationType.Request,
    date: new Date(),
    image: NotificationImage.Document,
    text: '<strong>Jan Nowak</strong> from <strong>MindPal</strong> has requested a Mindocument for their project <strong>Minddev</strong>',
    status: NotificationStatus.UnRead,
  },
  {
    id: crypto.randomUUID(),
    type: NotificationType.NewFeature,
    date: dateUtils.getYesterdayDate(),
    image: NotificationImage.MindPal,
    text: 'We have lunched new product!',
    status: NotificationStatus.UnRead,
  },
  {
    id: crypto.randomUUID(),
    type: NotificationType.NewFeature,
    date: dateUtils.getPreviousDate(2),
    image: NotificationImage.Fire,
    text: 'New MindTool feature: AI Voice Assistant',
    status: NotificationStatus.UnRead,
  },
  {
    id: crypto.randomUUID(),
    type: NotificationType.OnHold,
    date: dateUtils.getYesterdayDate(),
    image: NotificationImage.Stop,
    text: '<strong>Gregory Jones</strong> from <strong>MindPal</strong> has put their project <strong>Project 123</strong> on hold',
    status: NotificationStatus.Read,
  },
  {
    id: crypto.randomUUID(),
    type: NotificationType.Request,
    date: dateUtils.getPreviousDate(3),
    image: NotificationImage.ProjectRevision,
    text: '<strong>Lucy Gale</strong> from <strong>MindPal</strong> has requested a Project Revision for their project <strong>Gliwice</strong>',
    status: NotificationStatus.Read,
  },
  {
    id: crypto.randomUUID(),
    type: NotificationType.OnHold,
    date: new Date(),
    image: NotificationImage.Stop,
    text: '<strong>Kazimierz Niekazimierz</strong> from <strong>MindPal</strong> has put their project <strong>Project 321</strong> on hold',
    status: NotificationStatus.Read,
  },
  {
    id: crypto.randomUUID(),
    type: NotificationType.NewFeature,
    date: dateUtils.getYesterdayDate(),
    image: NotificationImage.MindPal,
    text: 'New MindTool feature: AI Chat Assistant',
    status: NotificationStatus.Read,
  },
];
