export interface Notification {
  createdAt: Date;
  udpdatedAt: Date;
  type?: string;
  title?: string;
  read?: boolean;
  _id: string;
}

export interface NotificationApiDataSuccess {
  notifications: Notification[];
}

export interface NotificationApiData {
  error?: { message: string };
  success?: NotificationApiDataSuccess;
}
