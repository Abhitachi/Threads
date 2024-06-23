import { DeleteIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import userAtom from '../atoms/userAtom';
import postsAtom from '../atoms/postsAtom'
import useShowToast from '../hooks/useShowToast';
import Actions from './Actions';


const Post = ({post, postedBy}) => {
    const [user, setUser] = useState(null)
    const showToast = useShowToast()
    const currentUser = useRecoilValue(userAtom)
    const [posts , setPosts] = useRecoilState(postsAtom)
        // console.log(postedBy, post);
    console.log(post);
    console.log(user);

    const navigate = useNavigate();

    useEffect(() => {
		const getUser = async () => {
			try {
				const res = await fetch("/api/users/profile/" + postedBy);
				const data = await res.json();
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
				setUser(data);
			} catch (error) {
				showToast("Error", error.message, "error");
				setUser(null);
			}
		};

		getUser();

	}, [postedBy, showToast]);

    if(!user) return null;

    const handleDeletePost = async (e) => {
        try{
            e.preventDefault();
            if(!window.confirm('Are you sure you want to delete this post?')) return;
            const res = await fetch(`/api/posts/${post._id}`, {
                    method:"DELETE",
                });
                const data = await res.json();
                if(data.error){
                    showToast("Error", data.error, "error");
                    return;
                }
                showToast('Success', "Post deleted successfully", 'success');
                setPosts(posts.filter((p) => p._id !== post._id));

        }catch(error){
            showToast('Error', error.message, 'error');
        }
    }

  return (
    <Link to={`/${user.username}/post/${post._id}`}>
        <Flex gap={3} mb={4} py={5}>
            <Flex flexDirection={'column'} alignItems={"center"}>
                <Avatar size='md' name={user.username} src={user?.profilePic}
                    onClick={(e) => {
                        e.preventDefault()
                        navigate(`/${user.username}`)
                    }}
                />
                <Box w='1px' h={'full'} bg='gray.light' my={2}></Box>
                <Box position={'relative'} w={'full'}>
                {post.replies.length === 0 && <Text textAlign={'center'}></Text>}
                {post.replies[0] && 
                (
                    <Avatar 
                        name='Dan Abrahmov' 
                        src={post.replies[0].userProfilePic}
                        size='xs' 
                        position={'absolute'}  
                        top={'0px'} left={'15px'} 
                        padding={'2px'}
                    />
                )}
                {post.replies[1] && (
                    <Avatar 
                    name='Kent Dodds' 
                    src={post.replies[1].userProfilePic}
                    size='xs' 
                    position={'absolute'}  
                    bottom={'0px'} left={'4px'} 
                    padding={'2px'}
                    />
                )}
                {post.replies[2] && (
                    <Avatar name='Ryan Florence' 
                    size='xs' position={'absolute'}  
                    bottom={'0px'} right={'-5px'} 
                    padding={'2px'} 
                    src={post.replies[2].userProfilePic}
                    />
                )}
                </Box>
            </Flex>
            <Flex flex = {1} flexDirection={'column'} gap={2}>
                <Flex justifyContent={'space-between'} w={"full"}>
                    <Flex w={'full'} alignItems={'center'}>
                        <Text fontSize={'sm'} fontWeight={'bold'}
                            onClick={(e) => {
                                e.preventDefault()
                                navigate(`/${user.username}`)
                            }}
                        >{user?.username}
                        </Text>
                        <Image src="/verified.png" w={4} h={4} ml={1}/>
                    </Flex>
                    <Flex gap={4} alignItems={"center"}>
                        <Text fontSize={'sm'} size={'sm'} textAlign={'right'} width={36} color={'gray.lights'}>
                            {formatDistanceToNow(new Date(post.createdAt), new Date())} ago 
                        </Text>
                        
                        { currentUser?._id === user?._id && <DeleteIcon size={20} onClick={handleDeletePost}/>}
                    </Flex>
                </Flex>

                <Text fontSize={'sm'} >{post.text}</Text>
                {post.img && (

                <Box borderRadius={6} overflow={'hidden'} border={'1px solid '} borderColor={'gray.light'}>
                    <Image src={post.img} w={'full'} />
                </Box>  
                )}
                <Flex gap={3} my={1}>
                    <Actions post = {post}/>
                </Flex>


            </Flex>
        </Flex>
    </Link>
  )
}

export default Post
