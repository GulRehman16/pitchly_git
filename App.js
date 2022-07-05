import React from 'react';
import ChatScreen1 from './src/screens/homes/chatscreen1';
import StorieCreate from './src/screens/homes/Storiecreate';
import CameraStorie from './src/screens/homes/CameraStorie';
import MyStack from './src/navigation/stack';
import Viewstatus from './src/screens/homes/viewstatus';
import Account from './src/screens/homes/account';
import Default from './src/screens/homes/default';
import Profile from './src/screens/homes/profile';
import Picview from './src/screens/homes/picView';
import StorieView from './src/screens/homes/storieview';
import {Provider} from 'react-redux';
import store from './Redux/store';

const App = props => {
  // return <Profile />

  // return <Account />;

  return (
    <Provider store={store}>
      <MyStack {...props} />
    </Provider>
  );

  // return <Picview />;
};

export default App;
