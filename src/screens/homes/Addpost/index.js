import React, {useState} from 'react';
import {SketchPicker} from 'react-color';
import {
    SafeAreaView,
    StyleSheet,
    Text, View,
    StatusBar,
    ImageBackground,
    ScrollView,
    Image,
    Switch,
    text,
    TouchableOpacity,
    onPress,
    borderRadius,
    hiddinText,
} from 'react-native';
import {AppButton, FormInput, Header} from '../../../components';
import {Images} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';

const AddPost = props => {
  const picker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={Images.Pictures.appBg}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={{}}>
          <View style={styles.screenHeader}>
            <Header
              BAckButton
              hiddinText
              text="Add Post"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={styles.screenBody}>
            <View style={{marginVertical: 5}}>
              <View style={styles.whitebox}>
                <View style={styles.Input}>
                  <FormInput
                    multiLine
                    height={160}
                    placeHolder="Telent Headline"
                  />
                  <TextInput selectionColor="red" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => picker()}>
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
                      }}>
                      <Image source={Images.Icons.PhotoVideo} />
                    </LinearGradient>
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 14,
                      // fontWeight: 'bold',
                      color: 'black',
                      marginLeft: 10,
                    }}>
                    Upload Photo & Video
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{width: '80%', alignSelf: 'center', marginVertical: 25}}>
              <AppButton
                LinearColor1={'#5DF7B8'}
                LinearColor2={'#3109FB'}
                color={'white'}
                borderWidth={0.5}
                borderColor={'#707070'}
                backgroundColor={'#FFFFFF'}
                label="Pay Now"
                onPress={() =>
                  props.navigation.replace('MyTabs', {screen: 'home'})
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddPost;

//     const [isEnabled, setIsEnabled] = useState(false);
//     const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//     return (
//         <ImageBackground
//             style={styles.imageContainer}
//             source={Images.Pictures.appBg}>
//             <ScrollView
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{ flexGrow: 1 }}>
//                 <StatusBar backgroundColor={'transparent'} translucent={true} />
//                 <View style={{}}>
//                     <View style={styles.screenHeader}>
//                         <Header
//                             BAckButton
//                             hiddinText
//                             text="Add Post"
//                             onPress={() => {
//                                 props.navigation.goBack();
//                             }}
//                         />
//                     </View>
//                     <View style={styles.screenBody}>

//                         <View style={{ marginVertical: 5 }}>
//                             <View style={styles.whitebox}>
//                                 <View style={styles.Input}>
//                                     <FormInput multiLine height={160}
//                                         placeHolder="Telent Headline" />
//                                 </View>
//                                 <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}>
//                                     <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
//                                         <LinearGradient
//                                             start={{ x: 1, y: 0.0 }}
//                                             end={{ x: 1, y: 1.9 }}
//                                             colors={['#5DF7B8', '#3109FB']}
//                                             style={{
//                                                 width: 35,
//                                                 height: 35,
//                                                 borderRadius: borderRadius || 5,
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center',
//                                             }}>
//                                             <Image source={Images.Icons.PhotoVideo} />
//                                         </LinearGradient>
//                                     </TouchableOpacity>
//                                     <Text
//                                         style={{
//                                             fontSize: 14,
//                                             // fontWeight: 'bold',
//                                             color: 'black',
//                                             marginLeft: 10,
//                                         }}>
//                                         Upload Photo & Video
//                                     </Text>
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={{ width: '80%', alignSelf: 'center', marginVertical: 25 }}>
//                             <AppButton
//                                 LinearColor1={'#5DF7B8'}
//                                 LinearColor2={'#3109FB'}
//                                 color={'white'}
//                                 borderWidth={0.5}
//                                 borderColor={'#707070'}
//                                 backgroundColor={'#FFFFFF'}
//                                 label="Pay Now"
//                                 onPress={() =>
//                                     props.navigation.replace('MyTabs', { screen: 'home' })
//                                 }
//                             />
//                         </View>
//                     </View>
//                 </View>
//             </ScrollView>
//         </ImageBackground>
//     );

// }

// export default AddPost
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  screenHeader: {
    width: '90%',
    height: 80,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headingText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headingTextView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  screenBody: {
    width: '100%',
    height: '100%',
    // alignSelf: 'center'
  },
  whitebox: {
    width: '90%',
    // height: '80%',
    paddingTop: 5,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    elevation: 2,
  },

  profilerow: {
    flexDirection: 'row',
  },

    profilerow: {
        flexDirection: 'row'
    },

    Input: {
        width: '90%', alignSelf: 'center',
        marginTop: 30, borderWidth: 0.4,
        borderRadius: 10, borderColor: "#aaa"
    }
})
