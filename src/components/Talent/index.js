import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {Images, Themes} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {PostBox} from '../postBox';
const Talent = () => {
  const Talent = [
    {
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Talent Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',

      singleImg: Images.Pictures.talent,
      checksingle: 'false',
    },
    {
      profileImg: Images.Pictures.statusImg3,
      profileTitle: 'Alex',
      postTime: '1 hour ago',
      boxTitle: 'Talent Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',

      singleImg: Images.Pictures.talent,
      checksingle: 'false',
    },
  ];

  return (
    <View>
      <FlatList
        data={Talent}
        renderItem={({item}) => {
          return (
            <View style={{marginTop: 10}}>
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
              />
            </View>
          );
        }}
      />
    </View>
  );
};
export default Talent;