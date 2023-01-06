import axios from 'axios';
import { QueryFunctionContext } from "@tanstack/react-query";

const filmApi = axios.create({
  baseURL: 'https://api.tvmaze.com'
});

export const getFilms = async ({ queryKey, signal }: QueryFunctionContext<string[]>): Promise<ShowData[]> => {
  const [, query] = queryKey;
  if(!query) return [];

  const response = await filmApi.get(`/search/shows?q=${query}`, {
    signal
  });
  return response.data;
};
