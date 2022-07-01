import { StyleSheet, Text, View, FlatList, ImageBackground, StatusBar, statusBarStyle, statusBarTransition, hidden } from 'react-native';
import React from 'react';
import { HomeHeader } from '../../../components';
import { Avatar } from 'react-native-elements';
import { Images } from '../../../constants';



const Search = (props) => {

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
    <ImageBackground
      style={styles.imageContainer}
      source={Images.Pictures.homeMainBg}>
      <StatusBar
        animated={true}
        backgroundColor="#000"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden} />

      <View style={{ marginVertical: 30 }}>
        <View style={styles.screenHeader}>
          <HomeHeader homeHeader2={true} visibleINPUT={true}
            search={true}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
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
            <View style={{ marginLeft: 15 }}>
              <Avatar rounded size={40} source={item.img} />
            </View>

            <Text style={{ marginLeft: 15 }}>{item.name}</Text>
          </View>
        )}
      />
    </ImageBackground>

  );
};
export default Search;
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  screenHeader: {
    width: '90%',
    height: 30,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
