import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Dimensions,
  Text,
} from 'react-native';

import Header from '../../components/onboarding/Header';
import SecondItemImageSection from '../../components/onboarding/SecondItemImageSection';
import CommonButton from '../../components/common/CommonButton';

import Title from '../../assets/onboarding/secondOnboardingTitle.png';

type SecondCarouselItemProps = {
  setIndex: () => void;
};

const SecondCarouselItem = (props: SecondCarouselItemProps) => {
  const header = Image.resolveAssetSource(Title).uri;
  return (
    <View style={styles.mainView}>
      <Header imageUri={header} customStyle={styles.customHeader} />
      <SecondItemImageSection />
      <CommonButton
        buttonText="Continue"
        onPress={() => {
          props.setIndex();
        }}
        customStyle={styles.customButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 24,
  },
  customHeader: {
    height: 49,
    width: 277,
    alignSelf: 'flex-start',
  },
  customButton: {
    bottom: 60,
    position: 'absolute',
    width: '100%',
  },
});

export default SecondCarouselItem;
