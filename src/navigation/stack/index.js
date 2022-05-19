import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import splash from '../../screens/auth/splash';
import login from '../../screens/auth/login';
import home from '../../screens/homes/home';
import signup from '../../screens/auth/signup';
import mainAuth from '../../screens/auth/mainAuth';
import MyTabs from '../bottomTab';
import TermsAndCondition from '../../screens/homes/terms&conditons';
import PrivacyPolicy from '../../screens/homes/privacyPolicy';
import ContactUs from '../../screens/auth/contactUs';
import ForgetPassword from '../../screens/auth/forgetPassword';
import ForgetConfirm from '../../screens/auth/forgetConfirm';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="mainAuth"
        component={mainAuth}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="login"
        component={login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgetConfirm"
        component={ForgetConfirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="contactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="termsAndCondition"
        component={TermsAndCondition}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="privacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
