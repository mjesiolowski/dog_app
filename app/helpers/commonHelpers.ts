import axios from 'axios';

export async function fetchData<T>(url: string): Promise<T> {
  const response = await axios.request<T>({ url });

  return response.data;
}
