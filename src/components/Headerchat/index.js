import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base';
import {Avatar} from 'react-native-elements';

export default function Headerchat({
  borderRadius,
  image,
  name,
  time,
  Press,
  icon,
}) {
  const Width = Dimensions.get('window').width;

  return (
    <View
      style={{
        flexDirection: 'row',
        // borderWidth: 1,
        // backgroundColor: 'red',
        width: '100%',
        height: 60,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => Press}>
        <LinearGradient
          start={{x: 1, y: 0.0}}
          end={{x: 1, y: 1.9}}
          colors={['#5DF7B8', '#3109FB']}
          style={{
            width: 35,
            height: 35,
            borderRadius: borderRadius || 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Icon
            type="AntDesign"
            name="left"
            style={{color: 'white', fontSize: 24}}
          />
        </LinearGradient>
      </TouchableOpacity>
      <View style={{marginLeft: 15}}>
        <Avatar rounded size={'medium'} resizeMode="contain" source={image} />
      </View>

      <View style={{width: Width * 0.58}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'black',
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            marginLeft: 10,
            color: 'grey',
          }}>
          {time}
        </Text>
      </View>

      {icon == true ? (
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            flex: 1,
            //   alignItems: 'center',
            justifyContent: 'center',
            // marginLeft: 70,
            marginBottom: 15,
          }}>
          <Icon
            type="AntDesign"
            name="exclamationcircleo"
            style={{color: 'black', fontSize: 30}}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({});
