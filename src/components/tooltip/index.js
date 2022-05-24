import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';

const Tooltips = ({invisible, visible}) => {
  const [state, setState] = useState(true);
  return (
    <Tooltip
      isVisible={true}
      content={<Text>Check this out!</Text>}
      placement="bottom"
      onClose={() => {
        setState(false);
      }}></Tooltip>
  );
};

export {Tooltips};

const styles = StyleSheet.create({});
