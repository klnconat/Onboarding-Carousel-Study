import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import ImageSection from '../../components/paywall/ImageSection';
import SubscriptionPackageSection from '../../components/paywall/SubscriptionPackageSection';

const Paywall = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageSection />
        <SubscriptionPackageSection />
      </ScrollView>
    </View>
  );
};

export default Paywall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(16, 30, 23, 1)',
    zIndex: 9999,
  },
});
