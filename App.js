import React from 'react';
import MyStack from './src/navigation/stack';
import ChatScreen1 from './src/screens/homes/chatscreen1';
import StorieCreate from './src/screens/homes/Storiecreate';
import CameraStorie from './src/screens/homes/CameraStorie';
const App = props => {
  // return <PictureSlider />
  // return <MyStack {...props} />;

  return <CameraStorie />;
};

export default App;
