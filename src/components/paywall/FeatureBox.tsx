import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {FeatureBoxProps} from '../../types/FeatureBoxProps';

const FeatureBox = (props: FeatureBoxProps) => {
  return (
    <View style={styles.outerBox}>
      <View style={styles.iconBox}>{props.feature.svg}</View>
      <Text style={styles.featureText}>{props.feature.featureText}</Text>
      <Text style={styles.infoText}>{props.feature.infoText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 14,
    width: 156,
    maxHeight: 130,
    paddingLeft: 16,
    paddingVertical: 16,
  },
  iconBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: 36,
    height: 36,
  },
  featureText: {
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 20,
    color: '#FFFFFF',
  },
  infoText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
export default FeatureBox;
