import { Profile } from './Profile';
export interface Booking {
  ownerId?: Profile;
  sitterId?: Profile;
  startDate?: Date;
  endDate?: Date;
  status?: string;
  paid?: boolean;
  _id?: string;
}
export interface RequestApiDataSuccess {
  nextBooking: Booking;
  currentBookings: Booking[];
  pastBookings: Booking[];
}

export interface RequestApiData {
  error?: { message: string };
  success?: RequestApiDataSuccess;
}

export interface RequestStatusApiData {
  error?: { message: string };
  success?: RequestApiDataSuccess;
}
