import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images, Themes } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { PostBox, SuggestFriends } from '../../components';
import { useNavigation } from '@react-navigation/native';

const AllMixed = ({ props, feture, SuggestFriend }) => {
  const navigation = useNavigation();
  const statusData2 = [
    {
      id: 1,
      imgName: Images.Pictures.statusImg1,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'John',
      // Press: () => { navigation.navigate('contactUs') }
    },
    {
      id: 2,
      imgName: Images.Pictures.statusImg2,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Veni',
      // Press: () => { navigation.navigate('') }
    },
    {
      id: 3,
      imgName: Images.Pictures.statusImg3,
      imgWidth: 59,
      imgHeight: 59,
      borderRadius: 19,
      borderColor: '#3729F2',
      borderWidth: 2,
      width: 61,
      height: 61,
      text: 'Bella',
      // Press: () => { navigation.navigate('') }
    },
    {
      id: 4,
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
  ];
  const All = [
    {
      id: 1,
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Product Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      price: '$ 120.00',
      gridImg: Images.Pictures.productcackImg1,
      gridImg1: Images.Pictures.productcackImg2,
      gridImg2: Images.Pictures.productcackImg3,
      gridImg3: Images.Pictures.productcackImg4,
      gridImg4: Images.Pictures.productcackImg5,
      checksingle: false,
      checkfollow: false,
      feture: true,
      // onPress: () => props.navigation.replace('MyTabs', { screen: 'home' })
    },

    {
      id: 2,
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Talent Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      singleImg: Images.Pictures.talent,
      checksingle: true,
      checkfollow: true,
      feture: false,
      // Press: () => navigation.navigate('Homes', { screen: 'profile' })
    },
    {
      id: 3,
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Product Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      price: '$ 120.00',
      gridImg: Images.Pictures.productcackImg1,
      gridImg1: Images.Pictures.productcackImg2,
      gridImg2: Images.Pictures.productcackImg3,
      gridImg3: Images.Pictures.productcackImg4,
      gridImg4: Images.Pictures.productcackImg5,
      checksingle: false,
      checkfollow: false,
      feture: false,

      // Press: () => navigation.navigate('Homes', { screen: 'profile' })
      // Press: () => navigation.navigate("Homes", { screen: 'Notifications' })
    },
    {
      id: 4,
      profileImg: Images.Pictures.talent,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Service Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      price: '$ 10.00',
      singleImg: Images.Pictures.postImg1,
      checksingle: true,
      checkfollow: false,
      feture: true,

      Press1: () => props.navigation.navigate('Homes', { screen: 'profile' }),

      //   ImgPress: navigation.navigate('Homes', {screen: 'productdetails'}),
    },
  ];

  return (
    <View>
      <FlatList
        data={All}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 10 }}>
              <PostBox
                star={true}
                keyExtractor={item => item.id}
                profileTitle={item.profileTitle}
                postTime={item.postTime}
                boxTitle={item.boxTitle}
                boxDetail={item.boxDetail}
                gridImg={item.gridImg}
                gridImg1={item.gridImg1}
                gridImg2={item.gridImg2}
                gridImg3={item.gridImg3}
                gridImg4={item.gridImg4}
                singleImg={item.singleImg}
                checksingle={item.checksingle}
                price={item.price}
                Press={item.Press1}
                GetFeture={item.feture}
                feture={feture ? true : false}
              //   ImgPress1={item.onPress}
              />
              {item.checkfollow == true ? (
                <View>

                  {SuggestFriend == true ? (
                    <View>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 15,
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        Sugguest For you
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          alignSelf: 'center',
                          justifyContent: 'center',
                          flexDirection: 'row',
                          marginTop: 10,
                        }}>
                        <FlatList
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          data={statusData2}
                          renderItem={({ item }) => {
                            return (
                              <View style={{ marginLeft: 10 }}>
                                <SuggestFriends
                                  imgName={item.imgName}
                                  width={item.width}
                                  height={item.height}
                                  imgWidth={item.imgWidth}
                                  imgHeight={item.imgHeight}
                                  text={item.text}
                                  Press={item.Press}
                                  keyExtractor={item => item.id}
                                />
                              </View>

                            );
                          }}
                        />
                      </View>
                    </View>
                  ) : null}
                </View>
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
};
export { AllMixed };