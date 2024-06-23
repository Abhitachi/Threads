import { Flex, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import postAtom from '../atoms/postsAtom';
import UserHeader from '../components/UserHeader';
import {useRecoilState} from 'recoil';
import useGetUserProfile from '../hooks/useGetUserProfile';
import useShowToast from '../hooks/useShowToast';

const UserPage = () => {
   const {user, loading} = useGetUserProfile();
    const {username} = useParams();
    const showToast = useShowToast();
    // const [loading , setLoading] = useState(true);
    const [posts, setPosts] = useRecoilState(postAtom);
    const [fetchingPosts, setFetchingPosts] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            if(!user) return;
            setFetchingPosts(true);
            try{
                const res = await fetch(`/api/posts/user/${username}`);
                const data = await res.json();
                setPosts(data);
                console.log(data);
            }catch(error){
                showToast("Error", error.message, "error");
                setPosts([]);
            }finally{
                setFetchingPosts(false);
            }

        }

        fetchPosts();

    },[username, showToast , user, setPosts])

    console.log(user);

    if(!user && loading) {
        return (
           <Flex justifyContent={'center'} >
                <Spinner size={'xl'}/> 
           </Flex>
        )
    }
    if(!user && !loading) return <h1>User not Found</h1>;

    return(
        <>
        <UserHeader user = {user}/>
        {!fetchingPosts && posts.length === 0 && <h1>user has no posts</h1>}
        {fetchingPosts && (
            <Flex justifyContent={'center'} my={12} >
                <Spinner size={'xl'}/> 
            </Flex>
        )}
        {posts.map((post) => (
            <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
        </>
    )
}

export default UserPage;