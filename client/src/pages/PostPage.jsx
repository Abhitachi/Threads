import { Avatar, Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Actions from '../components/Actions';
import Comment from '../components/Comment';

const PostPage = () => {
    const [liked , setLiked] = useState(false);
    return(
        <>
            <Flex>
                <Flex w={'full'} alignItems={'center'} gap={3}>
                    <Avatar src='/zuck-avatar.png' size={'md'} name='Mark Zuckerberg' />
                    <Flex>
                        <Text fontSize={'sm'} fontWeight={'bold'}>
                            markzuckerberg
                        </Text>
                        <Image src='/verified.png' w='4' h='4' ml='4' />
                    </Flex>
                </Flex>
                <Flex gap={4} alignItems={'center'}>
                    <Text fontSize={'sm'} color={'gray.light'}>1d</Text>
                    <BsThreeDots />
                </Flex>
            </Flex>

            <Text my={3}>Let's talk About Threads</Text>
            <Box borderRadius={6} overflow={'hidden'} border={'1px solid '} borderColor={'gray.light'}>
                <Image src={'/post1.png'} w={'full'} />
            </Box> 

            <Flex my={3} gap={3}>
                <Actions liked={liked} setLiked={setLiked} />
            </Flex>

            <Flex gap={2} alignItems={'center'}>
                    <Text color={'gray.light'} fontSize={'sm'}>
                        420 likes
                    </Text>
                    <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
                    <Text color={'gray.light'} fontSize={'sm'}>
                        10 replies
                    </Text> 
            </Flex>

            <Divider my={4} />
            <Comment 
                comment='Looks Cool ...!'
                createdAt='1d'
                likes={10}
                username={'Dan Abrahmov'}
                userAvatar={'https://bit.ly/dan-abramov'}
            />
            <Comment 
                comment='is it copy of x?'
                createdAt='1d'
                likes={8}
                username={'Kent C Dodds'}
                userAvatar={"https://bit.ly/kent-c-dodds"}
            />
            <Comment 
                comment='remi-Xxxxxxxxx!'
                createdAt='1d'
                likes={4}
                username={'remixCreator'}
                userAvatar={"https://bit.ly/ryan-florence"}
            />
        </>
    )
}

export default PostPage;
