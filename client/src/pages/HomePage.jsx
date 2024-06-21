import { Flex, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import useShowToast from '../hooks/useShowToast';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const showToast = useShowToast();

  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true);
      try{
        const res = await fetch(`/api/posts/feed`);
        const data = await res.json();
        if(data.error){
          showToast('Error', data.error, 'error');
        }
        console.log(data);
        setPosts(data.feedPosts);
      }catch(error){
        showToast('Error', error, 'error');
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchPosts()

  }, [setPosts, showToast])

  console.log(posts)
  return (
    <>

      {loading &&  (
        <Flex justify={'center'}>
          <Spinner size={'xl'}/>
        </Flex>
      ) }

      {!loading && posts.length == 0 && (<h1>No Posts found for you, follow some users to see their posts</h1>)}

      {posts.map((post) => (
        <Post key = {post._id} post={post} postedBy = {post.postedBy}/>
      ))}

      

    </>
  )
}

export default HomePage
