import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

export const createRequest = async (sitterId: any, startDate: Date, endDate: Date): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sitterId, startDate, endDate }),
    credentials: 'include',
  };
  try {
    const fetchData = await fetch(`/request/create`, fetchOptions);
    const createResponse = await fetchData.json();
    console.log(createResponse);
    return createResponse;
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };   
  }  
};

export const getRequest = async (): Promise<AuthApiData> => {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    try {
      const fetchData = await fetch(`/request/list`, fetchOptions);
      const listsResponse = await fetchData.json();
      console.log(listsResponse);
      return listsResponse;
    } catch (e) {
      return { error: { message: 'Unable to connect to server. Please try again' } };   
    }
     
  };

  export const updateAccept = async (accepted: boolean, requestId: any): Promise<AuthApiData> => {
    const fetchOptions: FetchOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accepted, requestId }),
      credentials: 'include',
    };
    try {
      const fetchData = await fetch(`/request/accept`, fetchOptions);
      const updateResponse = await fetchData.json();
      console.log(updateResponse);
      return updateResponse;
    } catch (e) {
          return { error: { message: 'Unable to connect to server. Please try again' } };   
    }
     
  };
// createRequest();

// export default register;
