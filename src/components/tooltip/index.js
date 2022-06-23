
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Tooltip from 'react-native-walkthrough-tooltip';

import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'native-base';
import { Images } from '../../constants';

const Tip = ({
  tooltipdata1,
  tooltipdata2,
  Image1, Image2,
  Image3, Image4,
  Text1, Text2, Text3, Text4,
  onPress,
  onPress1,
  onPress2,
  onPress3,
  onPress4,
  Toppint,
  bottompoint,
  marginBottom,
  marginVertical,
  Icon1, borderRadius, img1
}) => {
  const [showTip, setShowTip] = useState(false)
  return (
    <>
      {tooltipdata1 && (
        <View>
          <Tooltip
            style={{ backgroundColor: 'pink' }}
            isVisible={showTip}
            accessible={false}
            showChildInTooltip={false}
            content={
              <View sty={{}}>
                <Text>
                  Remove Notification {'\n'}
                  Turn off notificationIcon about {'\n'}
                  Vani's updates
                </Text>
              </View>}
            onClose={() => { setShowTip(false) }}
            placement="left" >
            <TouchableOpacity onPress={() => setShowTip(true)} >
              <Icon name="dots-three-vertical" type="Entypo"
                size={22}
              />
            </TouchableOpacity>
          </Tooltip>
        </View>
      )}
      {tooltipdata2 && (
        <View style={styles.TooltipContainer}>
          <View
            style={{
              // borderWidth: 1,
              width: '100%',
              height: 150,
              justifyContent: 'space-evenly',
              // marginVertical: 75,
              backgroundColor: '#fff',
              borderRadius: 16,
              alignItems: 'center',
              // marginBottom: marginBottom || 50,
              marginVertical: marginVertical || 30

            }}>
            {Toppint && (
              <View
                style={{
                  width: 0,
                  height: 0,
                  borderLeftWidth: 40,
                  borderRightWidth: 40,
                  borderTopWidth: 40,
                  borderStyle: 'solid',
                  backgroundColor: 'transparent',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderTopColor: '#fff',
                  position: 'absolute',
                  bottom: -25,
                }}></View>

            )}
            <View>
              {bottompoint && (
                <View
                  style={{
                    width: 0,
                    height: 0,
                    borderLeftWidth: 40,
                    borderRightWidth: 40,
                    borderBottomWidth: 40,
                    borderStyle: 'solid',
                    backgroundColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderBottomColor: '#fff',
                    position: 'absolute',
                    bottom: 0,
                    left: 100

                  }}>
                </View>

              )}

            </View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: 'black',
              }}>
              UPLOAD
            </Text>
            <View style={styles.TooltipContainerMain}>

              <View>
              </View>
              <TouchableOpacity
                onPress={onPress1}
                style={styles.box}>

                {Icon1 && (
                  <View style={{ alignSelf: 'center' }}>
                    <LinearGradient
                      start={{ x: 1, y: 0.0 }}
                      end={{ x: 1, y: 1.9 }}
                      colors={['#5DF7B8', '#3109FB']}
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: borderRadius || 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Icon
                        type="AntDesign"
                        name="search1"
                        style={{ color: 'white', fontSize: 24 }}
                      />
                    </LinearGradient>
                  </View>

                )}
                {img1 && (

                  <Image
                    source={Image1}
                    resizeMode="contain"
                    style={{ width: 40, height: 40 }}
                  />

                )}

                <Text style={styles.texts}>{Text1}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPress2}
                style={styles.box}>
                <Image
                  source={Image2}
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.texts}>{Text2}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onPress3}
                style={styles.box}>
                <Image
                  source={Image3}
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.texts}>{Text3}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onPress4}
                style={styles.box}>
                <Image
                  source={Image4}
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.texts}>{Text4}</Text>
              </TouchableOpacity>


            </View>
          </View>
        </View>

      )}

    </>

  )
}
export { Tip }

const styles = StyleSheet.create({

  TooltipContainerMain: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  TooltipContainer: {
    width: '100%',

  },
  box: {
    margin: 2,
    width: 64,
    height: 70,
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 1.25,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  cardbox: {
    width: '100%',
    height: 80,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    elevation: 4,
  },
  ImgView: {
    justifyContent: 'space-evenly',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'grey',
    marginLeft: 20,
  },
  vani: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  just_now_text: {
    color: 'blue',
    fontSize: 16,
  },
  btn: {
    width: 60,
    padding: 10,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  Icon: {
    width: '5%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  texts: {
    fontSize: 12
  }

})



// <TouchableOpacity
// onPress={() => {
//   props.navigation.navigate('');
// }}
// style={styles.box}>
// <Image
//   source={Image2}
//   resizeMode="contain"
//   style={{ width: 40, height: 40 }}
// />
// <Text>Talent</Text>
// </TouchableOpacity>
// <TouchableOpacity
// onPress={() => {
//   props.navigation.navigate();
// }}
// style={styles.box}>
// <Image
//   source={Image3}
//   resizeMode="contain"
//   style={{ width: 40, height: 40 }}
// />
// <Text>Services</Text>
// </TouchableOpacity>
// <TouchableOpacity
// onPress={() => {
//   props.navigation.navigate('');
// }}
// style={styles.box}>
// <Image source={Image4}
//   resizeMode="contain"
//   style={{ width: 40, height: 40 }}
// />
// <Text>Products</Text>
// </TouchableOpacity>
