import { User } from './User';

export interface AuthApiDataSuccess {
  message: string;
  formattedUser: User;
  token: string;
}

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
}
