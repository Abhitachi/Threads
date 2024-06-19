import React from 'react';
import UserHeader from '../components/UserHeader';
import UserPost from '../components/UserPost';

const UserPage = () => {
    return(
        <>
        <UserHeader/>
        <UserPost likes={1200} replies={420} postImg = "/post1.png" postTitle="Let's talk about threads."/>
        <UserPost likes={15000} replies={1200} postTitle="Welcome to Threads"/>
        <UserPost likes={500} replies={209} postImg = "/post3.png" postTitle="My Inspiration"/>
        <UserPost likes={180} replies={34} postTitle="This is not X"/>
        </>
    )
}

export default UserPage;