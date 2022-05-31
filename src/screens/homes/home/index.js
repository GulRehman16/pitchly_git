import React, {useState} from 'react';
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
import {Images} from '../../../constants';
import {
  FormInput,
  AppButton,
  Header,
  Tooltips,
  HomeHeader,
  StatusView,
  PitchlyFeatured,
  PostBox,
  SuggestFriends,
} from '../../../components';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const Home = props => {
  const [data, setData] = useState({
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

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={Images.Pictures.appBg}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={styles.body}>
          <View style={styles.headerView}>
            <HomeHeader />
          </View>

          <View style={styles.statusBoxView}>
            <View style={styles.statusAddView}>
              <View style={styles.statusAddBox}>
                <Image
                  source={Images.Logos.plusIcon}
                  style={styles.statusAddIcon}
                />
              </View>
              <Text>You</Text>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data.statusData}
              renderItem={({item}) => {
                return (
                  <View style={{paddingLeft: 10}}>
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
            <PitchlyFeatured />
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
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                PRODUCTS FEED
              </Text>
            </View>
            <LinearGradient
              start={{x: 1.5, y: 1.0}}
              end={{x: 1.5, y: 2.5}}
              colors={['#28A9F61A', '#4C9BD2']}
              style={{
                width: '60%',
                height: '100%',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={{}}>
                <Text
                  style={{fontSize: 11, fontWeight: 'bold', color: 'black'}}>
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{}}>
                <Text
                  style={{fontSize: 11, fontWeight: 'bold', color: 'black'}}>
                  Talent
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{}}>
                <Text
                  style={{fontSize: 11, fontWeight: 'bold', color: 'black'}}>
                  Services
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{}}>
                <Text
                  style={{fontSize: 11, fontWeight: 'bold', color: 'black'}}>
                  Products
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={{marginTop: 50}}>
            <PostBox />
          </View>

          <LinearGradient
            start={{x: 1.0, y: 0.0}}
            end={{x: 1.0, y: 1.5}}
            colors={['#28A9F633', '#5BEDBB']}
            style={{
              width: '110%',
              alignSelf: 'center',
              height: 200,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data.statusData2}
                renderItem={({item}) => {
                  return (
                    <View style={{marginLeft: 10}}>
                      <SuggestFriends
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
          </LinearGradient>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {width: '90%', height: '100%', alignSelf: 'center', paddingBottom: 60},
  statusBoxView: {
    width: '110%',
    marginTop: 20,
    marginLeft: -10,
    flexDirection: 'row',
  },

  headerView: {width: '100%', marginTop: 60},
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
  statusAddIcon: {width: 24.63, height: 24.63},
  pitchlyFeatured: {
    width: '100%',
    marginTop: 15,
  },
});
