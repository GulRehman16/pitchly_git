import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';

const Tooltips = ({invisible, visible}) => {
  return (
    <Tooltip
      isVisible={visible}
      content={<Text>Check this out!</Text>}
      placement="bottom"
      onClose={() => {
        invisible;
      }}></Tooltip>
  );
};

export {Tooltips};

const styles = StyleSheet.create({});
