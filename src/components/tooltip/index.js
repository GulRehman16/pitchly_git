import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import { Icon } from 'react-native-elements';
import { Images } from '../../constants';


const Tooltips = (props) => {

  const { Tooltip1, Tooltip2, onPress } = props
  const [state, setState] = useState(true);
  return (
    <Tooltip
      isVisible={true}
      contentStyle={{}}
      content={
        <>
          <TouchableOpacity onPress={onPress} >
            {Tooltip2 && (
              <View>
                <Text>
                  Remove Notification
                </Text>
                <Text>
                  Turn off notificationIcon about {'\n'}
                  Vani's updates
                </Text>
              </View>
            )}

          </TouchableOpacity>
          <View>
            {Tooltip1 && (
              <View style={styles.TooltipContainer}>
                <View style={styles.textbox}>
                  <Text style={styles.text}>Upload</Text>
                </View>

                <View style={styles.container}>
                  <TouchableOpacity
                    onPress={() => { props.navigation.navigate('AddPost') }}
                    style={styles.box}>

                    <Image source={Images.Icons.add1} resizeMode="contain"
                      style={{ width: 40, height: 40, }} />
                    <Text>General</Text>

                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { props.navigation.navigate('AddPost') }}
                    style={styles.box}>

                    <Image source={Images.Icons.user1} resizeMode="contain"
                      style={{ width: 40, height: 40 }} />
                    <Text>Talent</Text>

                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { props.navigation.navigate('AddPost') }}
                    style={styles.box}>

                    <Image source={Images.Icons.setting1} resizeMode="contain"
                      style={{ width: 40, height: 40 }} />
                    <Text>Services</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { props.navigation.navigate('AddPost') }}
                    style={styles.box}>
                    <Image source={Images.Icons.lock1} resizeMode="contain"
                      style={{ width: 40, height: 40 }} />
                    <Text>Products</Text>
                  </TouchableOpacity>
                </View>
              </View >
            )}
          </View>
        </>
      }
      placement="top"
      onClose={() => {
        setState(false);
      }}>
    </Tooltip >
  );
};

export { Tooltips };
const styles = StyleSheet.create({
  TooltipContainer: {
    width: '90%',
    // height: 175
    alignSelf: 'center',
    // borderRadius: 20

  },

  container: {
    // width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  textbox: {
    marginVertical: 15

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',

  },
  box: {
    width: 75,
    height: 75,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006FFF4D',
    margin: 4


  }

});
