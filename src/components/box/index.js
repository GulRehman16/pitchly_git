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
const Box = ({ name, textmessage, Nowtext, messagenumber, Image1, Press }) => {
  const [state, setState] = useState(false);

  const [listData] = useState(
    Array(10)
      .fill('')
      .map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
  );
  const openRowRef = useRef(null);

  const onRowDidOpen = (rowKey, rowMap) => {
    openRowRef.current = rowMap[rowKey];
  };

  const closeOpenRow = () => {
    if (openRowRef.current && openRowRef.current.closeRow) {
      openRowRef.current.closeRow();
    }
  };

  const renderItem = data => (
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
        }}>
        <Text style={styles.just_now_text}>{Nowtext}</Text>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
            backgroundColor: 'blue',
            marginVertical: 4,
            marginLeft: 10,
          }}>
          <Text style={{ color: '#ffff', textAlign: 'center' }}>
            {messagenumber}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderHiddenItem = () => (
    <View
      style={{
        borderWidth: 1,
        backgroundColor: 'red',
        width: '24%',
        flex: 1,
        height: 80,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf: 'flex-end',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',

      }}>
      <Icon
        name="trash"
        type="FontAwesome5"
        style={{
          color: 'white',
          marginRight: 55,
          marginLeft: 15,
          alignSelf: 'center'
        }}
      />
    </View>
  );

  return (
    <>
      <TouchableOpacity onPress={Press}>
        <SwipeListView
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
    color: 'grey',
    fontSize: 20,
    fontWeight: '700',
  },
  othertxt: {
    color: 'grey',
    fontSize: 13,
    fontWeight: '700',
  },
});