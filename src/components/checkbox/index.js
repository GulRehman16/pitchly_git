import React, {useState, useRef, useEffect} from 'react';
import {CheckBox as CheckBoxButton} from 'react-native-elements';
import {View, Text} from 'react-native';
const CheckBox = ({checked, onPress, text, alignItem, left, checkedColor}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: alignItem,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: left ? -20 : -10,
      }}>
      <CheckBoxButton
        checkedColor={checkedColor || 'black'}
        size={20}
        checked={checked}
        onPress={onPress}
      />

      <Text
        style={{
          color: 'black',
          marginLeft: -18,
          fontSize: 14,
          color: '#272626',
        }}>
        {text}
      </Text>
    </View>
  );
};
export {CheckBox};
