import { IApiResponse } from './../../interface/Requests';
import { DateRange } from '@mui/lab/DateRangePicker';
import { Profiles } from '../../interface/Profile';
import axios from 'axios';

interface FetchOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: string;
  credentials?: RequestCredentials;
}

export interface RangeSchema {
  sunday: DateRange<Date>;
  monday: DateRange<Date>;
  tuesday: DateRange<Date>;
  wednesday: DateRange<Date>;
  thursday: DateRange<Date>;
  friday: DateRange<Date>;
  saturday: DateRange<Date>;
}

export interface Props {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
  birth?: string;
  description?: string;
  availability?: RangeSchema;
  hourlyWage?: string;
}

interface ProfileApiDataSuccess {
  updatedProfile?: any;
}

interface ProfileApiData {
  error?: { message: string };
  success?: ProfileApiDataSuccess;
}

export const patchProfile = async (data: Props, profileId?: string): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  return await fetch(`/profile/${profileId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const updateProFile = async (profile: Profiles): Promise<IApiResponse> => {
  return await axios
    .post(`/profile/update-profile`, { profile: profile })
    .then((response) => response.data)
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};
export const getProfile = async (userId: string | undefined): Promise<any> => {
  console.log('response');
  return await axios
    .get(`/profile/get-profile/${userId}`)
    .then((response) => {
      console.log(response, 'response');
      return response.data;
    })
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};
