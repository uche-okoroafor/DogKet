import { RequestApiData, RequestStatusApiData, NewRequestApiDataSuccess } from '../../interface/Requests';
import { FetchOptions } from '../../interface/FetchOptions';
import { useSocket } from '../../context/useSocketContext';

export const createRequest = async (
  profileId: string,
  sitterProfileId: string,
  startDate: Date,
  endDate: Date,
): Promise<NewRequestApiDataSuccess> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sitterProfileId, profileId, startDate, endDate }),
    credentials: 'include',
  };

  try {
    const fetchData = await fetch(`/request`, fetchOptions);
    // console.log('l', fetchData);
    // if (fetchData.status === 201) {
    //   console.log(1);
    // }
    return await fetchData.json();
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};

async function i() {
  const { success } = await createRequest(
    '616865a25c85973e00b2a5ed',
    '6142950d808eba39ecf8532e',
    new Date(),
    new Date(),
  );
  console.log(success);
  if (success?.newRequest) console.log('201');
}
i();

export const getRequests = async (): Promise<RequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  const timeStamp = new Date().getTime();
  try {
    const fetchData = await fetch(`/request/${timeStamp}`, fetchOptions);
    const { success } = await fetchData.json();
    return success;
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};

export const updateStatus = async (status: string, requestId: string | undefined): Promise<RequestStatusApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status, requestId }),
    credentials: 'include',
  };

  try {
    const fetchData = await fetch(`/request`, fetchOptions);
    return await fetchData.json();
  } catch (e) {
    return { error: { message: 'Unable to connect to server. Please try again' } };
  }
};
