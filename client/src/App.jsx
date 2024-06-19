import { Container } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Headers from './components/Headers';
import './index.css';
import PostPage from './pages/PostPage';
import UserPage from './pages/UserPage';

function App() {
  
  return (
   <Container maxW='620px'>
    <Headers/>
    <Routes>
      <Route path='/:username' element={<UserPage/>} />  
      <Route path='/:username/post/:pid' element={<PostPage/>} />  
    </Routes>
   </Container>
  )
}

export default App;
