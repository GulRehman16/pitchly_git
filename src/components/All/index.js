import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Images, Themes } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { PostBox, SuggestFriends } from '../../components'
import { TouchableOpacity } from 'react-native-gesture-handler';



const AllMixed = ({ props }) => {



  const statusData2 = [
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
      // Press: () => { navigation.navigate('contactUs') }
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
      // Press: () => { navigation.navigate('') }
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
      // Press: () => { navigation.navigate('') }

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
      // Press: () => { navigation.navigate('') }
    },
  ];
  const All = [
    {
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Talent Name',
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
      // feture: feture ? false : true,
      Press: () => props.navigate('Homes', { screen: 'profile' })

    },

    {
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Talent Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      singleImg: Images.Pictures.talent,
      checksingle: true,
      checkfollow: true,
      // feture: feture ? false : true,
      // Press: () => navigation.navigate('Homes', { screen: 'profile' })
    },
    {
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Talent Name',
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
      // feture: feture ? false : true,

      // Press: () => navigation.navigate('Homes', { screen: 'profile' })
    },
    {
      profileImg: Images.Pictures.talent,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Talent Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      price: '$ 10.00',
      singleImg: Images.Pictures.postImg1,
      checksingle: true,
      checkfollow: false,
      // feture: feture ? false : true,
      // Press: () => navigation.navigate('Homes', { screen: 'profile' })

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
                // feture={item.feture}
                Press={item.Press}
              />
              {item.checkfollow == true ? (
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
                            />
                          </View>
                        );
                      }}
                    />
                  </View>
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
