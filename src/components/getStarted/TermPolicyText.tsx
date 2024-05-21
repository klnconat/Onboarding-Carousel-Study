import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TermPolicyText = () => {
  return (
    <Text style={styles.termPolicyText}>
      By tapping next, you are agreeing to PlantID{' '}
      <Text style={styles.underlineText}>Terms of Use</Text> &{' '}
      <Text style={styles.underlineText}>Privacy Policy</Text>.
    </Text>
  );
};

const styles = StyleSheet.create({
  termPolicyText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 11,
    color: 'rgba(89, 113, 101, 0.7)',
    textAlign: 'center',
    marginHorizontal: 70,
    bottom: 15
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
});
export default TermPolicyText;
