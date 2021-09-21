import { RequestApiData, RequestStatusApiData } from '../../interface/Requests';
import { FetchOptions } from '../../interface/FetchOptions';

export const createRequest = async (sitterId: any, startDate: number, endDate: number): Promise<RequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sitterId, startDate, endDate }),
    credentials: 'include',
  };

  try {
    const fetchData = await fetch(`/request/create`, fetchOptions);
    const createResponse = await fetchData.json();
    return createResponse;
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};

// const d = new Date();
// const lastMonth = d.setMonth(d.getMonth() +1);
// const lastWeek = Date.now() + 604800000;
// createRequest('6142950d808eba39ecf8532e', lastWeek, lastWeek);
// createRequest('6142950d808eba39ecf8532e', lastMonth, lastMonth);
// console.log('new');
export const getRequests = async (): Promise<RequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  const timeStamp = new Date().getTime();
  try {
    const fetchData = await fetch(`/request/list/${timeStamp}`, fetchOptions);
    const { success } = await fetchData.json();
    console.log(success);
    return success.resModel;
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};

export const updateAccept = async (status: string, requestId: string): Promise<RequestStatusApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status, requestId }),
    credentials: 'include',
  };

  try {
    const fetchData = await fetch(`/request/status`, fetchOptions);
    const updateResponse = await fetchData.json();
    console.log(updateResponse);
    return updateResponse;
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};
// createRequest();

// export default register;
