import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  ScrollView,
  Image,
  Switch,
  text,
  TouchableOpacity,
  onPress,
  borderRadius,
  hiddinText,
} from 'react-native';
import { AppButton, FormInput, Header } from '../../../components';
import { Images } from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
const AddServices = props => {
  const picker = () => {
    ImagePicker.openPicker({}).then(images => {
      //   console.log(images[0].path);
      setimg(images.path);
      console.log('images==============', images.path);
    });

    // console.log(img);
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const [img, setimg] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
              BAckButton
              hiddinText
              text="Add Service"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={styles.screenBody}>
            <View style={styles.whitebox}>
              <View style={styles.Pictures}>
                <View
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    marginVertical: 20,
                  }}>
                  <View style={styles.Input}>
                    <FormInput placeHolder="Service Name" />
                  </View>
                  <View style={styles.Input}>
                    <FormInput
                      multiLine
                      height={124}
                      placeHolder="Service Descripton"
                    />
                  </View>

                  <View style={styles.Input}>
                    <FormInput placeHolder="Service Price" />
                  </View>
                  <View style={styles.Input}>
                    <FormInput
                      multiLine
                      height={124}
                      placeHolder="Pricing Note Like Per Hour Or Any Specific Info (Optional)"
                    />
                  </View>
                  <View style={styles.Input}>
                    <FormInput placeHolderColor="#000" placeHolder="State" />
                  </View>
                  <View style={styles.Input}>
                    <FormInput placeHolderColor="#000" placeHolder="City" />
                  </View>
                </View>
                <View
                  style={{
                    width: '30%',
                    marginTop: 10,
                    height: '10%',
                    marginBottom: 20,
                    marginLeft: 10,
                  }}>
                  {/* <Avatar
                    source={Images.Pictures.productcackImg3}
                    style={styles.cakeimg}
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
                    marginTop: -12,
                    marginVertical: 10,
                    flexDirection: 'row',
                    width: '90%',
                    alignItems: 'center',
                    alignSelf: 'center',
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
                    Upload Photo & Video<Text styl={{ color: 'red' }}>*</Text>
                  </Text>
                </View>
              </View>
              <View
                style={{ width: '80%', alignSelf: 'center', marginVertical: 10 }}>
                <AppButton
                  LinearColor1={'#5DF7B8'}
                  LinearColor2={'#3109FB'}
                  color={'white'}
                  borderWidth={0.5}
                  borderColor={'#707070'}
                  backgroundColor={'#FFFFFF'}
                  label="Pay Now"
                  onPress={() =>
                    props.navigation.replace('MyTabs', { screen: 'home' })
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default AddServices;
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
    // alignSelf: 'center'
  },
  whitebox: {
    width: '90%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    elevation: 2,
  },
  Input: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 8,
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: '#aaa',
  },
  profilerow: {
    flexDirection: 'row',
  },
  cack: {
    width: '100%',
    height: '100%',
  },
});
