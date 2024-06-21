import { Button } from '@chakra-ui/button';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useSetRecoilState } from 'recoil';
import userAtom from '../atoms/userAtom';
import useShowToast from '../hooks/useShowToast';

const LogoutButton = () => {
    const setUser = useSetRecoilState(userAtom);
    const showToast = useShowToast();

    const handleLogout = async () => {
        try{
            const res = await fetch('/api/users/logout', {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json();

            if(data.error){
                showToast("Error", data.error,"error");
                return;
            }
            localStorage.removeItem('user_info');
            setUser(null);
        }catch(err){
            showToast("Error", err, "error");
        }
    }
  return (
    <Button position={'fixed'} right={'30px'} top={'30px'} size={'sm'} onClick={handleLogout} leftIcon={<FiLogOut/>} colorScheme={'gray'}>
      
    </Button>
  )
}

export default LogoutButton
