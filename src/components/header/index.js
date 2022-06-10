import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'native-base';

const Header = ({
  left,
  right,
  text,
  visibleText,
  hiddinText,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  textAlign,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  borderRadius,
  borderWidth,
  borderColor,
  onPress,
  HeaderText,
  BAckButton,
}) => {
  return (
    <View style={{ width: '100%', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
        {HeaderText && (
          <View style={{
            flexDirection: 'row', width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                  marginLeft: 10,
                }}>
                {text}
              </Text>
            </View>


            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
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
                  type="Ionicons"
                  name="reorder-three"
                  style={{ color: 'white', fontSize: 24 }}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}

        {BAckButton && (
          <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
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
                name="left"
                style={{ color: 'white', fontSize: 24 }}
              />
            </LinearGradient>
          </TouchableOpacity>

        )}

        {hiddinText && (
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
            }}>
            {text}
          </Text>
        )}
      </View>
      {visibleText && (
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 30,
          }}>
          {text}
        </Text>
      )}
    </View>
  );
};

export { Header };

const styles = StyleSheet.create({});
