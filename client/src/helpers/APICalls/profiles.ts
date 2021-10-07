import { FetchOptions } from '../../interface/FetchOptions';
import { Profile } from '../../interface/Profile';

interface SearchProps {
  city?: string;
  searchStartDate?: string;
  searchEndDate?: string;
}

export async function getAllProfiles(): Promise<Profile[]> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch('/profile', fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}

export async function getProfileDetail(profileId: string): Promise<Profile> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile/${profileId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}

export async function searchSitters({ city, searchStartDate, searchEndDate }: SearchProps): Promise<Profile[]> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };

  return await fetch(
    `/profile/search?city=${city}&searchStartDate=${searchStartDate}&searchEndDate=${searchEndDate}`,
    fetchOptions,
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
