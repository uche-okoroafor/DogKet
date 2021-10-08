import { NotificationApiData } from '../../interface/Notifications';
import { FetchOptions } from '../../interface/FetchOptions';

export const createNotification = async (
  type: string,
  title: string,
  description: string,
): Promise<NotificationApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, title, description }),
    credentials: 'include',
  };

  try {
    const fetchData = await fetch(`/notification`, fetchOptions);
    return fetchData.json();
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};

export const getNotifications = async (
  page: number,
  limit: number,
  onlyUnread: boolean | null,
): Promise<NotificationApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  let url = '/notification/?';
  if (page >= 0) url = url.concat(`page=${page}&`);
  if (limit >= 0) url = url.concat(`limit=${limit}&`);
  if (onlyUnread) url = url.concat(`unread=true`);

  try {
    const fetchData = await fetch(url, fetchOptions);
    const { success } = await fetchData.json();
    return success;
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};

export const getCount = async (onlyUnread: boolean | null) => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  let url = '/notification/count';
  if (onlyUnread) url = url.concat(`?unread=true`);

  try {
    const fetchData = await fetch(url, fetchOptions);
    const { success } = await fetchData.json();
    return success;
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};

export const updReadNotifications = async (notificationsToUpd: string[]): Promise<NotificationApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notificationsToUpd }),
    credentials: 'include',
  };

  try {
    const fetchData = await fetch(`/notification`, fetchOptions);
    return await fetchData.json();
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};
