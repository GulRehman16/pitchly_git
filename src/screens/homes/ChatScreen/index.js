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
} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';
import {Images} from '../../../constants';
import {useState, useEffect} from 'react';
import Headerchat from '../../../components/Headerchat';
import ImagePicker from 'react-native-image-crop-picker';
const ChatScreen = props => {
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
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            paddingTop: 20,
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
                <View style={{marginTop: 10}}>
                  <Headerchat
                    image={Images.Pictures.statusImg2}
                    name={'Veni'}
                    time={'offline 45 min ago'}
                    Press={() => {
                      props.navigate.goback();
                    }}
                    icon={true}
                    // onPress={() => {
                    //   props.navigate.goback();
                    // }}
                  />
                </View>

                {/* <Header text="Live Chat" navigation={props.navigation} /> */}
              </View>
              <View
                style={{width: '90%', alignSelf: 'center', paddingBottom: 20}}>
                {messages.map((message, i) => {
                  return (
                    <>
                      <View
                        style={{
                          width: '70%',
                          backgroundColor:
                            message?.user?._id == 1 ? '#E4E4E4' : '#4059E4',
                          borderRadius: 20,
                          flexDirection:
                            message?.user?._id == 1 ? 'row' : 'row-reverse',
                          marginVertical: 10,
                          alignItems: 'flex-start',
                          alignSelf:
                            message?.user?._id == 1 ? 'flex-start' : 'flex-end',
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
                            // backgroundColor: 'pink'
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
                        <View
                          style={{
                            // backgroundColor: 'green',
                            alignSelf: 'center',
                            width: 3.6,
                            height: 18,
                            marginLeft: 5,
                            marginRight: 5,
                            justifyContent: 'space-between',
                          }}></View>
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
              <TouchableOpacity
                // disabled={message.length <= 0}
                // activeOpacity={0.7}
                // onPress={onSend}
                onPress={() => picker()}>
                <Icon
                  name="pluscircle"
                  type="AntDesign"
                  style={{color: '#4059E4', marginRight: 10}}
                />
              </TouchableOpacity>
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
