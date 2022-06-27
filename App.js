import React from 'react'
import ChatScreen1 from './src/screens/homes/chatscreen1';
import StorieCreate from './src/screens/homes/Storiecreate';
import CameraStorie from './src/screens/homes/CameraStorie';
import MyStack from './src/navigation/stack';
import Viewstatus from './src/screens/homes/viewstatus';
import Account from './src/screens/homes/account';
import Myaccount from './src/screens/homes/myAccount';
import Profile from './src/screens/homes/profile';

const App = props => {
  // return <Profile />
  // return <Myaccount />
  // return <Account />
  // return <PictureSlider />
  //  return <Viewstatus />
  // return <StorieCreate />


  return <MyStack {...props} />;

  // return <CameraStorie />;
};

export default App;
