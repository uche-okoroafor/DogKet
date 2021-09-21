export interface RequestApiDataSuccess {
    nextBooking: any,
    currentBookings: any[],
    pastBookings: any[],
  }
  
export interface RequestApiData {
    error?: { message: string };
    success?: RequestApiDataSuccess;
  }
  