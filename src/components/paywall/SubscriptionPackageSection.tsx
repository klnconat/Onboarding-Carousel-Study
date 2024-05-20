import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/reducer/userSlice';

import SubscriptionBanner from './SubscriptionBanner';
import CommonButton from '../common/CommonButton';
import SubscriptionFooter from './SubscriptionFooter';

const SubscriptionPackageSection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('year');

  const onPressButton = () => {
    const user = {
      flowCompleted: true,
    };
    dispatch(setUser(user));
    navigation.navigate('Home');
  };

  return (
    <View>
      <SubscriptionBanner
        time="1 Month"
        price="$2.99/month, auto renewable"
        isSelected={isSelected}
        onPress={() => {
          selectedPlan == 'year' && setIsSelected(!isSelected);
          setSelectedPlan('month');
        }}
      />
      <SubscriptionBanner
        time="1 Year"
        price="First 3 days free, then $529,99/year"
        savingRate={true}
        customStyle={styles.customBanner}
        isSelected={!isSelected}
        onPress={() => {
          selectedPlan == 'month' && setIsSelected(!isSelected);
          setSelectedPlan('year');
        }}
      />
      <CommonButton
        buttonText="Try free for 3 days"
        onPress={() => {
          onPressButton();
        }}
      />
      <SubscriptionFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  customBanner: {
    marginBottom: 26,
  },
});
export default SubscriptionPackageSection;
