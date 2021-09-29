export interface User {
  // TODO: needs to replace _id with id when server sends response. (I will fix it when integrating)
  _id?: string;
  id?: string;
  email: string;
  username: string;
  isSitter?: boolean;
  profileImg?: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
