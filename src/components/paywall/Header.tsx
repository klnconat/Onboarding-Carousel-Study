import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.titleText}>
        <Text style={styles.titleTextBold}>PlantApp </Text>
        Premium
      </Text>
      <Text style={styles.infoText}>Access All Features</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginLeft: 24,
    marginVertical: 12,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  titleText: {
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 27,
    color: '#FFFFFF',
  },
  titleTextBold: {
    fontFamily: 'Visby',
    fontSize: 30,
    fontWeight: '800',
  },
  infoText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
export default Header;
