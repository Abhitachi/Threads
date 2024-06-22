import { Flex, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import UserHeader from '../components/UserHeader';
import useShowToast from '../hooks/useShowToast';

const UserPage = () => {
    const [user , setUser] = useState();
    const {username} = useParams();
    const showToast = useShowToast();
    const [loading , setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [fetchingPosts, setFetchingPosts] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try{
                const res = await fetch(`/api/users/profile/${username}`);
                const data = await res.json();
                console.log(data);
                if(data.error){
                    showToast("Error", data.error, "error");
                    return;
                }
                setUser(data);
            }catch(error){
                showToast("Error", error.message, "error");
            }finally{
                setLoading(false);
            }
        }    

        const fetchPosts = async () => {
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

        fetchUser();
        fetchPosts();

    },[username, showToast])

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