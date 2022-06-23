import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Images, Themes } from '../../constants';
import { PostBox } from '../../components';
const Product = ({ feture }) => {
  const Products = [
    {
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Product Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      price: '$ 120.00',
      gridImg: Images.Pictures.productcackImg1,
      gridImg1: Images.Pictures.productcackImg2,
      gridImg2: Images.Pictures.productcackImg3,
      gridImg3: Images.Pictures.productcackImg4,
      gridImg4: Images.Pictures.productcackImg5,
      checksingle: false,
      feture: feture ? false : true,
    },
    {
      profileImg: Images.Pictures.statusImg1,
      profileTitle: 'Veni Paul',
      postTime: '1 hour ago',
      boxTitle: 'Product Name',
      boxDetail:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',
      price: '$ 120.00',
      gridImg: Images.Pictures.productcackImg1,
      gridImg1: Images.Pictures.productcackImg2,
      gridImg2: Images.Pictures.productcackImg3,
      gridImg3: Images.Pictures.productcackImg4,
      gridImg4: Images.Pictures.productcackImg5,
      checksingle: false,
      feture: feture ? false : true,
    },
  ];

  return (
    <View>
      <FlatList
        data={Products}
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
                price={item.price}
                checksingle={item.checksingle}
                feture={item.feture}
              />
            </View>
          );
        }}
      />
    </View>
  );
};
export { Product };
