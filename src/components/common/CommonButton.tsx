import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type CommonButtonProps = {
  buttonText: string;
  customStyle?: any;
  onPress: () => void;
};

const CommonButton = (props: CommonButtonProps) => {
  return (
    <TouchableOpacity style={[styles.box, props.customStyle]} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 12,
    backgroundColor: 'rgba(40, 175, 110, 1)',
    borderColor: 'rgba(40, 175, 110, 1)',
    borderWidth: 1,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  buttonText: {
    fontFamily: 'Rubik',
    fontWeight: '700',
    fontSize: 15,
    color: 'rgba(255, 255, 255, 1)',
  },
});
export default CommonButton;

