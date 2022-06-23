import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppButton, Box, Header, Row, Post } from '../../../components';
import Headerchat from '../../../components/Headerchat';
import { Images } from '../../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import { Homes } from '../../../navigation/stack';
const Productdetails = props => {
  return (
    <View>
      <ScrollView>
        <View style={{ marginLeft: 10, marginTop: 10 }}>
          <View style={styles.screenHeader}>
            <Header
              BAckButton={true}
              hiddinText
              text="Featured Post"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
        </View>
        <View style={{ width: '100%' }}>
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
            Duration={true}
            Press1={() => {
              props.navigation.naviagte('Homes', { screen: 'pictureslider' });
            }}
          />
          <View style={{ width: '60%', alignSelf: 'center' }}>
            <View style={{ marginVertical: 5 }}>
              <AppButton
                LinearColor1={'#5DF7B8'}
                LinearColor2={'#3109FB'}
                color={'white'}
                borderWidth={0.5}
                borderColor={'#707070'}
                backgroundColor={'#FFFFFF'}
                label="Renew"
                onPress={() => {
                  props.navigation.navigate('getfeatured');
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Productdetails;

const styles = StyleSheet.create({
  screenBody: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  screenHeader: {
    width: '90%',
    height: 50,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// <ImageBackground
// source={singleImg}
// style={{ width: '100%', height: '100%' }}
// resizeMode="stretch"></ImageBackground>
// )}