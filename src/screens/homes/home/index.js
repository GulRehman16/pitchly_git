import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigation.replace('Auth', {screen: 'login'})}
          style={{
            backgroundColor: 'steelblue',
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            borderRadius: 7,
            marginVertical: 5,
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
