import { Flex, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import UserPost from '../components/UserPost';
import useShowToast from '../hooks/useShowToast';

const UserPage = () => {
    const [user , setUser] = useState();
    const {username} = useParams();
    const showToast = useShowToast();
    const [loading , setLoading] = useState(true);
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
        fetchUser();
    },[username, showToast])

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
        <UserPost likes={1200} replies={420} postImg = "/post1.png" postTitle="Let's talk about threads."/>
        <UserPost likes={15000} replies={1200} postTitle="Welcome to Threads"/>
        <UserPost likes={500} replies={209} postImg = "/post3.png" postTitle="My Inspiration"/>
        <UserPost likes={180} replies={34} postTitle="This is not X"/>
        </>
    )
}

export default UserPage;