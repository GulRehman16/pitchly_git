import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Post from '../../../components/post';
import Headerchat from '../../../components/Headerchat';
import {Images} from '../../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import {Homes} from '../../../navigation/stack';
const Productdetails = props => {
  return (
    <View>
      <ScrollView>
        <View style={{marginLeft: 10, marginTop: 10}}>
          <Headerchat
            image={Images.Pictures.statusImg2}
            name={'Veni'}
            Press={() => {
              props.navigation.goBack();
            }}
            icon={false}
          />
        </View>
        <View style={{width: '100%'}}>
          <Post
            Image1={Images.Icons.post}
            TalentName="Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,
                           "
            City="Lorem ipsum dolor sit amet,"
            state="Lorem ipsum dolor sit amet,"
            Date="02/20/2021"
            Duration={false}
            Press1={() => {
              props.navigation.naviagte('Homes', {screen: 'pictureslider'});
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenBody: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  screenHeader: {
    width: '90%',
    height: 80,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Productdetails;

// <ImageBackground
// source={singleImg}
// style={{ width: '100%', height: '100%' }}
// resizeMode="stretch"></ImageBackground>
// )}
