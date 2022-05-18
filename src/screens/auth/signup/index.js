import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FormInput, AppButton, Header, NumInput} from '../../../components';
import {Images} from '../../../constants';

const SignUp = props => {
  const [state, setState] = useState({
    firsttName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    focus: '',
    secureText: true,
    secureText2: true,
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
            text="Sign Up"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.screenBody}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Image
                source={Images.Pictures.profile}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.uploadButton}>
              <Icon name="plus" type="Feather" style={{fontSize: 18}} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelName}>First Name</Text>
            <View
              style={{
                marginVertical: 8,
                borderColor: state.focus === 'firstName' ? '#707070' : null,
                borderWidth: state.focus === 'firstName' ? 1 : 0,
                borderRadius: 5,
              }}>
              <FormInput
                value={state.firsttName}
                onChangeText={value => setState({...state, firsttName: value})}
                placeHolder="Enter Your First Name"
                onFocus={() => setState({...state, focus: 'firstName'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>
            <Text style={styles.inputLabelName}>Last Name</Text>
            <View
              style={{
                marginVertical: 8,
                borderColor: state.focus === 'lastName' ? '#707070' : null,
                borderWidth: state.focus === 'lastName' ? 1 : 0,
                borderRadius: 5,
              }}>
              <FormInput
                value={state.lastName}
                onChangeText={value => setState({...state, lastName: value})}
                placeHolder="Enter Your Last Name"
                onFocus={() => setState({...state, focus: 'lastName'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

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
                placeHolder="Enter Your Email"
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
                icon
                secureText={state.secureText}
                iconRName={state.secureText ? 'eye-with-line' : 'eye'}
                iconRType="Entypo"
                onPressR={() =>
                  setState({...state, secureText: !state.secureText})
                }
                placeHolder="Enter Your Password"
                onFocus={() => setState({...state, focus: 'password'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

            <Text style={styles.inputLabelName}>Confirm Password</Text>
            <View
              style={{
                marginVertical: 8,
                borderColor:
                  state.focus === 'confirmPassword' ? '#707070' : null,
                borderWidth: state.focus === 'confirmPassword' ? 1 : 0,
                borderRadius: 5,
              }}>
              <FormInput
                value={state.confirmPassword}
                onChangeText={value =>
                  setState({...state, confirmPassword: value})
                }
                secureText={state.secureText}
                onPressR={() =>
                  setState({...state, secureText: !state.secureText})
                }
                placeHolder="Re-Enter Your Password"
                onFocus={() => setState({...state, focus: 'confirmPassword'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>
            <Text style={styles.inputLabelName}>Confirm Password</Text>
            <View
              style={{
                width: '100%',
                height: 51,
                marginVertical: 8,
                borderColor: state.focus === 'phone' ? '#707070' : null,
                borderWidth: state.focus === 'phone' ? 1 : 0,
                borderRadius: 5,
              }}>
              <NumInput />
            </View>

            <View style={{paddingVertical: 40, width: '100%'}}>
              <AppButton
                label="Sign Up"
                onPress={() => props.navigation.replace('login')}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            height: 40,
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black'}}>Already have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('login')}>
            <Text style={{color: 'black'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  screenHeader: {
    width: '90%',
    height: 120,
    marginTop: 50,
    paddingBottom: 20,
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

  screenBody: {
    width: '90%',
    alignSelf: 'center',
  },

  profileImageContainer: {
    width: 82,
    height: 82,
    alignSelf: 'center',
  },

  profileImage: {
    width: 82,
    height: 82,
    borderRadius: 100,
    overflow: 'hidden',
  },

  uploadButton: {
    width: 21,
    height: 21,
    position: 'absolute',
    bottom: 6,
    right: 6,
    borderRadius: 100,
    backgroundColor: '#E9EBEF',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  inputContainer: {
    width: '100%',
    // height: 300,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabelName: {alignSelf: 'flex-start', color: '#000000', fontSize: 14},
});
