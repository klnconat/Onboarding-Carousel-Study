import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type SubscriptionBannerProps = {
  time: string;
  price: string;
  savingRate?: boolean;
  customStyle?: any;
  isSelected: boolean;
  onPress: () => void;
};

const SubscriptionBanner = (props: SubscriptionBannerProps) => {
  const selectedPlanGradientColors = [
    'rgba(40, 175, 110, 0)',
    'rgba(40, 175, 110, 0.17)',
  ];
  const unSelectedPlanGradientColor = [
    'rgba(255, 255, 255, 0.05)',
    'rgba(255, 255, 255, 0.05)',
  ];

  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        style={[
          styles.bannerContainer,
          props.customStyle,
          {
            borderColor: props.isSelected
              ? 'rgba(40, 175, 110, 1)'
              : 'rgba(255, 255, 255, 0.3)',
          },
        ]}
        colors={
          props.isSelected
            ? selectedPlanGradientColors
            : unSelectedPlanGradientColor
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.planInfo}>
          <View
            style={
              props.isSelected
                ? styles.selectedRadioCircle
                : styles.unSelectedRadioCircle
            }>
            <View
              style={
                props.isSelected
                  ? styles.selectedRadioDot
                  : styles.unSelectedRadioDot
              }
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.planText}> {props.time} </Text>
            <Text style={styles.detailText}>{props.price}</Text>
          </View>
        </View>
        {props.savingRate && (
          <View style={styles.savingRate}>
            <Text style={styles.saveText}>Save 50%</Text>
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E3A2F',
    borderRadius: 14,
    marginHorizontal: 24,
    marginBottom: 16,
    borderWidth: 1.5,
    paddingLeft: 15,
  },
  planInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  unSelectedRadioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selectedRadioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(40, 175, 110, 1)',
    backgroundColor: 'rgba(40, 175, 110, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  unSelectedRadioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  selectedRadioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    marginTop: 14,
    marginBottom: 12,
  },
  planText: {
    fontFamily: 'Rubik',
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  detailText: {
    fontFamily: 'Rubik',
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  savingRate: {
    backgroundColor: 'rgba(40, 175, 110, 1)',
    borderColor: 'rgba(40, 175, 110, 1)',
    borderBottomLeftRadius: 14,
    borderTopRightRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  saveText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
export default SubscriptionBanner;
