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
} from 'react-native';
import { Images } from '../../../constants';
import {
  StatusView,
  PitchlyFeatured,

  SuggestFriends,
  OverlayScreen,
  AllMixed, HomeHeader, Product, Services, Talent,
} from '../../../components';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
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
  const picker = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImg(image.path);
      console.log(image);
    });
  };
  return (
    <>
      <ImageBackground
        style={styles.imageContainer}
        source={Images.Pictures.homeMainBg}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar backgroundColor={'transparent'} translucent={true} />
          <View style={styles.body}>
            <View style={styles.headerView}>
              <HomeHeader
                homeHeader1 onPress={() =>
                  props.navigation.navigate('Homes', { screen: 'searchscreen' })
                } />
            </View>
            <View style={styles.statusBoxView}>
              <View style={styles.statusAddView}>
                <TouchableOpacity
                  onPress={() => picker()}
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
                      />
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles.pitchlyFeatured}>
              <PitchlyFeatured
                onPress1={() => navigation.navigate('Homes', { screen: 'homescreensix' })}
                onPress2={() => navigation.navigate('Homes', { screen: 'home11' })} />
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
            {check.value === 'PITCHLY FEED' && <AllMixed feture={false} />}
            {check.value === 'TALENT FEED' && <Talent feture={false} />}
            {check.value === 'SERVICES FEED' && <Services feture={false} />}
            {check.value === 'PRODUCTS FEED' && <Product feture={false} />}
          </View>
        </ScrollView>
      </ImageBackground>
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
    marginTop: 20,
    marginLeft: -10,
    flexDirection: 'row',
  },

  headerView: { width: '100%', marginTop: 60 },
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
  },
});
