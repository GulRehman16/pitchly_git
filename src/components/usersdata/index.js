import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Appearance,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../../constants';
import { Followbtn } from '../Followbtn';

const UserData = ({
  navigation,
  Image1,
  BoldText,
  LighterText,
  User,
  Bio,
  UserName,
  UserEmail,
  Post,
  Followers,
  Following,
  Bios,
  Contact,
  Email,
  Location,
  pressme,
  onPress1,
  onPress2
}) => {
  const [state, setState] = useState('follow');
  const [colorState, setColorsate] = useState(true);

  const Click = () => {
    setState('Unfollow');
    setColorsate('#000');
  };

  return (
    <View>
      {Bio && (
        <View>
          <View style={styles.bioBox}>
            <View style={styles.profilerow}>
              <View style={{ flexDirection: 'row', width: '90%' }}>
                <View style={styles.Profilepic}>
                  <Image
                    source={Image1}
                    resizeMode="contain"
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                  />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.UserName}>{UserName}</Text>
                  <Text style={styles.UserEmail}>{UserEmail}</Text>
                  <View style={styles.followerText}>
                    <View style={{ margin: 10 }}>
                      <Text style={styles.UserPostNumber}>{Post}</Text>
                      <Text style={styles.UserPost}>Post</Text>
                    </View>
                    <TouchableOpacity onPress={onPress1} style={{ margin: 10 }}>
                      <Text style={styles.UserPostNumber}>{Followers}</Text>
                      <Text style={styles.UserPost}>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress2} style={{ margin: 10 }}>
                      <Text style={styles.UserPostNumber}>{Following}</Text>
                      <Text style={styles.UserPost}>Following</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={pressme}
                style={{ width: '10%' }}>
                <LinearGradient
                  start={{ x: 1, y: 0.0 }}
                  end={{ x: 1, y: 1.9 }}
                  colors={['#5DF7B8', '#3109FB']}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 10,
                  }}>
                  <Icon
                    type="FontAwesome"
                    name="edit"
                    color="#fff"
                    size={22}
                    style={{ margin: 4 }}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ width: '90%', alignSelf: 'center' }}>
              <View>
                <Text style={styles.Bios}>Bios</Text>
                <Text style={styles.Descriprion}>{Bios}</Text>
              </View>
              <View>
                <Text style={styles.Bios}>Contact</Text>
                <Text style={styles.Descriprion}>{Contact}</Text>
              </View>
              <View>
                <Text style={styles.Bios}>Email</Text>
                <Text style={styles.Descriprion}>{Email}</Text>
              </View>
              <View>
                <Text style={styles.Bios}>Location</Text>
                <Text style={styles.Descriprion}>{Location}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export { UserData };

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  screenHeader: {
    width: '90%',
    height: 80,
    marginTop: 20,
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
  whitebox: {
    width: '90%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    elevation: 2,
  },

  premiumicon: {
    width: 110,
    height: 65,
    marginLeft: -20,
  },
  Image1: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  textbox: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  txt1: {
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  txt2: {
    marginVertical: 5,
    color: '#000',
    fontSize: 12,
  },
  rowstyle: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
    padding: 4,
    paddingVertical: 10,
    // borderBottomWidth: 0.70,
    // borderBottomColor: '#aaa',
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  texts: {
    flexDirection: 'row',
    width: '74%',
  },
  btns: {
    width: 91,
    height: 25,
  },
  Pictures: {
    width: 38,
    height: 38,
  },
  textes: {
    justifyContent: 'center',
    marginLeft: 7,
    marginTop: -7,
  },
  bioBox: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: 350,
    borderRadius: 20
  },

  profilerow: {
    marginVertical: 15,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  Profilepic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  userInfo: {
    marginLeft: 20,
  },
  UserName: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  UserEmail: {
    marginVertical: 2,
  },
  followerText: {
    flexDirection: 'row',
  },
  UserPostNumber: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  UserPost: {
    alignSelf: 'center',
    fontSize: 10,
    letterSpacing: 0.7,
    color: '#000',
    // marginLeft: 20
  },
  Bios: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  Descriprion: {
    fontSize: 14,
    color: '#000',
    marginVertical: 2,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  btnw: { fontWeight: 'bold', color: 'black' },

  profilerow: {
    marginVertical: 15,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Profilepic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  userInfo: {
    marginLeft: 20,
  },
  UserName: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  UserEmail: {
    marginVertical: 2,
  },
  followerText: {
    flexDirection: 'row',
  },
  UserPostNumber: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  UserPost: {
    alignSelf: 'center',
    fontSize: 10,
    letterSpacing: 0.7,
    color: '#000',
    // marginLeft: 20
  },
  Bios: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  Descriprion: {
    fontSize: 12,
    color: '#000',
    marginVertical: 2,
    letterSpacing: 1,
  },
});
