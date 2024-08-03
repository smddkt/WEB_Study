"use client"

import useSWR from 'swr';
import { getFetcher } from '@/libs/index';


export default function Page() {
  const { data, isValidating, error } = useSWR('(URL)', getFetcher);
  
  if (isValidating) {
    return <main>Loading...</main>;
  }
  if (error) {
    return <main>Error fetching data</main>;
  }
  return <main>{data ? JSON.stringify(data) : 'No data available'}</main>;
}


