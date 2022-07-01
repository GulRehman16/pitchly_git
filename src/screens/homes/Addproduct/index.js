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
  hidden, statusBarStyle, statusBarTransition
} from 'react-native';
import { AppButton, FormInput, Header } from '../../../components';
import { Images } from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
const Addproduct = props => {
  const [img, setimg] = useState([
    // {
    //   path: Images.Pictures.productcackImg1,
    // },
    // {
    //   path: Images.Pictures.productcackImg2,
    // },
    // {
    //   path: Images.Pictures.productcackImg3,
    // },
  ]);
  const picker = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      //   console.log(images[0].path);
      setimg(images);
      images.map(item => {
        setimg([...img, item]);

        // console.log(item?.path);
        // console.log('map images==============', item.path);
      });
    });

    // console.log(img);
  };

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log('images================', JSON.stringify(img, null, 2));
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
              text="Add Product"
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
                  <View style={{ marginVertical: 5 }}>
                    <FormInput placeHolder="Produc name " />
                  </View>
                  <View style={{ marginVertical: 5 }}>
                    <FormInput
                      multiLine
                      height={124}
                      placeHolder="Product Discription"
                    />
                  </View>
                  <View style={{ marginVertical: 5 }}>
                    <FormInput placeHolderColor="grey" placeHolder="130" />
                  </View>

                  <View style={{ marginVertical: 5 }}>
                    <FormInput placeHolderColor="grey" placeHolder="State" />
                  </View>
                  <View style={{ marginVertical: 5 }}>
                    <FormInput placeHolderColor="grey" placeHolder="City" />
                  </View>
                </View>

                {/* <FlatList
                  data={img}
                  horizontal={true}
                  renderItem={({item, index}) => {
                    return (
                      <View style={styles.cakeimgview}>
                        <Avatar
                          source={item.path}
                          style={styles.cakeimg}
                          resizeMode="contain"
                        />
                      </View>

                      //   <Image
                      //     key={index}
                      //     source={item}
                      //     style={styles.cakeimg}
                      //     resizeMode="contain"
                      //   />
                    );
                  }}
                /> */}
                <View
                  style={{
                    flexDirection: 'row',
                    width: '25%',
                    marginLeft: 10,
                  }}>
                  {img.map((item, index) => {
                    return (
                      <View style={styles.cakeimgview}>
                        <Avatar
                          source={
                            img.length < 0
                              ? item.path
                              : {
                                uri: item.path,
                              }
                          }
                          style={styles.cakeimg}
                          resizeMode="contain"
                        />
                      </View>
                    );
                  })}
                </View>

                {/* <View
                  styl={{
                    width: '100%',
                    borderWidth: 1,
                    height: '10%',
                    flexDirection: 'row',
                  }}>
                  {img.map((item, index) => {
                    return (
                      <View style={styles.cakeimgview}>
                        <Avatar
                          source={{uri: item.path}}
                          style={styles.cakeimg}
                          resizeMode="contain"
                        />
                      </View>
                    );
                  })}
                </View> */}
                {/* <View style={styles.cakeimgview}>
                    <Avatar
                      rounded
                      source={Images.Pictures.productcackImg2}
                      style={styles.cakeimg}
                      resizeMode="contain"
                    />
                  </View> */}

                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingBottom: 15,
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
            </View>
            <View
              style={{ width: '90%', alignSelf: 'center', marginVertical: 20 }}>
              <View
                style={{ width: '70%', alignSelf: 'center', marginVertical: 25 }}>
                <AppButton
                  LinearColor1={'#5DF7B8'}
                  LinearColor2={'#3109FB'}
                  color={'white'}
                  borderWidth={0.5}
                  borderColor={'#707070'}
                  backgroundColor={'#FFFFFF'}
                  label="Post Now"
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
export default Addproduct;
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
  cakes: {
    width: '90%',
    // height: 150,
    // backgroundColor: 'red',
  },
  cakeimgview: {
    width: '100%',
    height: 90,
    marginLeft: 10,
    marginBottom: 10,
    // flexDirection: 'row',
  },
  cakeimg: {
    width: '100%',
    height: '100%',
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

    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    elevation: 2,
  },

  profilerow: {
    flexDirection: 'row',
  },
});
