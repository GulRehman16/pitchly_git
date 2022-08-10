import React from 'react';

import MyStack from './src/navigation/stack';

import Account from './src/screens/homes/account';
import Default from './src/screens/homes/default';
import Profile from './src/screens/homes/profile';

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

  

};

export default App;
