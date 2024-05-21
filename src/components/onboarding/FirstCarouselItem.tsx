import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import Header from '../../components/onboarding/Header';
import FirstItemImageSection from '../../components/onboarding/FirstItemImageSection';
import CommonButton from '../../components/common/CommonButton';

import Title from '../../assets/onboarding/firstOnboardingTitle.png';

type FirstCarouselItemProps = {
  setIndex: () => void;
  testID: string;
};

const FirstCarouselItem = (props: FirstCarouselItemProps) => {
  const titleImage = Image.resolveAssetSource(Title)?.uri;
  return (
    <View style={styles.mainView} testID={props.testID}>
      <Header imageUri={titleImage} customStyle={styles.customHeader} />
      <FirstItemImageSection />
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 24,
  },
  customHeader: {
    height: 66,
    width: 315,
    alignSelf: 'center',
  },
  customButton: {
    bottom: 60,
    position: 'absolute',
    width: '100%',
  },
});

export default FirstCarouselItem;
