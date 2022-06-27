import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Box, Header, StatusView } from '../../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import { Images } from '../../../constants';
import Swipeable from 'react-native-swipeable';
import { Item } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
const ChatScreen1 = ({ navigation }) => {
  const [data, setData] = useState({
    DataBox: [
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '2',
        Nowtext: 'just now',
      },

      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '1',
        Nowtext: 'just now',
      },
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '7',
        Nowtext: 'just now',
      },
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '1',
        Nowtext: 'just now',
      },
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '3',
        Nowtext: 'just now',
      },
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '3',
        Nowtext: 'just now',
      },
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '3',
        Nowtext: 'just now',
      },
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '3',
        Nowtext: 'just now',
      },
    ],
  });

  const statusData = [
    {
      imgName: Images.Pictures.statusImg1,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'John',
    },
    {
      imgName: Images.Pictures.statusImg2,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Veni',
    },
    {
      imgName: Images.Pictures.statusImg3,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Bella',
    },
    {
      imgName: Images.Pictures.statusImg4,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Saher',
    },
    {
      imgName: Images.Pictures.statusImg5,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Bella',
    },
    {
      imgName: Images.Pictures.statusImg1,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'John',
    },
    {
      imgName: Images.Pictures.statusImg2,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Veni',
    },
    {
      imgName: Images.Pictures.statusImg3,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Bella',
    },
    {
      imgName: Images.Pictures.statusImg4,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Saher',
    },
    {
      imgName: Images.Pictures.statusImg5,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Bella',
    },
  ];

  // const rightButtons = [

  //   <TouchableHighlight style={{
  //     width: 100, height: 50,
  //     backgroundColor: 'yellow'
  //   }}><Text style={styles.btn}>
  //       Delete</Text></TouchableHighlight>,

  //];

  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        style={styles.imageContainer}
        source={Images.Pictures.appBg}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.Body}>
            <Text style={styles.chat}>Chat</Text>
            <View
              style={{
                width: '95%',
                borderWidth: 1,
                backgroundColor: 'white',
                height: 45,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <AntDesign color="grey" size={18} name="search1" />
              <TextInput
                style={{ width: '85%', height: '100%' }}
                placeholder="Search chat here"
              />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.message}>Quick Message</Text>
            </View>
            <View style={styles.statusBoxView}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={statusData}
                renderItem={({ item }) => {
                  return (
                    <View style={{ paddingLeft: 10 }}>
                      <StatusView
                        imgName={item.imgName}
                        width={item.width}
                        height={item.height}
                        imgWidth={item.imgWidth}
                        imgHeight={item.imgHeight}
                        text={item.text}
                      />
                    </View>
                  );
                }}
              />
            </View>
            <View style={{}}>
              <Text style={styles.message}>Message</Text>
            </View>
            <FlatList
              data={data.DataBox}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Box
                      SwipeableText
                      Image1={item.Imgbox}
                      name={item.name}
                      Nowtext={item.Nowtext}
                      messagenumber={item.messagenumber}
                      textmessage={item.textmessage}
                      onPress={() => {
                        navigation.navigate('Homes', { screen: 'chatscreen' });
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ChatScreen1;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Body: {
    backgroundColorL: 'purple',
    width: '90%',
    // height: '100%',
    alignSelf: 'center',
  },
  chat: {
    marginTop: 25,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  message: {
    fontWeight: '700',
    fontSize: 18,
    color: 'grey',
    marginTop: 10,
  },
  horizental: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  box: {
    margin: 5,
    width: 64,
    height: 70,
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 1.25,
    // backgroundColor: 'pink'
  },
  cardbox: {
    width: '100%',
    height: 80,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    elevation: 4,
  },
  ImgView: {
    justifyContent: 'space-evenly',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'grey',
    marginLeft: 20,
  },
  vani: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  just_now_text: {
    color: 'blue',
    fontSize: 16,
  },
  btn: {
    width: 60,
    // padding: 2,
    backgroundColor: 'red',
    textAlign: 'center',
  },
});
