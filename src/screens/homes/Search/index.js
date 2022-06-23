import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {HomeHeader} from '../../../components';
import {Avatar} from 'react-native-elements';
import {Images} from '../../../constants';
const Search = () => {
  const data = [
    {
      img: Images.Pictures.statusImg3,
      name: 'Service Name',
    },
    {
      img: Images.Pictures.statusImg3,
      name: 'Service Name',
    },
    {
      img: Images.Pictures.statusImg3,
      name: 'Service Name',
    },
  ];
  return (
    <View>
      <View style={{marginTop: 10}}>
        <HomeHeader homeHeader2={true} visibleINPUT={true} />
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              // justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              backgroundColor: 'white',
              borderRadius: 20,
              width: '80%',
              alignSelf: 'center',
              height: 63,
              elevation: 3,
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <View style={{marginLeft: 15}}>
              <Avatar rounded size={40} source={item.img} />
            </View>

            <Text style={{marginLeft: 15}}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: ' 100%',
    height: '100%',
  },
});
