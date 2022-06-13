import React from 'react';
import MyStack from './src/navigation/stack';
import FeaturedPost from './src/screens/homes/FeaturedPost';
import Productdetails from './src/screens/homes/ProductDetails';
import Comment from './src/components/comment';
const App = props => {
  // return <MyStack {...props} />;
  return <Productdetails {...props} />;
};

export default App;
