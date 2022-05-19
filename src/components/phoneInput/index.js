import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const NumInput = ({bgColor, borderC, backgroundColor, borderW}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  const phoneInput = useRef(null);
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 51,
          color: 'black',
          backgroundColor: 'white',
        }}>
        <PhoneInput
          defaultValue={value}
          value={value}
          disableArrowIcon={true}
          layout="first"
          ref={phoneInput}
          defaultCode="PK"
          containerStyle={{
            width: '100%',
            backgroundColor: backgroundColor || '#E9EBEF',
            borderRadius: 5,
          }}
          textContainerStyle={{
            color: 'black',
            backgroundColor: backgroundColor || '#E9EBEF',
          }}
          textInputStyle={{
            color: 'black',
            borderBottomWidth: 1,
          }}
          onChangeText={text => {
            console.log(text);
            setValue(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          codeTextStyle={{marginLeft: -40}}
          flagButtonStyle={{marginLeft: -10}}
          autoFocus={false}
          placeholder="Phone Number"
        />

        {/* <TouchableOpacity
          style={{}}
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(value);
            setShowMessage(true);
            setValid(checkValid ? checkValid : false);
          }}>
          <Text>Check</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

export {NumInput};
