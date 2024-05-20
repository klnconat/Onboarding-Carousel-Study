import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

import {NotificationBoxProps} from '../../types/NotificationBoxProps';

const NotificationBox = (props: NotificationBoxProps) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.searchSection}>
        {props.badgeSvg}
        <View style={styles.subView}>
          <MaskedView
            style={styles.maskedView}
            maskElement={<Text style={styles.header}>{props.header}</Text>}>
            <LinearGradient
              colors={['rgba(229, 201, 144, 1)', 'rgba(228, 176, 70, 1)']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.linearText}>{props.header}</Text>
            </LinearGradient>
          </MaskedView>
          <MaskedView
            style={styles.maskedView}
            maskElement={<Text style={styles.infoText}>{props.infoText}</Text>}>
            <LinearGradient
              colors={['rgba(255, 222, 156, 0.8)', 'rgba(245, 194, 91, 0.8)']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.linearText}>{props.infoText}</Text>
            </LinearGradient>
          </MaskedView>
        </View>
        <View>{props.proceedSvg}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#000000',
    backgroundColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    marginVertical: 16,
    padding: 10,
  },
  maskedView: {flex: 1},
  header: {
    fontFamily: 'Rubik',
    fontWeight: '700',
    fontSize: 16,
  },
  infoText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 16,
    flex: 1,
  },
  subView: {
    flex: 1,
    marginLeft: 10,
  },
  linearText: {opacity: 0, flex: 1},
});
export default NotificationBox;
