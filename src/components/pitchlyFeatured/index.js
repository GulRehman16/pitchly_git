import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import {Images} from '../../constants';
import {StatusView} from '../statusView';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base';

const PitchlyFeatured = ({}) => {
  const [data, setData] = useState({
    statusData: [
      {
        imgName: Images.Pictures.item1,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,

        width: 61,
        height: 61,
        text: 'John',
      },
      {
        imgName: Images.Pictures.item2,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,

        width: 61,
        height: 61,
        text: 'Veni',
      },
      {
        imgName: Images.Pictures.item3,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,

        width: 61,
        height: 61,
        text: 'Bella',
      },
      {
        imgName: Images.Pictures.item4,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,

        width: 61,
        height: 61,
        text: 'Saher',
      },
      {
        imgName: Images.Pictures.item5,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,

        width: 61,
        height: 61,
        text: 'Bella',
      },
      {
        imgName: Images.Pictures.item1,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,

        width: 61,
        height: 61,
        text: 'John',
      },
      {
        imgName: Images.Pictures.item2,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,

        width: 61,
        height: 61,
        text: 'Veni',
      },
      {
        imgName: Images.Pictures.item3,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,

        width: 61,
        height: 61,
        text: 'Bella',
      },
      {
        imgName: Images.Pictures.item4,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,

        width: 61,
        height: 61,
        text: 'Saher',
      },
      {
        imgName: Images.Pictures.item5,
        imgWidth: '100%',
        imgHeight: '100%',
        borderRadius: 19,
        width: 61,
        height: 61,
        text: 'Bella',
      },
    ],
  });
  return (
    <LinearGradient
      activeOpacity={0.9}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.0}}
      colors={[
        '#FAFAFA52',
        '#FAFAFA52',
        '#28A9F61A',
        '#5DF7B888',
        '#FAFAFA52',
        '#FAFAFA52',
        '#FAFAFA52',
        '#FAFAFA52',
      ]}
      style={{
        width: '100%',
        height: 181,
        backgroundColor: '#28A9F61A',
        borderRadius: 19,
      }}>
      <View style={{alignSelf: 'center', width: '90%', height: '100%'}}>
        <TouchableOpacity style={{position: 'absolute', top: '40%', left: -25}}>
          <Icon
            type="AntDesign"
            name="left"
            style={{
              fontSize: 15,
              color: 'black',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{position: 'absolute', top: '40%', right: -15}}>
          <Icon
            type="AntDesign"
            name="right"
            style={{
              fontSize: 15,
              color: 'black',
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000'}}>
            Pitchly Featured
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#3109FB', fontWeight: 'bold'}}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={{width: '100%', marginLeft: -10}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data.statusData}
            renderItem={({item}) => {
              return (
                <View style={{marginTop: 5}}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={{
                      width: 78,
                      height: 97,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 10,
                    }}>
                    <ImageBackground
                      source={item.imgName}
                      style={{
                        width: item.imgWidth,
                        height: item.imgHeight,
                      }}>
                      <LinearGradient
                        activeOpacity={0.9}
                        start={{x: 0, y: 0.0}}
                        end={{x: 1, y: 1.9}}
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
                        <Text style={{color: 'white', fontSize: 9}}>
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
      </View>
      <LinearGradient
        activeOpacity={0.9}
        start={{x: 0, y: 0.0}}
        end={{x: 1, y: 1.9}}
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
          style={{fontSize: 10, color: 'white', marginRight: 10}}
        />
        <Text style={{fontSize: 14, color: 'white'}}>
          Pitchly Promotions & Discounts
        </Text>
        <Icon
          type="AntDesign"
          name="arrowright"
          style={{fontSize: 10, color: 'white', marginLeft: 10}}
        />
      </LinearGradient>
    </LinearGradient>
  );
};

export {PitchlyFeatured};

const styles = StyleSheet.create({});
