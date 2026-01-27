import api from './api';

export const loginApi = async data => {
  const endpoint = '/login/';

  const response = await api({
    method: 'POST',
    url: endpoint,
    data,
  });
  return response;
};
