import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text, View,
  StatusBar,
  ImageBackground,
  ScrollView,
  Image
} from 'react-native';
import { AppButton, Header } from '../../../components';
import UserBios from '../../../components/userbios';
import { UserData } from '../../../components/usersdata';
import { Images } from '../../../constants';

const Profile = () => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={Images.Pictures.appBg}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={{}}>
          <View style={styles.screenHeader}>
            <Header
              hiddinText
              text="Profile"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={styles.screenBody}>
            <UserData Bio
              Image1={Images.Pictures.profile}
              UserName="Tarrance"
              UserEmail="@Tarrance_official"
              Post={111}
              Followers={70}
              Following={52}
              Bios="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
              Contact='+13246987'
              Email="Lorem ipsome"
              Location="lorem ipsome"

            />
            <View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>

  );
};

export default Profile;


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
    width: '100%',
    height: '100%',
    alignSelf: 'center',

  },

});
