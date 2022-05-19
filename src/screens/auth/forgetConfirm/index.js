import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import {Images} from '../../../constants';
import {FormInput, AppButton, Header} from '../../../components';
import {Icon} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';

const ForgetConfirm = props => {
  return (
    <SafeAreaView style={styles.imageContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={styles.screenHeader}>
          <Header
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.screenBody}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Image
                source={Images.Logos.done}
                resizeMode={'contain'}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text
              style={{
                width: '80%',
                height: 70,
                fontSize: 26,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 20,
                color: '#000000',
              }}>
              Password Reset Link Sent
            </Text>
            <Text
              style={{
                width: '80%',
                textAlign: 'center',
                height: 41,
                fontSize: 16,
                marginTop: 20,
                color: '#000000',
              }}>
              Kindly Check Your Email @******@gmail.com
            </Text>
          </View>

          <View style={{paddingVertical: 20, width: '100%'}}>
            <AppButton
              LinearColor1={'#5DF7B8'}
              LinearColor2={'#3109FB'}
              color={'white'}
              borderWidth={0.5}
              borderColor={'#707070'}
              backgroundColor={'#FFFFFF'}
              label="Continue"
              onPress={() => props.navigation.replace('login')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ForgetConfirm;
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  screenHeader: {
    width: '90%',
    height: 80,
    marginTop: 50,
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
    width: '80%',
    height: '100%',
    alignSelf: 'center',
  },
  profileImageContainer: {
    width: 135,
    height: 135,
    alignSelf: 'center',
  },

  profileImage: {
    width: 135,
    height: 135,
  },
});
