
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Images } from '../../../constants';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'native-base';
import { useState } from 'react';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const CameraStorie = props => {
  // const [Visible, setVisible] = useState(true);
  const [image, setimage] = useState('');
  const takePicture = async camera => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);
    setimage(data.uri);
    // props.navigate('Homes', {screen: 'storieCreate'});
  };
  const pickerGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // setimg(image.path);
      console.log(image.path);
      setimage(image.path);
      props.navigate('Homes', { screen: 'storieCreate' });
      //   setVisible(true);
    });
  };
  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Waiting</Text>
    </View>
  );

  return (
    <View>
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '80%',
                  alignItems: 'center',
                  marginLeft: 30,
                  position: 'absolute',
                  bottom: 50,
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    width: '15%',
                    height: '33%',
                    marginTop: 30,
                    borderRadius: 10,
                  }}
                  onPress={() => pickerGallery()}>
                  <Image
                    source={Images.Pictures.productcackImg1}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => takePicture(camera)}
                  style={styles.capture}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="circle-slice-8"
                    style={{ color: 'white', fontSize: 100 }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  // onPress={() => takePicture(camera)}
                  onPress={() => { props.navigation.navigate("Homes", { screen: 'createstorie' }) }}
                  style={styles.capture}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 30,
                      marginTop: 30,
                      fontWeight: 'bold',
                    }}>
                    Aa
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    </View>
  );
};
export default CameraStorie;

const styles = StyleSheet.create({
  maincontainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#CBCBCB',
  },
  container: {
    width: width * 1,
    // alignSelf: 'center',
    height: height * 1,
  },
  containter1: {
    width: width * 0.9,
    borderWidth: 1,
    alignSelf: 'center',
    height: height * 0.13,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: '2%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    flexDirection: 'row',
  },
  heading: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: height * 0.045,
    color: 'black',
  },
  messageText: {
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 10,
    fontSize: height * 0.03,
  },
  input: {
    width: '93%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    margintop: 14,
  },
  img: {
    height: height * 0.08,
    width: width * 0.15,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 15,
  },
  preview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

