import {Icon} from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppButton = ({
  onPress,
  label,
  iconBG,
  iconN,
  iconT,
  iconL,
  iconR,
  buttonStyle,
  color,
  backgroundColor,
  borderColor,
  borderWidth,
  LinearColor1,
  LinearColor2,
}) => {
  const icon = iconL || iconR;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 1.1, y: 0.0}}
        colors={[LinearColor1 || '#ffffff', LinearColor2 || '#ffffff']}
        style={
          buttonStyle || {
            width: '100%',
            height: 51,
            borderRadius: 10,
            borderColor: borderColor || '#707070',
            borderWidth: borderWidth || 0,
            backgroundColor: backgroundColor || '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
          }
        }>
        <Text style={{color: color || 'white'}}> {label} </Text>
        {icon && (
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: iconBG || 'pink',
              borderRadius: 8,
              position: 'absolute',
              right: iconR ? 15 : null,
              left: iconL ? 15 : null,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name={iconN || 'right'}
              type={iconT || 'AntDesign'}
              style={{fontSize: 20}}
            />
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export {AppButton};
