import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Switch,
  FlatList,
  statusBarStyle, statusBarTransition, hidden
} from 'react-native';
import React, { useState } from 'react';
import { Images } from '../../../constants';
import {
  Box,
  Header,
  Row,
  Switch1,
  AppButton,
  FormInput,
} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'react-native-elements';
import Post from '../../../components/post';
const AddTelent = ({ onPress, borderRadius, navigation }) => {
  const [img, setimg] = useState('');

  const picker = () => {
    ImagePicker.openPicker({}).then(images => {
      //   console.log(images[0].path);
      setimg(images.path);
      const imges = images.path;
      console.log('images==============', images.path);
    });
  };

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={Images.Pictures.appBg}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor="#000"
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden} />
        <View style={{}}>
          <View style={styles.screenHeader}>
            <Header
              BAckButton
              hiddinText
              text="Add Talent"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.whitebox}>
              <View style={styles.Input}>
                <FormInput multiLine height={45} placeHolder="Talent" />
              </View>
              <View style={styles.screenBody}>
                <View style={styles.Input}>
                  <FormInput
                    multiLine
                    height={160}
                    placeHolder="Talent Discription"
                  />
                </View>

                <View style={styles.Input}>
                  <FormInput multiLine height={45} placeHolder="State" />
                </View>
                <View style={styles.Input}>
                  <FormInput multiLine height={45} placeHolder="City" />
                </View>
                <View
                  style={{
                    width: '50%',
                    marginTop: 10,
                    height: '13%',
                    marginBottom: 20,
                    marginLeft: 10,
                  }}>
                  {/* <Image
                    style={{
                      width: '60%',
                      height: '100%',
                    }}
                    source={img}
                    resizeMode="contain"
                  /> */}
                  <Image
                    style={{
                      width: '60%',
                      height: '100%',
                    }}
                    source={
                      img === ''
                        ? Images.Pictures.productcackImg3
                        : {
                          uri: img,
                        }
                    }
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 4,

                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => picker()}>
                    <LinearGradient
                      start={{ x: 1, y: 0.0 }}
                      end={{ x: 1, y: 1.9 }}
                      colors={['#5DF7B8', '#3109FB']}
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: borderRadius || 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image source={Images.Icons.PhotoVideo} />
                    </LinearGradient>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      // fontWeight: 'bold',
                      color: 'black',
                      marginLeft: 10,
                    }}>
                    Upload Photo & Video
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ width: '60%', alignSelf: 'center' }}>
              <View style={{ marginVertical: 25 }}>
                <AppButton
                  LinearColor1={'#5DF7B8'}
                  LinearColor2={'#3109FB'}
                  color={'white'}
                  borderWidth={0.5}
                  borderColor={'#707070'}
                  backgroundColor={'#FFFFFF'}
                  label="Poat Now"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default AddTelent;

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
    height: 470,
    paddingTop: 5,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    elevation: 2,
  },
  Input: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 8,
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: '#aaa',
  },
});
