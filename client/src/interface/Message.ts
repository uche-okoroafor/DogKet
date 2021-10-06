export interface Message {
  _id: string;
  sender: string;
  text: string;
  recipientRead: boolean;
  createdAt: string;
  updatedAt: string;
}
