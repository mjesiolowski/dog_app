import axios from 'axios';

export async function fetchData<T>(url: string): Promise<T> {
  const response = await axios.request<T>({ url });

  return response.data;
}

export const capitalizeFirstLetter = (string: string) => string[0].toUpperCase() + string.slice(1);

export function genCharArray(charA: string, charZ: string) {
  const a = []; let i = charA.charCodeAt(0); const
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
