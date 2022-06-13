import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {Box, Header, Row} from '../../../components';
import Icon from 'react-native-vector-icons/Entypo';
import {Images} from '../../../constants';
import Swipeable from 'react-native-swipeable';
import {Item} from 'native-base';

const Notification = ({route, navigation}) => {
  const [data, setData] = useState({
    DataBox: [
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'commented: Nice Pic❤️❤️',
        messagenumber: '2',
        Nowtext: 'just now',
        // Image2: Images.Icons.card1
      },
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '1',
        Nowtext: '1 day ago',
      },
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '7',
        Nowtext: '1 day ago',
      },
      {
        Imgbox: Images.Pictures.statusImg5,
        name: 'Vani',
        textmessage: 'Ok let me see...',
        messagenumber: '1',
        Nowtext: '1 day ago',
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

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={Images.Pictures.appBg}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.Body}>
          <View style={{}}>
            <Text style={styles.message}>Notification</Text>
          </View>
          <FlatList
            data={data.DataBox}
            renderItem={({item}) => {
              return (
                <View>
                  <View
                    style={{
                      width: '100%',
                      height: 82,
                      alignSelf: 'center',
                      marginVertical: 5,
                      backgroundColor: '#fff',
                      elevation: 1,
                      borderRadius: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 18,
                      }}>
                      <View style={{flexDirection: 'row', width: '80%'}}>
                        <View style={{width: 60, height: 60}}>
                          <Image
                            source={item.Imgbox}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 31,
                              margin: -5,
                            }}
                            resizeMode="contain"
                          />
                        </View>
                        <View style={{left: 10, marginTop: 5}}>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#000',
                                fontSize: 18,
                                fontWeight: 'bold',
                              }}>
                              {item.name}
                            </Text>
                            <Text
                              style={{marginLeft: 5, top: 3, color: '#000'}}>
                              {item.textmessage}
                            </Text>
                          </View>
                          <Text>{item.Nowtext}</Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        style={styles.Icon}
                        onPress={item.Press}>
                        <Icon
                          name="dots-three-vertical"
                          type="Entypo"
                          style={{fontSize: 26}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Notification;

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
  message: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
    marginVertical: 10,
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
    padding: 10,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  Icon: {
    width: '5%',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
