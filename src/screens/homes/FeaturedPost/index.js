import {
<<<<<<< Updated upstream
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  StatusBar,
  Switch,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../../constants';
import {AppButton, Box, Header, Row, Switch1} from '../../../components';
import {Item, Textarea} from 'native-base';
import {Icon} from 'react-native-elements';
import Post from '../../../components/post';
const FeaturedPost = ({}) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={Images.Pictures.appBg}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={{}}>
          <View style={styles.screenHeader}>
            <Header
              hiddinText
              text="Featured Post"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={styles.screenBody}>
            <Post
              Image1={Images.Icons.post}
              TalentName="Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,
=======
    StyleSheet,
    Text, View,
    ImageBackground,
    Image,
    ScrollView,
    StatusBar,
    Switch,
    FlatList
} from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../../constants'
import { AppButton, Box, Header, Row, Switch1 } from '../../../components'
import { Item, Textarea } from 'native-base'
import { Icon } from 'react-native-elements'
import Post from '../../../components/post'


const FeaturedPost = (props) => {

    return (
        <ImageBackground
            style={styles.imageContainer}
            source={Images.Pictures.appBg}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <View style={{}}>
                    <View style={styles.screenHeader}>
                        <Header
                            BAckButton
                            hiddinText
                            text="Featured Post"
                            onPress={() => { props.navigation.goBack(); }} />
                    </View>
                    <View style={styles.screenBody}>
                        <Post Image1={Images.Icons.post}
                            TalentName="Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,
>>>>>>> Stashed changes
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,

                            Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitraliquyam erat,
                             "
<<<<<<< Updated upstream
              City="Lorem ipsum dolor sit amet,"
              state="Lorem ipsum dolor sit amet,"
              Date="02/20/2021"
              Duration={true}
            />
            <View style={{width: '60%', alignSelf: 'center'}}>
              <View style={{marginVertical: 25}}>
                <AppButton
                  LinearColor1={'#5DF7B8'}
                  LinearColor2={'#3109FB'}
                  color={'white'}
                  borderWidth={0.5}
                  borderColor={'#707070'}
                  backgroundColor={'#FFFFFF'}
                  label="Review"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default FeaturedPost;
=======
                            City="Lorem ipsum dolor sit amet,"
                            state="Lorem ipsum dolor sit amet,"
                            Date="02/20/2021" />
                        <View style={{ width: '70%', alignSelf: 'center' }}>
                            <View style={{ marginVertical: 15 }}>
                                <AppButton
                                    LinearColor1={'#5DF7B8'}
                                    LinearColor2={'#3109FB'}
                                    color={'white'}
                                    borderWidth={0.5}
                                    borderColor={'#707070'}
                                    backgroundColor={'#FFFFFF'}
                                    label="Renew"
                                    onPress={() => { props.navigation.navigate('featuredpost') }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    )
}
export default FeaturedPost
>>>>>>> Stashed changes

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  screenHeader: {
    width: '90%',
    height: 80,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headingText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headingTextView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  screenBody: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});
