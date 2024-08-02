/*
SWR is a React Hooks library for data fetching that simplifies common tasks like
caching, revalidation, focus tracking, and more.
It works seamlessly with Next.js for client-side data fetching.
*/

import useSWR from 'swr';

function MyComponent() {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/data', fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return <div>loaded: {data.count}</div>;
}
