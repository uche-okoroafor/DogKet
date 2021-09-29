import { FormikHelpers } from 'formik';

interface FetchOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: string;
  credentials?: RequestCredentials;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  birth: string;
  description: string;
}
export interface Props {
  handleSubmit?: (
    { firstName, lastName, email, phone, address, gender, birth, description }: IProfile,
    { setStatus, setSubmitting }: FormikHelpers<IProfile>,
  ) => void;
  validationSchema: { any: unknown };
}

interface ProfileApiDataSuccess {
  message: string;
  profile: IProfile;
}

interface ProfileApiData {
  error?: { message: string };
  success?: ProfileApiDataSuccess;
}

const createUpdateProfile = async (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  gender: string,
  birth: string,
  description: string,
  method: string,
  path: string,
): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, phone, address, gender, birth, description }),
  };
  return await fetch(path, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createUpdateProfile;
