import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const SubscriptionFooter = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.descriptionText}>
        After the 3-day free trial period you’ll be charged ₺274.99 per year
        unless you cancel before the trial expires. Yearly Subscription is
        Auto-Renewable
      </Text>
      <View style={styles.linksView}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Terms</Text>
        </TouchableOpacity>
        <Text style={styles.separator}> • </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Privacy</Text>
        </TouchableOpacity>
        <Text style={styles.separator}> • </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Restore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 8,
    alignItems: 'center',
    marginHorizontal: 24,
  },
  descriptionText: {
    marginBottom: 10,
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.52)',
    textAlign: 'center',
  },
  linksView: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  separator: {
    color: '#ccc',
    fontSize: 14,
  },
});
export default SubscriptionFooter;
