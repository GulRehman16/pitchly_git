import React from 'react';
import MyStack from './src/navigation/stack';
import AddTelent from './src/screens/homes/AddTelent';
import CameraStorie from './src/screens/homes/CameraStorie';
import Home11 from './src/screens/homes/home11';
import HomeScreensix from './src/screens/homes/home6';
import Profile from './src/screens/homes/profile';
import SavedStatus from './src/screens/homes/savedstatus';
import StoreCreate from './src/screens/homes/Storecreate';
import TalentScreen from './src/screens/homes/TalentScreen';



const App = props => {



  // return <TalentScreen />
  //  return <AddTelent />
  // return <CameraStorie />

  // return <StoreCreate />
  // return <HomeScreensix />
  // return <Home11 />
  //return <Profile />
  // return <SavedStatus />
  return <MyStack {...props} />;

};

export default App;
