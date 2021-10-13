export interface User {
  // TODO: needs to replace _id with id when server sends response.
  _id?: string;
  id?: string;
  profileId?: string;
  email: string;
  username: string;
  isSitter?: boolean;
  profileId?: string;
  profileImg?: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
