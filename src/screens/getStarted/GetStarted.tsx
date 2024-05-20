import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/getStarted/Header';
import ImageSection from '../../components/getStarted/ImageSection';
import TermPolicyText from '../../components/getStarted/TermPolicyText';
import CommonButton from '../../components/common/CommonButton';

const GetStarted = () => {
  const navigation = useNavigation();

  const onPressButton = () => {
    debugger;
    navigation.navigate('Onboarding');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={[
          'rgba(192, 240, 255, 0.7)',
          'rgba(250, 250, 250, 0.53)',
          'rgba(192, 240, 255, 0.7)',
        ]}
        locations={[0, 0.5, 1]}
        useAngle
        angle={70}
        angleCenter={{x: 0.5, y: 0.5}}>
        <View style={styles.container}>
          <Header />
          <ImageSection />
          <CommonButton
            buttonText="Get Started"
            onPress={() => {
              onPressButton();
            }}
            customStyle={styles.customButton}
          />
          <TermPolicyText />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  customButton: {
    bottom: 35 
  },
});
export default GetStarted;
