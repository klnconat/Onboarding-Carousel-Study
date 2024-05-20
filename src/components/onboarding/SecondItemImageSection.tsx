import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BackgroundImage from '../../assets/onboarding/secondOnboardingBgImage.png';
import MainImage from '../../assets/onboarding/secondOnboardingMainImage.png';
import OverlayImage from '../../assets/onboarding/secondOnboardingOverlayImage.png';

const SecondItemImageSection = () => {
  const backgroundImage = Image.resolveAssetSource(BackgroundImage).uri;
  const mainImage = Image.resolveAssetSource(MainImage).uri;
  const overlayImage = Image.resolveAssetSource(OverlayImage).uri;

  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={{uri: backgroundImage}}
        style={styles.backgroundImage}
        resizeMode="cover">
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 0}}>
          <Image source={{uri: mainImage}} style={styles.mainImage} />
        </LinearGradient>
        <Image source={{uri: overlayImage}} style={styles.overlayImage} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  backgroundImage: {
    alignItems: 'center',
    bottom: 40,
  },
  mainImage: {
    marginTop: 80,
    width: 270,
    height: 560,
    zIndex: 1,
  },
  overlayImage: {
    position: 'absolute',
    top: -45,
    right: 20,
    width: 270,
    height: 370,
    resizeMode: 'contain',
  },
});

export default SecondItemImageSection;
