import HTTPError from '../network/httpError';

const ACCESS_TOKEN = 'accessToken';
const USER_ID = 'userId';

const useDeleteToken = (error: HTTPError) => {
  console.info(error.APIMessage);
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(USER_ID);
};

export { useDeleteToken };
