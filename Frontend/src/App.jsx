import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import UserLogin from './Pages/userLogin';
import UserSignUp from './Pages/userSignUp';
import CaptainLogin from './Pages/captainLogin';  
import CaptainSignUp from './Pages/captainSignUp';  
import Start from './Pages/Start';
import UserProtectedWrapper from './Pages/userProtectedWrapper.jsx';
import UserLogout from './Pages/userLogout.jsx';
import CaptainHome from './Pages/captainHome.jsx';
import CaptainProtectedWrapper from './Pages/captainProtectedWrapper.jsx';
import CaptainLogout from './Pages/captainLogout.jsx';
import RidingTrack from './components/RidingTrack.jsx';
import CompleteRide from './components/CompleteRide.jsx';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/riding" element={<RidingTrack />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/captainlogin" element={<CaptainLogin />} />
      <Route path="/completeRiding" element={<CompleteRide />}/>
      <Route path="/captainsignup" element={<CaptainSignUp />} />
      <Route path="/home" element={
        <UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>
      } />
      <Route path="/user/logout" element={
        <UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>
      } />
      <Route path="/captain/home" element={
        <CaptainProtectedWrapper>
          <CaptainHome />
        </CaptainProtectedWrapper>
      } />
      <Route path="/captain/logout" element={
        <CaptainProtectedWrapper>
          <CaptainLogout />
        </CaptainProtectedWrapper>
      } />

    </Routes>
  );
};

export default App;