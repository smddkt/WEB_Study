"use client"

import useSWR from 'swr';
import { getFetcher } from '@/libs/index';


export default function Page() {
  const { data, isValidating, error } = useSWR('https://api.99-f.com', getFetcher);
  
  if (isValidating) {
    return <main>Loading...</main>;
  }
  if (error) {
    return <main>Error fetching data</main>;
  }
  return <main>{data ? JSON.stringify(data) : 'No data available'}</main>;
}
























// import useSWR from 'swr';
// import { getFetcher } from '@/libs/index';

// export default function Page() {
//   const { data, error, isValidating } = useSWR('https://api.99-f.com', getFetcher);

//   if (isValidating) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <main>
//       <h1>Home Page</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </main>
//   );
// }




// import useSWR from 'swr';

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function Page() {
//   const { data, error } = useSWR('https://api.99-f.com', fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;

//   return <div>Data: {JSON.stringify(data)}</div>;
// }


