
import { StyleSheet, Text, View, TouchableOpacity, Image, TurboModuleRegistry } from 'react-native'
import React, { useState } from 'react'
import Tooltip from 'react-native-walkthrough-tooltip';
import Icon from 'react-native-vector-icons/Entypo';
import { Images } from '../../constants';

const Tip = ({ tooltip1, tooltip2, press, onPress, text }) => {

  return (
    <View>
      {tooltip1 && (
        <Tooltip
          backgroundStyle={'red'}
          style={{ backgroundColor: 'pink' }}
          isVisible={onPress}
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
          onClose={() => { onPress }}
          placement="left" >
          <TouchableOpacity onPress={() => { }} >

            <Icon name="dots-three-vertical" type="Entypo"
              size={22}
            />
          </TouchableOpacity>
        </Tooltip>
      )}
      {tooltip2 && (
        <View style={{}}>

          <Tooltip

            style={{ backgroundColor: 'pink' }}
            isVisible={onPress}
            accessible={false}
            showChildInTooltip={false}
            contentStyle={{
              marginTop: 30,
            }}

            content={
              <View sty={{ marginTop: 50 }}>
                <View style={styles.TooltipContainer}>
                  <TouchableOpacity
                    onPress={() => { navigation.navigate('profile') }}
                    style={styles.box}>
                    <Image source={Images.Icons.add1} resizeMode="contain"
                      style={{ width: 40, height: 40, }} />
                    <Text>General</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { navigation.navigate('profile') }}
                    style={styles.box}>
                    <Image source={Images.Icons.user1} resizeMode="contain"
                      style={{ width: 40, height: 40 }} />
                    <Text>Talent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { navigation.navigate('AddPost') }}
                    style={styles.box}>
                    <Image source={Images.Icons.setting1} resizeMode="contain"
                      style={{ width: 40, height: 40 }} />
                    <Text>Services</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { navigation.navigate('AddPost') }}
                    style={styles.box}>
                    <Image source={Images.Icons.lock1} resizeMode="contain"
                      style={{ width: 40, height: 40 }} />
                    <Text>Products</Text>
                  </TouchableOpacity>
                </View>
              </View>}
            // onClose={() => { setShowTip(onPress) }}
            placement="top" >
            <TouchableOpacity onPress={onPress} >

              <Text style={{ marginVertical: 90 }}>{text}</Text>

            </TouchableOpacity>
          </Tooltip>
        </View>

      )}

    </View>
  )
}
export { Tip }

const styles = StyleSheet.create({})
