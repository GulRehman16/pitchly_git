import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  statusBarStyle, statusBarTransition, hidden
} from 'react-native';
import { Images } from '../../../constants';
import {
  StatusView,
  PitchlyFeatured,
  AllMixed, HomeHeader, Product, Services, Talent, onPress1, onPress2
} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'native-base';
const Home = ({ feture, navigation }) => {
  const [data, setData] = useState({
    postDataAll: [
      {
        profileImg: '',
        profileTitle: 'Veni Paul',
        postTime: '1 hour ago',
        boxTitle: 'Talent Name',
        boxDetail:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
        price: '120.00',
        gridImg: Images.Pictures.statusImg1,
        gridImg1: Images.Pictures.statusImg2,
        gridImg2: Images.Pictures.statusImg3,
        gridImg3: Images.Pictures.statusImg4,
        gridImg4: Images.Pictures.statusImg5,
      },
      {
        profileImg: '',
        profileTitle: 'Alex',
        postTime: '1 hour ago',
        boxTitle: 'Talent Name',
        boxDetail:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
        price: '120.00',
        gridImg: Images.Pictures.statusImg1,
        gridImg1: Images.Pictures.statusImg2,
        gridImg2: Images.Pictures.statusImg3,
        gridImg3: Images.Pictures.statusImg4,
        gridImg4: Images.Pictures.statusImg5,
      },
    ],
    statusData: [
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
        onPress: () => navigation.navigate("Homes", { screen: "storieview" })
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
        onPress: () => navigation.navigate("Homes", { screen: "storieview" })
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
        onPress: () => navigation.navigate("Homes", { screen: "storieview" })
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
        onPress: () => navigation.navigate("Homes", { screen: "storieview" })
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
        onPress: () => navigation.navigate("Homes", { screen: "storieview" })

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
        onPress: () => navigation.navigate("Homes", { screen: "storieview" })
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
        onPress: () => navigation.navigate("Homes", { screen: "storieview" })
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
        onPress: () => navigation.navigate("Homes", { screen: "storieview" })
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
        onPress: () => navigation.navigate("Homes", { screen: "storieview" })
      },
    ],
    statusData3: [
      {
        imgName: Images.Pictures.productcackImg1,
        imgWidth: 59,
        imgHeight: 59,
        borderRadius: 19,
        borderColor: '#3729F2',
        borderWidth: 2,
        width: 61,
        height: 61,
        text: 'John',
        onPress: () => navigation.navigate("Homes", { screen: "talentscreen" })
      },
      {
        imgName: Images.Pictures.productcackImg2,
        imgWidth: 59,
        imgHeight: 59,
        borderRadius: 19,
        borderColor: '#3729F2',
        borderWidth: 2,
        width: 61,
        height: 61,
        text: 'Veni',
        onPress: () => navigation.navigate("Homes", { screen: "talentscreen" })
      },
      {
        imgName: Images.Pictures.productcackImg3,
        imgWidth: 59,
        imgHeight: 59,
        borderRadius: 19,
        borderColor: '#3729F2',
        borderWidth: 2,
        width: 61,
        height: 61,
        text: 'Bella',
        onPress: () => navigation.navigate("Homes", { screen: "talentscreen" })
      },
      {
        imgName: Images.Pictures.productcackImg5,
        imgWidth: 59,
        imgHeight: 59,
        borderRadius: 19,
        borderColor: '#3729F2',
        borderWidth: 2,
        width: 61,
        height: 61,
        text: 'Saher',
        onPress: () => navigation.navigate("Homes", { screen: "talentscreen" })
      },
      {
        imgName: Images.Pictures.productcackImg3,
        imgWidth: 59,
        imgHeight: 59,
        borderRadius: 19,
        borderColor: '#3729F2',
        borderWidth: 2,
        width: 61,
        height: 61,
        text: 'Bella',
        onPress: () => navigation.navigate("Homes", { screen: "talentscreen" })
      },
      {
        imgName: Images.Pictures.productcackImg5,
        imgWidth: 59,
        imgHeight: 59,
        borderRadius: 19,
        borderColor: '#3729F2',
        borderWidth: 2,
        width: 61,
        height: 61,
        text: 'Saher',
        onPress: () => navigation.navigate("Homes", { screen: "talentscreen" })
      },


    ],


    statusData2: [
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
        onPress: () => { navigation.navigate('profile') }
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
    ],
  });
  const [img, setImg] = useState(Images.Logos.plusIcon);
  const [check, setcheck] = useState({
    value: 'PITCHLY FEED',
  });
  // const picker = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     setImg(image.path);
  //     console.log(image);
  //   });
  // };
  return (
    <>
      <ImageBackground
        style={styles.imageContainer}
        source={Images.Pictures.homeMainBg}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar
            animated={true}
            backgroundColor="#000"
            barStyle={statusBarStyle}
            showHideTransition={statusBarTransition}
            hidden={hidden} />
          <View style={styles.body}>
            <View style={styles.headerView}>
              <HomeHeader
                homeHeader1 onPress={() =>
                  navigation.navigate('Homes', { screen: 'searchscreen' })
                } />
            </View>
            <View style={styles.statusBoxView}>
              <View style={styles.statusAddView}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Homes", { screen: 'camerastorie' })}
                  style={styles.statusAddBox}>
                  <Image source={img} style={styles.statusAddIcon} />
                </TouchableOpacity>
                <Text>You</Text>
              </View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data.statusData}
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
                        onPress={item.onPress}
                      />
                    </View>
                  );
                }}
              />
            </View>

            <View style={styles.pitchlyFeatured}>

              <View
                style={{
                  width: '100%',
                  height: 181,

                  borderRadius: 19,
                }}>
                <ImageBackground style={{ borderRadius: 20 }} source={Images.Pictures.appBg} resizeMode="cover">

                  <View style={{ alignSelf: 'center', width: '90%', height: '90%', alignSelf: 'center', borderRadius: 25 }}>
                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000' }}>
                        Pitchly Featured
                      </Text>
                      <TouchableOpacity onPress={() => navigation.navigate('MyTabs', { screen: 'home11' })}>
                        <Text style={{ color: '#3109FB', fontWeight: 'bold' }}>See All</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ position: 'absolute', top: '50%', left: -25 }}>
                      <Icon
                        type="AntDesign"
                        name="left"
                        style={{
                          fontSize: 15,
                          color: 'black',
                        }}
                      />
                    </TouchableOpacity>
                    <View style={{ width: '100%', marginLeft: -10 }}>
                      <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={data.statusData3}
                        renderItem={({ item }) => {
                          return (
                            <View style={{
                              width: 100,
                              height: 110,
                            }}>
                              <TouchableOpacity
                                onPress={item.onPress}
                                activeOpacity={0.9}
                                style={{
                                  width: 79,
                                  height: 110,
                                  borderRadius: 15,
                                  // backgroundColor: 'yellow',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginLeft: 10,
                                }}>
                                <ImageBackground
                                  source={item.imgName}
                                  resizeMode="contain"
                                  style={{
                                    width: '100%', height: '100%'
                                  }}>
                                  <LinearGradient
                                    activeOpacity={0.9}
                                    start={{ x: 0, y: 0.0 }}
                                    end={{ x: 1, y: 1.9 }}
                                    colors={['#4059E4', '#4059E4', '#4059E4', '#5DF7B8']}
                                    style={{
                                      width: '100%',
                                      alignSelf: 'center',
                                      height: 15,
                                      backgroundColor: 'red',
                                      position: 'absolute',
                                      bottom: 0,
                                      borderBottomRightRadius: 8,
                                      borderBottomLeftRadius: 8,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 9 }}>
                                      Lorem ipsum
                                    </Text>
                                  </LinearGradient>
                                </ImageBackground>
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>
                    <TouchableOpacity
                      style={{ position: 'absolute', top: '50%', right: -15 }}>
                      <Icon
                        type="AntDesign"
                        name="right"
                        style={{
                          fontSize: 15,
                          color: 'black',
                        }}
                      />
                    </TouchableOpacity>

                  </View>
                </ImageBackground>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('MyTabs', { screen: 'homescreensix' })}>

                <LinearGradient
                  activeOpacity={0.9}
                  start={{ x: 0, y: 0.0 }}
                  end={{ x: 1, y: 1.9 }}
                  colors={['#5DF7B8', '#3109FB']}
                  style={{
                    width: '99%',
                    alignSelf: 'center',
                    height: 35,
                    backgroundColor: 'red',
                    position: 'absolute',
                    bottom: 0,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Icon
                    type="AntDesign"
                    name="arrowleft"
                    style={{ fontSize: 10, color: 'white', marginRight: 10 }}
                  />
                  <Text style={{ fontSize: 14, color: 'white' }}>
                    Pitchly Promotions & Discounts
                  </Text>
                  <Icon
                    type="AntDesign"
                    name="arrowright"
                    style={{ fontSize: 10, color: 'white', marginLeft: 10 }}
                  />
                </LinearGradient>
              </TouchableOpacity>

            </View>



            <View
              style={{
                width: '100%',
                height: 35,
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '40%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                {/* PRODUCTS FEED */}
                <Text style={{ color: 'black', fontWeight: 'bold' }}>
                  {check.value}
                </Text>
              </View>
              <LinearGradient
                start={{ x: 1.5, y: 1.0 }}
                end={{ x: 1.5, y: 2.5 }}
                colors={['#28A9F61A', '#4C9BD2']}
                style={{
                  width: '60%',
                  height: '100%',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => setcheck({ ...check, value: 'PITCHLY FEED' })}
                  style={{
                    // backgroundColor: 'red',
                    paddingBottom: check.value == 'PITCHLY FEED' ? 2 : null,
                    borderBottomWidth: check.value == 'PITCHLY FEED' ? 1 : null,
                    borderColor: check.value == 'PITCHLY FEED' ? 'blue' : null,
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: check.value == 'PITCHLY FEED' ? 'blue' : 'black',
                    }}>
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setcheck({ ...check, value: 'TALENT FEED' })}
                  style={{
                    // backgroundColor: 'red',
                    paddingBottom: check.value == 'TALENT FEED' ? 2 : null,
                    borderBottomWidth: check.value == 'TALENT FEED' ? 1 : null,
                    borderColor: check.value == 'TALENT FEED' ? 'blue' : null,
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: check.value == 'TALENT FEED' ? 'blue' : 'black',
                    }}>
                    Talent
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setcheck({ ...check, value: 'SERVICES FEED' })}
                  style={{
                    // backgroundColor: 'red',
                    paddingBottom: check.value == 'SERVICES FEED' ? 2 : null,
                    borderBottomWidth:
                      check.value == 'SERVICES FEED' ? 1 : null,
                    borderColor: check.value == 'SERVICES FEED' ? 'blue' : null,
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: check.value == 'SERVICES FEED' ? 'blue' : 'black',
                    }}>
                    Services
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setcheck({ ...check, value: 'PRODUCTS FEED' })}
                  style={{
                    // backgroundColor: 'red',
                    paddingBottom: check.value == 'PRODUCTS FEED' ? 2 : null,
                    borderBottomWidth:
                      check.value == 'PRODUCTS FEED' ? 1 : null,
                    borderColor: check.value == 'PRODUCTS FEED' ? 'blue' : null,
                  }}>
                  <Text
                    style={{
                      fontSize: 11, fontWeight: 'bold',
                      color: check.value == 'PRODUCTS FEED' ? 'blue' : 'black',
                    }}>
                    Products
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            {check.value === 'PITCHLY FEED' && <AllMixed SuggestFriend={true} feture={true} />}
            {check.value === 'TALENT FEED' && <Talent feture={true} />}
            {check.value === 'SERVICES FEED' && <Services feture={true} />}
            {check.value === 'PRODUCTS FEED' && <Product feture={true} />}
          </View>
        </ScrollView>
      </ImageBackground >
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  body: { width: '90%', height: '100%', alignSelf: 'center', paddingBottom: 60 },
  statusBoxView: {
    width: '110%',
    marginTop: 10,
    marginLeft: -10,
    flexDirection: 'row',
  },

  headerView: { width: '100%', marginVertical: 15 },
  statusAddView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  statusAddBox: {
    width: 65,
    height: 65,
    borderRadius: 19,
    borderColor: '#3729F2',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusAddIcon: { width: 24.63, height: 24.63 },
  pitchlyFeatured: {
    width: '100%',
    marginTop: 15,
    borderRadius: 25,
    // borderWidth: 2

  },
  appbg: {
    borderRadius: 25, marginVertical: 10, top: 5,
  }
});


// <PitchlyFeatured
// // onPress1={() => navigation.navigate('MyTabs', { screen: 'homescreensix' })}
// // onPress2={() => navigation.navigate('MyTabs', { screen: 'home11' })}
// />
