import React, { useEffect, useState } from 'react';
import Profile from '../Components/Profile';
import Post from '../Components/Post';
import useFetch from '../hooks/useFetch';
import { Button } from 'primereact/button';

export default function ReactPage() {
  const [post, setPost] = useState({});
  const [counter, setCounter] = useState(1);
  const dummyUrl = `https://dummyjson.com/posts/${counter}`;
  const { data, loading, error } = useFetch(dummyUrl);

  const jhonProfile = {
    title: 'Jhon Deo',
    showGithub: () => {
      alert('github link');
    },
  };

  const getPost = async () => {
    try {
      const resp = await fetch('https://dummyjson.com/posts/9');
      if (!resp.ok) {
        // throw new Error("Failed to fetch data");
        throw new Error('Failed to fetch data');
      }
      const data = await resp.json();
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const handelPostId = debounce(() => {
    setCounter((prev) => prev + 1);
  }, 500);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <section>
      <div className='container'>
        <h3 className='text-2xl text-400'>ReactPage</h3>
        <hr />
        <Profile
          title={jhonProfile.title}
          showGithub={jhonProfile.showGithub}
        />
      </div>
      <article className='mt-3'>
        <Post data={post} />
      </article>
      <article className='mt-2'>
        <div className='container'>
          <h1>Current Post ID - {counter}</h1>
          <Button label='Update Post ID' onClick={handelPostId} />
        </div>
      </article>
    </section>
  );
}
