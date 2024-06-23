import { Avatar, Box, Divider, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import Actions from '../components/Actions';
import Comment from '../components/Comment';
import useGetUserProfile from '../hooks/useGetUserProfile';
import useShowToast from '../hooks/useShowToast';
import { formatDistanceToNow } from 'date-fns';
import userAtom from '../atoms/userAtom';
import { useRecoilValue } from 'recoil';
import { DeleteIcon } from '@chakra-ui/icons';
import {useNavigate} from 'react-router-dom';

const PostPage = () => {
    const [liked , setLiked] = useState(false);
    const [post , setPost] = useState();
    const {user , loading} = useGetUserProfile();
    const {pid} = useParams();
    const currentUser = useRecoilValue(userAtom)
    const showTost = useShowToast();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async() => {
            try{
                const res = await fetch(`/api/posts/${pid}`);
                const data = await res.json();
                if(data.error){
                    showTost("Error", data.error, "error");
                }
                console.log(data);
                setPost(data);
            }catch(error){
                showTost("Error", error.message, "error");
            }
        }
        fetchPost();
    },[setPost , pid])

    if(!user && loading){
        return (
            <Flex justifyContent = {'center'}>
                <Spinner size={'xl'} />
            </Flex>
        )
    }

    if(!post) return null;

    const handleDeletePost = async() => {
        if(!window.confirm('Are you sure you want to delete this post?')) return;
        try{
            const res = await fetch(`/api/posts/${post._id}`,{
                method:"DELETE",
            })
            const data = await res.json();
            if(data.error){
                showTost("Error", data.error, "error");
                return;
            }
            console.log(data);
            showTost("Success", "Post deleted successfully", "success");
            navigate(`/${user.username}`);
        }catch(error){
            showTost("Error", error.message, "error");
        }
    }

    return(
        <>
            <Flex>
                <Flex w={'full'} alignItems={'center'} gap={3}>
                    <Avatar src={user.profilePic} size={'md'} name='Mark Zuckerberg' />
                    <Flex>
                        <Text fontSize={'sm'} fontWeight={'bold'}>
                            {user.username}
                        </Text>
                        <Image src='/verified.png' w='4' h='4' ml='4' />
                    </Flex>
                </Flex>
                <Flex gap={4} alignItems = {'center'} >
                    <Text fontSize={'xs'} width ={36} textAlign = {'right'} color={'gray.light'}>
                        {formatDistanceToNow(new Date(post.createdAt))} ago
                    </Text>

                    {currentUser._id ===  user._id && <DeleteIcon  onClick = {handleDeletePost}/>} 
                </Flex>
            </Flex>

            <Text my={3}>{post.text}</Text>

            {post.img &&(
            <Box borderRadius={6} overflow={'hidden'} border={'1px solid '} borderColor={'gray.light'}>
                <Image src={post.img} w={'full'} />
            </Box> )}

            <Flex my={3} gap={3}>
                <Actions post={post} />
            </Flex>



            <Divider my={4} />
            {post?.replies?.map((reply) => (

            <Comment 
                key= {reply._id}
                reply={reply}
                lastReply = {reply._id === post.replies[post.replies.length - 1]._id}
            />
            ))}
        </>
    )
}

export default PostPage;
