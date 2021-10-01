export type Gender = 'Male' | 'Female' | 'Other';
export type Availability = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
// TODO: Need to declare a proper type alias for Phone (format: 123-1234-1234)
// export type Phone
// TODO: Need to declare a proper type alias for DateOfBirth (format: 2021-01-01)
// export type DateOfBirth

export interface Profile {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  photos: string[];
  gender: Gender;
  availability: Availability[];
  isSitter: boolean;
  address: string;
  phone: string;
  description: string;
  birth: Date;
  title: string;
  hourlyWage: number;
  createdAt: Date;
  updatedAt: Date;
}
