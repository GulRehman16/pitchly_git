import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import {Images} from '../../../constants';
import {FormInput, AppButton, Header, CheckBox} from '../../../components';

const Login = props => {
  const [state, setState] = useState({
    email: '',
    password: '',
    focus: '',
    secureText: true,
  });

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={Images.Pictures.appBg}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={styles.screenHeader}>
          <Header
            visibleText
            text="Sign In"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.screenBody}>
          <View style={styles.headingTextView}>
            <Text style={styles.headingText}>Welcome!</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelName}>Email</Text>
            <View
              style={{
                marginVertical: 8,
                borderColor: state.focus === 'email' ? '#707070' : null,
                borderWidth: state.focus === 'email' ? 1 : 0,
                borderRadius: 5,
              }}>
              <FormInput
                value={state.email}
                onChangeText={value => setState({...state, email: value})}
                iconL
                iconLName="mail"
                iconLType="AntDesign"
                placeHolder="Enter your Email"
                onFocus={() => setState({...state, focus: 'email'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>
            <Text style={styles.inputLabelName}>Password</Text>
            <View
              style={{
                marginVertical: 8,
                borderColor: state.focus === 'password' ? '#707070' : null,
                borderWidth: state.focus === 'password' ? 1 : 0,
                borderRadius: 5,
              }}>
              <FormInput
                value={state.password}
                onChangeText={value => setState({...state, password: value})}
                iconL
                secureText={state.secureText}
                iconLName="lock"
                iconLType="Feather"
                iconR
                iconRName={state.secureText ? 'eye-with-line' : 'eye'}
                iconRType="Entypo"
                onPressR={() =>
                  setState({...state, secureText: !state.secureText})
                }
                placeHolder="**********"
                onFocus={() => setState({...state, focus: 'password'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                marginTop: 5,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <CheckBox
                  square
                  alignItem={'flex-start'}
                  onPress={() => setState({checked: !state.checked})}
                  checked={state.checked}
                  text={'Remember'}
                />
              </View>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => {
                  props.navigation.navigate('forgetPassword');
                }}>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{paddingVertical: 40, width: '100%'}}>
              <AppButton
                LinearColor1={'#5DF7B8'}
                LinearColor2={'#3109FB'}
                color={'white'}
                borderWidth={0.5}
                borderColor={'#707070'}
                backgroundColor={'#FFFFFF'}
                label="Sign In"
                onPress={() =>
                  props.navigation.replace('MyTabs', {screen: 'home'})
                }
              />
            </View>
          </View>
          <View style={{marginTop: -30, marginBottom: 60}}>
            <View style={styles.footerBtn}>
              <Text style={styles.footerText1}>Create an account</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.navigate('login')}>
                <Text style={styles.footerText2}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            position: 'absolute',
            width: '100%',

            bottom: 10,
          }}>
          <View style={styles.footerBtn}>
            <Text style={styles.footerText1}>Having trouble</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => props.navigation.navigate('contactUs')}>
              <Text style={styles.footerText2}>Contact us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  screenHeader: {
    width: '90%',
    height: 150,
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headingText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headingTextView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  screenBody: {
    width: '90%',
    alignSelf: 'center',
  },

  inputContainer: {
    width: '100%',
    // height: 300,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabelName: {alignSelf: 'flex-start', color: '#000000', fontSize: 14},
  footerBtn: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText1: {color: 'black', fontSize: 16, fontWeight: '500'},
  footerText2: {
    fontSize: 16,
    color: '#4059E4',
    paddingLeft: 4,
    fontWeight: '500',
  },
});
