import React from 'react';
import {StyleSheet, Image} from 'react-native';

import MainImage from '../../assets/getStarted/mainImage.png';

const ImageSection = () => {
  const mainImageUri = Image.resolveAssetSource(MainImage)?.uri;
  return <Image source={{uri: mainImageUri}} style={styles.mainImage} />;
};

const styles = StyleSheet.create({
  mainImage: {
    height: '75%',
    width: '75%',
    alignSelf: 'center',
    marginTop: 19
  },
});
export default ImageSection;
