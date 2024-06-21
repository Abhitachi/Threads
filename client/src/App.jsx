import { Container } from '@chakra-ui/react';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userAtom from './atoms/userAtom';
import Headers from './components/Headers';
import LogoutButton from './components/LogoutButton';
import './index.css';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import UpdateProfilePage from './pages/UpdateProfilePage';
import UserPage from './pages/UserPage';
import CreatePost from './components/CreatePost';

function App() {
    const user = useRecoilValue(userAtom);

  return (
   <Container maxW='620px'>
    <Headers/>
    <Routes>
      <Route path='/' element={user ? <HomePage/> : <Navigate to = '/auth' />} />
      <Route path='/auth' element={!user ? <AuthPage/> : <Navigate to='/' />} />
      <Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to = '/auth' />} />
      <Route path='/:username' element={<UserPage/>} />  
      <Route path='/:username/post/:pid' element={<PostPage/>} />  
    </Routes>

    {user && <LogoutButton />}
    {user && <CreatePost />}
   </Container>
  )
}

export default App;
