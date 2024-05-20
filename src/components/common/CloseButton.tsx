import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type CloseButtonProps = {
  onPress: () => void;
  size: number;
  backgroundColor?: string;
  textColor?: string;
  customStyle?: any;
};

const CloseButton = (props: CloseButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        props.customStyle,
        {
          width: props.size,
          height: props.size,
          borderRadius: props.size / 2,
          backgroundColor: props.backgroundColor,
        },
      ]}>
      <Text style={[styles.text, {color: props.textColor}]}>x</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 18,
  },
});
export default CloseButton;
