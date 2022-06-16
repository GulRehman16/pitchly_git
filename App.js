import React from 'react';
import MyStack from './src/navigation/stack';
import StoreCreate from './src/screens/homes/Storecreate';
import Productdetails from './src/screens/homes/ProductDetails';
const App = props => {
  return <MyStack {...props} />;
  // return <Productdetails {...props} />;
};

export default App;
