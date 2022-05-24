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
} from '../../../components';
import {Icon} from 'native-base';

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
  body: {width: '90%', height: '100%', alignSelf: 'center'},
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
    marginTop: 10,
  },
});
