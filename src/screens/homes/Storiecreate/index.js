import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import {useState} from 'react';
export default function StorieCreate() {
  const [status, setstatus] = useState('Type A Status');
  const [image, setimage] = useState('');

  return (
    <ImageBackground source={{uri: image}} style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
        }}>
        {status}
      </Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Type a Status"
          onChangeText={text => setstatus(text)}
          style={{width: '75%'}}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '10%',
          }}>
          <TouchableOpacity>
            <Icon
              type="Feather"
              name="send"
              style={{
                color: '#4059E4',
                fontSize: 24,
                marginleft: 0,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A70000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputcontainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 55,
    borderRadius: 20,
    width: '60%',
    justifyContent: 'center',
    flexDirection: 'row',

    // alignItems: 'flex-end',
  },
});
