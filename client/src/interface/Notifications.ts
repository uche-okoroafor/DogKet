export interface Notification {
  createdAt?: string;
  udpdatedAt?: string;
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

// export interface RequestStatusApiDataSuccess {
//   request: any;
// }

// export interface RequestStatusApiData {
//   error?: { message: string };
//   success?: RequestApiDataSuccess;
// }
