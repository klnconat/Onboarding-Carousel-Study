import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomeTextBox = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.titleText}>Hi, plant lover!</Text>
      <Text style={styles.subTitleText}>Good Afternoon! ⛅</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginLeft: 24,
  },
  titleText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(19, 35, 27, 1)',
  },
  subTitleText: {
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 24,
    color: 'rgba(19, 35, 27, 1)',
    marginRight: 10,
  },
});
export default WelcomeTextBox;
