import React, { useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      try {
        // const resp = await fetch('https://dummyjson.com/posts/9');
        const resp = await fetch(url);
        if (!resp.ok) {
          // throw new Error("Failed to fetch data");
          throw new Error('Failed to fetch data');
        }
        const responseData = await resp.json();
        console.log(responseData);

        setData(responseData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
}
