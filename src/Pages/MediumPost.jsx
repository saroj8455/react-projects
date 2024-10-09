import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';

export default function MediumPost() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // IIFE for async
    (async () => {
      console.log('iife called');
      setError(false);
      setLoading(true);
      try {
        const resp = await fetch('https://dummyjson.com/posts/1');
        const data = await resp.json();
        if (!resp.ok) {
          setMessage(data.message);
          throw new Error(data.message);
        }
        setPost(data);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (error)
    return (
      <div className='card text-center mt-5 text-2xl'>
        <h3>Something went wrong! </h3>
        <p>{message}</p>
      </div>
    );
  if (loading)
    return <h3 className='text-center mt-5 text-2xl'>Loading......!</h3>;

  return (
    <section>
      <div className='container'>
        <div className='card'>
          {post && (
            <Card title={post.title}>
              <div className='mb-3 flex gap-2'>
                {post?.tags?.map((tag, index) => (
                  <Chip key={index} label={tag} />
                ))}
              </div>

              <p className='m-0'>{post.body}</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
