import { reqAPI } from '.';

export const getUser = async (params: string) => {
  return reqAPI.get(`/${params}`);
};
