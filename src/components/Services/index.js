import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,

} from 'react-native';
import { Images, Themes } from '../../constants';
import { PostBox } from '../../components';
const Services = ({ feture }) => {
  const Service = [
    {
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Service Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      price: '$ 10.00',
      singleImg: Images.Pictures.postImg1,
      checksingle: 'false',
      feture: feture ? false : true,
      feture: true,
    },
    {
      profileImg: Images.Pictures.statusImg3,
      profileTitle: 'Alex',
      postTime: '1 hour ago',
      boxTitle: 'Service Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      price: '$ 10.00',
      singleImg: Images.Pictures.postImg1,
      checksingle: 'false',
      feture: feture ? false : true,
      feture: false,
    },
  ];
  console.log('service.feture', Service.feture);
  return (
    <View>
      <FlatList
        data={Service}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 10 }}>
              <PostBox

                profileTitle={item.profileTitle}
                postTime={item.postTime}
                boxTitle={item.boxTitle}
                boxDetail={item.boxDetail}
                price={item.price}
                singleImg={item.singleImg}
                checksingle={item.checksingle}
                GetFeture={item.feture}
                feture={feture ? true : false}
                star={false}
                ImgPress={() =>
                  item.ImgPress.navigate('Homes', {
                    screen: 'productdetails',
                  })
                }
              />
            </View>
          );
        }}
      />
    </View>
  );
};
export { Services };
