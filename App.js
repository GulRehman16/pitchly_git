import React from 'react';
import MyStack from './src/navigation/stack';
import AccountDeactivation from './src/screens/homes/AccountDeactivation';
import AccountSetting from './src/screens/homes/AccountSetting';
import AddServices from './src/screens/homes/AddServices';
import Blocked from './src/screens/homes/Blocked';
import ChangePassword from './src/screens/homes/ChangePassword';
import ChatDetails from './src/screens/homes/chatDetails';
import ChatScreen1 from './src/screens/homes/chatscreen1';
import DeactivateAccount from './src/screens/homes/DeactivateAccount';
import DeleteAccount from './src/screens/homes/DeleteAccount';
import EditProfile from './src/screens/homes/EditProfile';
import FeaturedPost from './src/screens/homes/FeaturedPost';
import Followers from './src/screens/homes/followers';
import Following from './src/screens/homes/following';
import GetFeaturedPost from './src/screens/homes/Get_It_Featured';
import GetFeatured from './src/screens/homes/Get_It_Featured';
import Language from './src/screens/homes/Language';
import MessageScreen from './src/screens/homes/MessageScreen';
import Notification from './src/screens/homes/Notifications';
import NotificationSetting from './src/screens/homes/notificationSetting';
import Payment from './src/screens/homes/PAyment';
import PictureSlider from './src/screens/homes/PictureSlider';

import PremiumMemberScreen from './src/screens/homes/PremiumMemberScreen';
import Profile from './src/screens/homes/profile';

import ThankYouScreen from './src/screens/homes/thank you';
import TooltipScreen from './src/screens/homes/ToolTipScreen';



const App = props => {
  // return <PremiumMemberScreen />
  //return <TooltipScreen />
  // return <PictureSlider />
  //return <DeactivateAccount />
  //return <DeleteAccount />
  //return <ThankYouScreen />
  //return <AddServices />
  // return <Profile />
  //return <EditProfile />
  // return <FeaturedPost />
  // return <Payment />
  //return <ChangePassword />
  // return <AccountSetting />
  // return <AccountDeactivation />
  //return <GetFeaturedPost />
  //return <GetFeatured />
  // return <Blocked />
  // return <Followers />
  // return <Following />

  // return <Language />
  //return <Notification />
  //return <NotificationSetting />
  //return <ChatDetails />
  // return <MessageScreen />`
  // // return <ChatScreen1 />
  return <MyStack {...props} />;
};
export default App;
