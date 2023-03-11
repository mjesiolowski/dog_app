import axios from 'axios';

export async function fetchData<T>(url: string): Promise<T> {
  const response = await axios.request<T>({ url });

  return response.data;
}

export const capitalizeFirstLetter = (string: string) => string[0].toUpperCase() + string.slice(1);
