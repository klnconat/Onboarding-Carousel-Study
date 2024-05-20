import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.welcomeText}>
        Welcome to <Text style={styles.welcomeTextBold}>PlantApp</Text>
      </Text>
      <Text style={styles.infoText}>Identify more than 3000+ plants and 88% accuracy.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginLeft: 24,
    marginRight: 51,
    marginTop: 12
  },
  welcomeText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 28,
    color: 'rgba(19, 35, 27, 1)',
  },
  welcomeTextBold: {
    fontWeight: '600',
  },
  infoText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(19, 35, 27, 0.7)',
  },
});
export default Header;
