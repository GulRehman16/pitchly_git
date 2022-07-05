import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Appearance,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Press,
  singleImg,
  statusBarStyle,
  statusBarTransition,
  hidden,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Icon} from 'native-base';
import Headerchat from '../../../components/Headerchat';
import ImagePicker from 'react-native-image-crop-picker';
import {Comment, PostBox, Post} from '../../../components';
import {Images} from '../../../constants';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
// import { Homes } from '../../../navigation/stack';
const TalentScreen = ({navigation}) => {
  const location = useSelector(state => state.locationReducer.location);
  // console.log('redux location============', location);

  const route = useRoute();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [orientation, setOrientation] = useState(true);

  const picker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setOrientation(isPortrait());
    });
  }, [Dimensions]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = () => {
    setMessages([
      ...messages,
      {
        _id: 1,
        text: message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);

    setMessage('');

    scrollViewRef.scrollToEnd({animated: true});
  };

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  let [scrollViewRef, setRef] = useState({});
  let colorScheme = Appearance.getColorScheme();
  console.log(colorScheme);

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={Images.Pictures.appBg}>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          animated={true}
          backgroundColor="#000"
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            // paddingTop: 20,
            height: '100%',
          }}>
          <View
            style={{
              width: '100%',
              height: orientation ? '100%' : '95%',
              // paddingBottom: 10,
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
              ref={ref => setRef(ref)}
              onContentSizeChange={() =>
                scrollViewRef.scrollToEnd({animated: true})
              }>
              <View>
                <View
                  style={{
                    width: '95%',
                    alignSelf: 'center',
                  }}>
                  <Headerchat
                    image={Images.Pictures.statusImg2}
                    name={'Veni'}
                    marginTop={20}
                    Press={() => {
                      navigation.goBack();
                    }}
                    imgpress={() => navigation.navigate('account')}
                  />
                </View>

                {/* <Header text="Live Chat" navigation={props.navigation} /> */}
              </View>
              <View style={styles.container}>
                <View
                  style={{
                    width: '100%',
                    height: 70,
                    borderRadius: 20,
                    // marginTop: 10,
                  }}>
                  <ImageBackground
                    source={Images.Pictures.homeMainBg}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="stretch">
                    <View
                      style={{
                        width: '100%',
                        alignSelf: 'center',
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                      }}>
                      <View style={{marginVertical: 30}}>
                        <View
                          style={{
                            width: '90%',
                            // height: '100%',
                            alignSelf: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              // height: '100%',
                              justifyContent: 'space-between',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  marginLeft: 5,
                                }}>
                                <Image
                                  source={Images.Logos.msgColorIcon}
                                  style={{width: 19.07, height: 18.74}}
                                />
                                <Text style={{color: 'black', paddingLeft: 5}}>
                                  120
                                </Text>
                              </View>
                              <View
                                style={{
                                  marginLeft: 10,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <Image
                                  source={Images.Logos.shareIcon}
                                  style={{width: 19.07, height: 18.74}}
                                />
                                <Text style={{color: 'black', paddingLeft: 5}}>
                                  2.4K
                                </Text>
                              </View>
                              <View
                                style={{
                                  marginLeft: 10,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <Image
                                  source={
                                    location?.data
                                      ? location?.data
                                      : Images.Icons.Star
                                  }
                                  style={{width: 19.07, height: 18.74}}
                                />

                                <Text style={{color: 'black', paddingLeft: 5}}>
                                  4.2K
                                </Text>
                              </View>
                            </View>
                            <View
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Image
                                source={Images.Logos.favoriteIcon}
                                style={{width: 14, height: 17}}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={{height: '100%'}}>
                  <View
                    style={{
                      width: '90%',
                      height: 202,
                      marginVertical: 10,
                      borderRadius: 20,
                      alignSelf: 'center',
                    }}>
                    <ImageBackground
                      source={Images.Icons.post}
                      style={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      resizeMode="stretch">
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Homes', {
                            screen: 'pictureslider',
                          });
                        }}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 10,
                          borderWidth: 35,
                          backgroundColor: '#eee',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          opacity: 0.45,
                        }}>
                        <Image
                          source={Images.Icons.play}
                          resizeMode="contain"
                          style={{alignSelf: 'center'}}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>

                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      borderBottomWidth: 1,
                      paddingVertical: 10,
                      borderColor: '#aaa',
                    }}>
                    <Text style={styles.boldtext}>Talent Name</Text>
                    <Text style={styles.texts}>
                      {
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,Lorem ipsum dolor sit amet, '
                      }
                    </Text>
                    <Text style={styles.boldtext}>City</Text>
                    <Text style={styles.texts}>
                      {'Lorem ipsum dolor sit amet,'}
                    </Text>
                    <Text style={styles.boldtext}>State</Text>
                    <Text style={styles.texts}>
                      {'Lorem ipsum dolor sit amet,'}
                    </Text>
                    <Text style={styles.boldtext}>Comments</Text>
                  </View>

                  <View style={{height: '100%'}}>
                    <Comment
                      name="vani"
                      typesomething="Write a comment"
                      time="2:00"
                      Radius={2}
                      height={60}
                      image={Images.Icons.post}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TalentScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    width: '90%',
    height: '100%',
    borderRadius: 20,
    elevation: 2,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  boldtext: {
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  texts: {
    color: '#000',
    fontSize: 14,
  },
});
