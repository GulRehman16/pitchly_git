import React from 'react'
import ChatScreen1 from './src/screens/homes/chatscreen1';
import StorieCreate from './src/screens/homes/Storiecreate';
import CameraStorie from './src/screens/homes/CameraStorie';
import MyStack from './src/navigation/stack';
import Viewstatus from './src/screens/homes/viewstatus';
import Account from './src/screens/homes/account';

import Profile from './src/screens/homes/profile';
import Picview from './src/screens/homes/picView';
import StorieView from './src/screens/homes/storieview';

const App = props => {
  // return <Profile />

  // return <Account />



  return <MyStack {...props} />

  // return <CameraStorie />;
};

export default App;
