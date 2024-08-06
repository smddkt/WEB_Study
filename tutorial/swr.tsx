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






function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
