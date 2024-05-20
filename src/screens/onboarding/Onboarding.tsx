import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Carousel from '../../components/onboarding/Carousel';

const Onboarding = () => {
  return (
    <View style={styles.flex}>
      <Carousel />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});
export default Onboarding;
