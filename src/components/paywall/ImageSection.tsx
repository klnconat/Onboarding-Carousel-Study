import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/reducer/userSlice';

import CloseButton from '../common/CloseButton';
import Header from './Header';
import FeatureSection from './FeatureSection';

import MainImage from '../../assets/paywall/mainImage.png';

const ImageSection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const mainImage = Image.resolveAssetSource(MainImage).uri;

  const onPressButton = () => {
    const user = {
      flowCompleted: true,
    };
    dispatch(setUser(user));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.mainView}>
      <ImageBackground source={{uri: mainImage}} style={styles.mainImage}>
        <CloseButton
          onPress={() => {
            onPressButton();
          }}
          size={24}
          backgroundColor="#000000"
          textColor="#FFFFFF"
          customStyle={styles.customButton}
        />
        <Header />
        <FeatureSection />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: '100%',
  },
  customButton: {alignSelf: 'flex-end', marginRight: 16, marginTop: 8},
  mainView: {
    flex: 2,
    height: Dimensions.get('screen').height / 1.8,
    marginBottom: 24,
  },
});
export default ImageSection;
