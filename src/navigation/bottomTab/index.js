import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import home from '../../screens/homes/home';
import profile from '../../screens/homes/profile';
<<<<<<< HEAD
import settings from '../../screens/homes/settings';
import ChatScreen1 from '../../screens/homes/chatscreen1';
import {TabBar} from '../../components';
=======
import { TabBar } from '../../components';
import ChatScreen1 from '../../screens/homes/chatscreen1';
import Notification from '../../screens/homes/Notifications';
import settings from '../../screens/homes/settings';
import TooltipScreen from '../../screens/homes/ToolTipScreen';

>>>>>>> 56524ebf67339a577d68249d457cd92b6f10a2cb

const Tab = createBottomTabNavigator();

const MyTabs = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
      }}
      tabBarPosition="bottom"
<<<<<<< HEAD
      barStyle={{backgroundColor: '#0000'}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="home" component={home} options={{headerShown: false}} />

      <Tab.Screen
        name="chatScreen1"
        component={ChatScreen1}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="settings"
        component={settings}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="chatScreen3"
        component={''}
        options={{headerShown: false}}
=======
      barStyle={{ backgroundColor: '#0000' }}
      tabBar={props => <TabBar ar {...props} />}>
      <Tab.Screen name="home" component={home}
        options={{ headerShown: false }} />
      <Tab.Screen
        name='ChatScreen1'
        component={ChatScreen1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TooltipScreen"
        component={TooltipScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name='Notification'
        component={Notification}
        options={{ headerShown: false }}
>>>>>>> 56524ebf67339a577d68249d457cd92b6f10a2cb
      />
      <Tab.Screen
        name="profile"
        component={profile}
<<<<<<< HEAD
        options={{headerShown: false}}
      />
=======
        options={{ headerShown: false }}
      />

>>>>>>> 56524ebf67339a577d68249d457cd92b6f10a2cb
    </Tab.Navigator>

  );
};

export default MyTabs;
