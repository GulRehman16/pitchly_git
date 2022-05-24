import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import {Images} from '../../constants';
import {StatusView} from '../statusView';

const PitchlyFeatured = ({}) => {
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
    <View
      style={{
        width: '100%',
        height: 150,
        backgroundColor: '#28A9F61A',
        borderRadius: 19,
      }}>
      <View style={{alignSelf: 'center', width: '90%', height: '100%'}}>
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

        <View style={{width: '100%'}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data.statusData}
            renderItem={({item}) => {
              return (
                <View style={{paddingLeft: 5}}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      width: 70,
                      height: 80,
                      borderRadius: 19,
                      borderColor: '#3729F2',
                      borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={item.imgName}
                      style={{width: item.imgWidth, height: item.imgHeight}}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export {PitchlyFeatured};

const styles = StyleSheet.create({});
