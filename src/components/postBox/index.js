import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import { Images, Themes } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { Tooltip, } from 'react-native-elements';

const PostBox = ({ }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: '95%', alignSelf: 'center', height: '100%' }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: 40, height: 40 }}>
              <Image
                source={Images.Pictures.profile}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 5 }}>
              <Text style={{ color: '#4B4B4B', fontSize: 16, fontWeight: '400' }}>
                Veni Paul
              </Text>
              <Text style={{ color: '#4B4B4B', fontSize: 10 }}>3 Hour Ago</Text>
            </View>
          </View>

          <Tooltip containerStyle={{
            width: 120,
            height: 80,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
            flexDirection: 'row'
          }} backgroundColor='#fff'
            withPointer={true}
            popover={
              <View>
                <Text style={{ marginVertical: 5 }}>
                  Report Post

                </Text>
                <Text style={{ marginVertical: 5 }}>

                  Block person
                </Text>

              </View>}>
            <View style={{ width: 20, height: 20 }}>
              <Image
                source={Images.Logos.globe}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          </Tooltip>

        </View>

        <View style={{ width: '100%', marginTop: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>
            Talent Name
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                color: 'black',
              }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor...
              <Text style={{ color: '#4A91D5' }}> see more</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 202,
            borderRadius: 20,
            marginTop: 10,
          }}>
          <ImageBackground
            source={Images.Pictures.postImg1}
            style={{ width: '100%', height: '100%' }}
            resizeMode="stretch"></ImageBackground>
        </View>

        <LinearGradient
          start={{ x: 1.5, y: 1.0 }}
          end={{ x: 1.5, y: 2.5 }}
          colors={['#28A9F61A', '#4C9BD2']}
          style={{
            width: '105%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            alignSelf: 'center',
            elevation: 0.3,
            height: 50,
            position: 'absolute',
            bottom: 0,
          }}>
          <View
            style={{
              width: '90%',
              height: '100%',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                height: '100%',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <Image
                    source={Images.Logos.msgColorIcon}
                    style={{ width: 19.07, height: 18.74 }}
                  />
                  <Text style={{ color: 'black', paddingLeft: 5 }}>120</Text>
                </View>

                <View
                  style={{
                    marginLeft: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={Images.Logos.shareIcon}
                    style={{ width: 19.07, height: 18.74 }}
                  />
                  <Text style={{ color: 'black', paddingLeft: 5 }}>2.4K</Text>
                </View>

                <View
                  style={{
                    marginLeft: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={Images.Logos.starIcon}
                    style={{ width: 19.07, height: 18.74 }}
                  />
                  <Text style={{ color: 'black', paddingLeft: 5 }}>4.2K</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.Logos.favoriteIcon}
                  style={{ width: 14, height: 17 }}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export { PostBox };

const styles = StyleSheet.create({
  postToolDrop: {
    minWidth: 100,
    zIndex: 1000,
    minHeight: 50,
    position: 'absolute',
    backgroundColor: '#EFF2F7',
    top: 40,
    borderRadius: 14,
    right: '5%',
    padding: 10,
  },

  container: {
    width: '100%',
    height: 406,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: 'white',
  },
  mainContainer: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 50,
  },
  header: {
    width: '100%',
    height: 100,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBox: {
    marginLeft: 5,
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#F54F84',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusBtn: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#F54F84',
    position: 'absolute',
    bottom: -3,
    right: -8,
    backgroundColor: 'white',
  },
  newFeed: {
    fontSize: 20,
    color: '#191919B8',
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  PostVIew: {
    width: '100%',
    height: 442.03,
    zIndex: 1000,
    marginTop: 15,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowOffset: 40,
  },
  postHeader: { width: '90%', height: '100%', alignSelf: 'center' },
  postHeaderContentLeft: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postHeaderImg: {
    width: 29.89,
    height: 29.89,
    borderWidth: 2,
    borderColor: '#F54F84',
    borderRadius: 29,
  },
  postHeaderContentRight: {
    fontSize: 13,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#19295C',
  },
  postIcon: {
    height: 22.64,
    width: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dotLine: {
    width: 22.64,
    height: 22.64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF2F7',
    borderRadius: 20,
  },
  savedImage: {
    width: 12.68,
    height: 3.62,
  },

  icons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeBtn: {
    width: 30.8,
    height: 30.8,
    alignItem: 'center',
    justifyContent: 'center',
  },
  iconBtn: {
    width: 30.8,
    height: 30.8,
    alignItem: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  rightIconBtn: {
    width: 19.93,
    height: 19.93,
    alignItem: 'center',
    justifyContent: 'center',
    backgroundColor: '#1977F3',
    borderRadius: 15,
  },
  rightIconBtn2: {
    width: 19.93,
    height: 19.93,
    alignItem: 'center',
    justifyContent: 'center',
    backgroundColor: '#F31954',
    borderRadius: 15,
  },
});
