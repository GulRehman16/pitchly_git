import React from 'react';
import MyStack from './src/navigation/stack';
import Productdetails from './src/screens/homes/ProductDetails';
import Comment from './src/components/comment';
import PictureSlider from './src/screens/homes/PictureSlider';
import Home from './src/screens/homes/home';
import GetFeaturedPost from './src/screens/homes/Get_It_Featured';
import ToolTipScreen from './src/screens/homes/ToolTipScreen';
import FeaturedPost from './src/screens/homes/FeaturedPost';
import ChatScreen1 from './src/screens/homes/chatscreen1';
import ChatScreen from './src/screens/homes/ChatScreen';
import AddPost from './src/screens/homes/Addpost';
import Addproduct from './src/screens/homes/Addproduct';
import Post from './src/components/post';
import HomeScreensix from './src/screens/homes/home6';
import Account from './src/screens/homes/account';
import Profile from './src/screens/homes/profile';
import Following from './src/screens/homes/following';


const App = props => {
  // return <PictureSlider />
  // return <MyStack {...props} />;
  // return <Productdetails {...props} />
  // return <PremiumMemberScreen />
  //return <ToolTipScreen />
  //return <Home />
  //return <DeactivateAccount />
  //return <DeleteAccount />
  // return <ThankYouScreen />
  // return <AddServices />
  // return <Following />
  // return <EditProfile />
  //return <FeaturedPost />
  // return <Payment />
  //return <ChangePassword />
  // return <AccountSetting />
  //return <AccountDeactivation />
  // return <GetFeaturedPost />
  // return <Blocked />
  //return <Followers />
  // return <Following />
  // return <Language />
  // return <Notification />
  //return <NotificationSetting />
  //return <ChatDetails />
  // return <MessageScreen />`
  // return <ChatScreen1 />
  // return <FeaturedPost />
  //return <Productdetails />
  // return <Addproduct />
  //return <ChatScreen />
  //return <AddPost />
  //return <Profile />
  //  return <Post />
  //return <HomeScreensix />
  //return <Account />
  return <MyStack {...props} />;

};

export default App;
