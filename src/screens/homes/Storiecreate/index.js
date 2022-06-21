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
import ImagePicker from 'react-native-image-crop-picker';
export default function StorieCreate() {
  const [status, setstatus] = React.useState('Type A Status');
  const [image, setimage] = React.useState('');
  const picker = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setimage(image.path);
      console.log(image);
    });
  };
  const pickerGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setimage(image.path);
      console.log(image);
    });
  };
  return (
    <ImageBackground source={{uri: image}} style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {status}
      </Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Type a Status"
          onChangeText={text => setstatus(text)}
          style={{width: '65%'}}
        />
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginRight: 10,
            width: '20%',
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Icon
              type="Feather"
              name="send"
              style={{
                color: '#4059E4',
                fontSize: 24,
                marginleft: 10,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => picker()}>
            <Icon
              type="EvilIcons"
              name="camera"
              style={{
                color: '#4059E4',
                fontSize: 24,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pickerGallery()}>
            <Icon
              type="Entypo"
              name="images"
              style={{
                color: '#4059E4',
                fontSize: 24,
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
