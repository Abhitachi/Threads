import { Avatar, Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from '@chakra-ui/react';
import { BsInstagram } from 'react-icons/bs';
import { CgMore } from 'react-icons/cg';


const UserHeader = () => {
    const toast = useToast()
    const copyURL = () => {
       const currentURL =  window.location.href;
       navigator.clipboard.writeText(currentURL)
       .then(() => {
        toast({description: 'copied link', position:'top-right'})
       });
       
    }

  return (
    <VStack gap={4} alignItems={'start'}>
        <Flex justifyContent={"space-between"} w={'full'} >
            <Box>
            <Text fontSize={'2xl'} frontWeight={'bold'}>
                Mark Zuckerberg
            </Text>
            <Flex gap={2} alignItems={"center"} >
                <Text fontSize={'sm'}>markzuckerberg</Text>
                <Text fontSize={'xs'} bg={'gray.dark'} color={'gray.light'} p={1} px={2} borderRadius ={'full'}>threads.net</Text>
            </Flex>
            </Box>
            <Box>
                <Avatar name='Mark Zuckerberg' src='/zuck-avatar.png' 
                size={{
                    base:"md",
                    md:"xl",
                }} />
            </Box>
        </Flex>

        <Text>Co-founder, executive chairman and CEO of Meta Platforms.</Text>

        <Flex w={'full'} justifyContent={'space-between'}>

            <Flex gap={2} alignItems={'center'}>
                <Text color={'gray.light'}>3.2K followers</Text>
                <Box w='1' h='1' bg={'gray.light'} borderRadius = {'full'}></Box>
                <Link color={'gray.light'}>instagram.com</Link>
            </Flex>

            <Flex>
                <Box className='icon-container'>
                    <BsInstagram size={24} cursor={'pointer'} />
                </Box>
                <Box className='icon-container'>
                    <Menu>
                        <MenuButton>
                            <CgMore size={24} cursor={'pointer'} />
                        </MenuButton>
                        <Portal>
                            <MenuList bg={'gray.dark'}>
                                <MenuItem bg={'gray.dark'} onClick={copyURL}>copy link</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </Box>
            </Flex>

        </Flex>

        <Flex w={'full'}>
            <Flex flex={1} borderBottom={'1.5px solid white'}  justifyContent={'center'} pb={'3'} cursor={'pointer'}>
                <Text fontWeight={'bold'}>Threads</Text>
            </Flex>
            <Flex flex={1} borderBottom={'1px solid white'} justifyContent={'center'} pb='3' color={'gray.light'} cursor={'pointer'}>
                <Text fontWeight={'bold'}>Replies</Text>
            </Flex>
        </Flex>

    </VStack>
  )
}

export default UserHeader;
