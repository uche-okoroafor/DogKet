export interface RequestApiDataSuccess {
    nextBooking: any;
    currentBookings: any[];
    pastBookings: any[];
  }
  
export interface RequestApiData {
    error?: { message: string };
    success?: RequestApiDataSuccess;
  }
  
export interface RequestStatusApiDataSuccess {
  request: any;
}

export interface RequestStatusApiData {
  error?: { message: string };
  success?: RequestApiDataSuccess;
}
  