import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {Feature} from '../../types/Feature';
import FeatureBox from './FeatureBox';

import Scanner from '../../assets/paywall/scanner.svg';
import Speedometer from '../../assets/paywall/speedometer.svg';

const FeatureSection = () => {
  const featureDetailList = [
    {
      svg: <Scanner />,
      featureText: 'Unlimited',
      infoText: 'Plant Identify',
    },
    {
      svg: <Speedometer />,
      featureText: 'Faster',
      infoText: 'Process',
    },
    {
      svg: <Scanner />,
      featureText: 'Unlimited',
      infoText: 'Plant Identify',
    },
  ];

  return (
    <View style={styles.mainView}>
      <FlatList
        data={featureDetailList}
        renderItem={({item}: {item: Feature}) => {
          return <FeatureBox feature={item} />;
        }}
        contentContainerStyle={styles.contentContainerStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 24,
  },
  contentContainerStyle: {
    gap: 8,
  },
});
export default FeatureSection;
