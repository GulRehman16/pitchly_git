import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Avatar } from 'react-native-elements';
import { Icon } from 'native-base';
const Box = ({
  name,
  textmessage,
  Nowtext,
  messagenumber,
  Image1,
  Press,
  navigation,
  onPress,
  Time,
}) => {
  const [state, setState] = useState(false);

  const [listData] = useState(
    Array(1)
      .fill('')
      .map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
  );
  const openRowRef = useRef(null);

  const onRowDidOpen = (rowKey, rowMap) => {
    openRowRef.current = rowMap[rowKey];
  };

  const closeOpenRow = () => {
    if (openRowRef.current && openRowRef.current.closeRow) {
      openRowRef.current.closeRow(); s
    }
  };

  const renderItem = data => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{}}>
      <View style={styles.rowFront}>
        <View style={{ marginLeft: 10, marginTop: 5 }}>
          <Avatar rounded size={'medium'} source={Image1} />
        </View>

        <View style={{ width: '55%', marginLeft: 15, marginTop: 10 }}>
          <Text style={styles.vani}>{name}</Text>
          <Text style={styles.othertxt}>{textmessage}</Text>
        </View>

        <View
          style={{
            width: '30%',
            marginLeft: 1,
          }}>
          <Text style={styles.just_now_text}>{Time ? Time : Nowtext}</Text>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              backgroundColor: Time ? null : 'blue',
              marginVertical: 4,
              marginLeft: 12,
            }}>
            <Text style={{ color: '#ffff', textAlign: 'center' }}>
              {messagenumber}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHiddenItem = () => (
    <View
      style={{

        backgroundColor: 'red',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 80,
        borderRadius: 16,

        // borderWidth: 1,
        backgroundColor: 'red',
        width: '24%',
        flex: 1,
        elevation: 1,
        height: 90,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf: 'flex-end',

        marginTop: 10,
        
      }}>
      <Icon
        name="trash"
        type="FontAwesome5"
        style={{
          color: 'white',

          marginRight: 20,
          alignself: 'center',
          marginTop: 20,
          flex: 1,
          marginRight: 24,
          marginLeft: 34,
          alignSelf: 'center'

        }}
      />
    </View>
  );

  return (
    <>
      <TouchableOpacity onPress={Press}>
        <SwipeListView
          disableRightSwipe={true}
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={0}
          rightOpenValue={-60}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={1000}
          onRowDidOpen={onRowDidOpen}
        />
      </TouchableOpacity>
    </>
  );
};
export { Box };

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  backTextWhite: {
    color: 'white',
  },
  rowFront: {
    activeOpacity: 0.95,
    alignItems: 'center',
    backgroundColor: '#ffff',
    elevation: 5,
    marginTop: 5,
    height: 82,
    borderRadius: 10,
    flexDirection: 'row',

  },
  rowBack: {
    alignItems: 'center',

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft: 15,
  },
  backRightBtn: {
    position: 'absolute',
    top: 5,
    width: 97,
    height: 82,
  },

  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: 97,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  closeButton: {
    backgroundColor: 'white',
    bottom: 30,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    padding: 15,
    position: 'absolute',
    right: 30,
  },
  vani: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  othertxt: {
    color: 'grey',
    fontSize: 13,
    fontWeight: '700',
  },
});