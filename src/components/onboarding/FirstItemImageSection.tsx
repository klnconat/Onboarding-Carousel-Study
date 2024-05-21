import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native'

import MainPage from '../../assets/onboarding/firstOnboardingMainImage.png';

const FirstItemImageSection = () => {
  const mainImage = Image.resolveAssetSource(MainPage)?.uri;

  return (
      <Image source={{uri: mainImage}} style={styles.mainImage} testID="FirstItemImageSection" />
  );
};

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: '90%',
    alignSelf: 'center',
    resizeMode: 'cover',
    position: "relative",
  },
});

export default FirstItemImageSection;
