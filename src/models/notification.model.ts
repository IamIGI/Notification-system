export enum NotificationType {
  Request = 'request',
  OnHold = 'on_hold',
  NewFeature = 'newFeature',
}

export enum NotificationImage {
  Document = 'document.png',
  Fire = 'fire.png',
  MindPal = 'mindPal.png',
  ProjectRevision = 'project_revision.png',
  Stop = 'stop.png',
}

export enum NotificationStatus {
  Read = 'read',
  UnRead = 'un_read',
}

//Build url like this : `${type}/${id}`
//Each type have dedicated page
export interface Notification {
  id: string;
  type: NotificationType;
  status: NotificationStatus;
  image: string;
  text: string;
  date: Date;
}
