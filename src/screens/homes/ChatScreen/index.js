import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Appearance,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  statusBarStyle,
  statusBarTransition,
  hidden,
} from 'react-native';

// import {
//   GifSearch,
//   poweredByTenorLogoWhite,
//   poweredByTenorLogoGrey,
//   poweredByTenorLogoBlue,
//   viaTenorLogoWhite,
//   viaTenorLogoGrey,
//   viaTenorLogoBlue,
//   poweredByGiphyLogoGrey,
//   poweredByGiphyLogoWhite,
// } from 'react-native-gif-search';

import React from 'react';
import {Icon} from 'native-base';
import {Images} from '../../../constants';
import {useState, useEffect} from 'react';
import Headerchat from '../../../components/Headerchat';
import {Tip} from '../../../components';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';

import {Avatar} from 'react-native-elements';
const ChatScreen = props => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [orientation, setOrientation] = useState(true);
  const [Visible, setVisible] = useState(true);
  const pickerGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // setimg(image.path);
      console.log(image);
      setVisible(true);
    });
  };
  const pickerCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // setimg(image.path);
      console.log(image);
      setVisible(true);
    });
  };

  const Gif = () => {
    // <GifSearch
    //   // tenorApiKey={YOUR_TENOR_API_KEY}
    //   gifsToLoad={10}
    //   maxGifsToLoad={25}
    //   style={{backgroundColor: 'white', borderWidth: 3, borderRadius: 10}}
    //   textInputStyle={{fontWeight: 'bold', color: 'black'}}
    //   gifListStyle={{height: 320}}
    //   gifStyle={{height: 160}}
    //   loadingSpinnerColor={'black'}
    //   placeholderTextColor={'grey'}
    //   placeholderText={'Search'}
    //   onGifSelected={(gif_url, gif_object) => {
    //     console.log(gif_url);
    //     console.log(gif_object);
    //   }}
    //   onGifLongPress={(gif_url, gif_object) => {
    //     console.log(gif_url);
    //     console.log(gif_object);
    //   }}
    //   visible={this.state.visible}
    //   onBackPressed={() => {
    //     this.setState({visible: false});
    //   }}
    //   horizontal={false}
    //   showScrollBar={false}
    //   noGifsFoundText={'No Gifs found :('}
    //   noGifsFoundTextStyle={{fontWeight: 'bold'}}
    //   provider={'tenor'}
    //   providerLogo={poweredByTenorLogoGrey}
    //   textInputProps={{autoFocus: true}}
    //   onError={error => {
    //     console.log(error);
    //   }}
    // />;
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

  const [isVisible, setIsVisible] = React.useState(null);
  const [show, setshow] = React.useState(true);
  const [emoji, setemoji] = React.useState({
    value: null,
  });
  console.log(emoji, 'emoji');
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
            // marginTop: 20,
            height: '100%',
          }}>
          <View
            style={{
              width: '100%',
              height: orientation ? '90%' : '85%',
              paddingBottom: 10,
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
              ref={ref => setRef(ref)}
              onContentSizeChange={() =>
                scrollViewRef.scrollToEnd({animated: true})
              }>
              <View>
                <View style={{width: '95%', alignSelf: 'center'}}>
                  <Headerchat
                    image={Images.Pictures.statusImg2}
                    name={'Veni'}
                    time={'offline 45 min ago'}
                    Press={() => {
                      props.navigation.goBack();
                    }}
                    icon={true}
                    onPress={() => {
                      props.navigation.navigate('chatdetails');
                    }}
                  />
                </View>

                {/* <Header text="Live Chat" navigation={props.navigation} /> */}
              </View>
              <View
                style={{width: '90%', alignSelf: 'center', paddingBottom: 20}}>
                {messages.map((message, i) => {
                  return (
                    <>
                      {isVisible === i ? (
                        show === true ? (
                          <View
                            key={i}
                            style={{
                              width: '50%',
                              height: '10%',
                              marginLeft: 10,
                              justifyContent: 'space-evenly',
                              backgroundColor: 'white',
                              flexDirection:
                                message?.user?._id == 1 ? 'row' : 'row-reverse',
                              marginVertical: 10,
                              alignItems: 'center',
                              elevation: 3,
                              alignSelf:
                                message?.user?._id == 1
                                  ? 'flex-start'
                                  : 'flex-end',
                              borderRadius: 10,
                            }}>
                            <TouchableOpacity
                              onPress={() => {
                                setemoji({
                                  ...emoji,
                                  value: Images.Pictures.ic_like_fill,
                                });
                              }}>
                              <Avatar
                                style={{flexDirection: 'row-reverse'}}
                                rounded
                                source={Images.Pictures.like}
                                size={18}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                setemoji({
                                  ...emoji,
                                  value: Images.Pictures.love2,
                                }),
                                  setshow(false);
                              }}>
                              <Avatar
                                rounded
                                source={Images.Pictures.love}
                                size={18}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                setemoji({
                                  ...emoji,
                                  value: Images.Pictures.haha2,
                                }),
                                  setshow(false);
                              }}>
                              <Avatar
                                rounded
                                source={Images.Pictures.haha}
                                size={18}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                setemoji({
                                  ...emoji,
                                  value: Images.Pictures.wow2,
                                }),
                                  setshow(false);
                              }}>
                              <Avatar
                                rounded
                                source={Images.Pictures.wow}
                                size={18}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                setemoji({
                                  ...emoji,
                                  value: Images.Pictures.sad2,
                                }),
                                  setshow(false);
                              }}>
                              <Avatar
                                rounded
                                source={Images.Pictures.sad}
                                size={18}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                setemoji({
                                  ...emoji,
                                  value: Images.Pictures.angry2,
                                }),
                                  setshow(false);
                              }}>
                              <Avatar
                                rounded
                                source={Images.Pictures.angry}
                                size={18}
                              />
                            </TouchableOpacity>
                          </View>
                        ) : null
                      ) : null}
                      <View
                        style={{
                          flexDirection: 'row',
                          flexDirection:
                            message?.user?._id == 1 ? 'row' : 'row-reverse',
                          marginVertical: 10,
                          alignItems: 'flex-start',
                          alignSelf:
                            message?.user?._id == 1 ? 'flex-start' : 'flex-end',
                        }}>
                        <TouchableOpacity
                          onLongPress={() => {
                            setIsVisible(i);
                            setemoji({...emoji, value: null});
                            setshow(true);
                          }}
                          style={{
                            width: '70%',
                            backgroundColor:
                              message?.user?._id == 1 ? '#E4E4E4' : '#4059E4',
                            borderRadius: 20,
                          }}>
                          <View
                            style={{
                              minHeight: 50,
                              paddingVertical: 15,
                              overflow: 'hidden',

                              // height: '90%',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 25,
                              paddingHorizontal: 10,
                              minWidth: 80,
                              // backgroundColor: 'pink',
                            }}>
                            <Text
                              style={{
                                color:
                                  message?.user?._id == 1 ? 'black' : 'white',
                              }}>
                              {' '}
                              {message?.text}{' '}
                            </Text>
                          </View>
                    
                        </TouchableOpacity>

                        <View
                          style={{
                            alignSelf: 'center',
                            position: 'relative',
                            right: 10,
                          }}>
                          <Avatar
                            rounded
                            source={isVisible === i && emoji.value}
                            size={20}
                          />
                        </View>

                        <TouchableOpacity style={{marginTop: 15, height: 30}}>
                          <Tip
                            tooltip1
                            tooltipdata1
                            content2
                            onPress={true}
                            DoteIcon={<Text>Icon1</Text>}
                          />
                        </TouchableOpacity>
                      </View>
                    </>
                  );
                })}
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              width: '90%',
              height: 48,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              elevation: 2,
              borderRadius: 50,
              paddingLeft: 5,
              borderWidth: 1,
              borderColor: '#F36C29',
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 10,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: '70%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                height: 60,
                marginLeft: 15,
              }}>
              {Visible === true ? (
                <TouchableOpacity
                  // disabled={message.length <= 0}
                  // activeOpacity={0.7}
                  // onPress={onSend}
                  onPress={() => setVisible(false)}>
                  <Icon
                    name="pluscircle"
                    type="AntDesign"
                    style={{
                      color: '#4059E4',
                      marginRight: 10,
                      marginLeft: 10,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <View style={{flexDirection: 'row'}}>
                  <LinearGradient
                    start={{x: 1, y: 0.0}}
                    end={{x: 1, y: 1.9}}
                    colors={['#5DF7B8', '#3109FB']}
                    style={{
                      // width: '100%',
                      height: 35,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      // disabled={message.length <= 0}
                      // activeOpacity={0.7}
                      // onPress={onSend}
                      onPress={() => pickerCamera()}>
                      <Icon
                        name="camerao"
                        type="AntDesign"
                        style={{color: '#4059E4', marginLeft: 10}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      // disabled={message.length <= 0}
                      // activeOpacity={0.7}
                      // onPress={onSend}
                      onPress={() => pickerGallery()}>
                      <Icon
                        name="picture-o"
                        type="FontAwesome"
                        style={{color: '#4059E4', marginLeft: 10}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      // disabled={message.length <= 0}
                      // activeOpacity={0.7}
                      // onPress={onSend}
                      onPress={() => Gif()}>
                      <Icon
                        name="gif"
                        type="MaterialIcons"
                        style={{
                          color: '#4059E4',
                          marginLeft: 5,
                          marginRight: 10,
                        }}
                      />
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              )}

              <TextInput
                placeholderTextColor={(colorScheme = 'dark' ? 'grey' : 'grey')}
                multiline={true}
                placeholder="Type Message"
                value={message}
                onChangeText={text => {
                  setMessage(text.trimStart());
                }}
                style={{
                  width: '65%',
                  color: '#000',
                }}
              />
            </View>

            <View
              style={{
                // width: '8%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: 10,
              }}>
              <TouchableOpacity
              // disabled={message.length <= 0}
              // activeOpacity={0.7}
              // onPress={onSend}
              >
                <Icon
                  name="keyboard-voice"
                  type="MaterialIcons"
                  style={{color: '#4059E4', marginRight: 10}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                disabled={message.length <= 0}
                activeOpacity={0.7}
                onPress={onSend}>
                <Icon
                  name="send"
                  type="Feather"
                  style={{color: '#4059E4', marginRight: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  screenContainer: {
    flex: 1,
  },

  topComponent: {
    width: '100%',
    backgroundColor: '#e7e',
    height: 90,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 99,
  },
});

export default ChatScreen;

// <View style={{ width: '95%', alignSelf: 'center' }}>
// <Headerchat
//   image={Images.Pictures.statusImg2}
//   name={'Veni'}
//   time={'offline 45 min ago'}
//   Press={() => { props.navigation.goBack() }}
//   icon={true}
//   onPress={() => {
//     props.navigation.navigate("chatdetails");
//   }}
// />
// </View>

// <View style={{ width: '95%', alignSelf: 'center' }}>
// <Headerchat
//   image={Images.Pictures.statusImg2}
//   name={'Veni'}
//   time={'offline 45 min ago'}
//   Press={() => { props.navigation.goBack() }}
//   icon={true}
//   onPress={() => {
//     props.navigation.navigate("chatdetails");
//   }}
// />
// </View>
