import React from 'react';
import {StyleSheet, View} from 'react-native';

type PaginationProps = {
  activeIndex: number;
};

const Pagination = (props: PaginationProps) => {
  return (
    <View style={styles.mainView}>
      <View
        style={[
          styles.circle,
          {
            height: props.activeIndex == 0 ? 10 : 6,
            width: props.activeIndex == 0 ? 10 : 6,
            borderRadius: props.activeIndex == 0 ? 5 : 3,
            backgroundColor:
              props.activeIndex == 0
                ? 'rgba(19, 35, 27, 1)'
                : 'rgba(19, 35, 27, 0.25)',
          },
        ]}
      />
      <View
        style={[
          styles.circle,
          {
            height: props.activeIndex == 1 ? 10 : 6,
            width: props.activeIndex == 1 ? 10 : 6,
            borderRadius: props.activeIndex == 1 ? 5 : 3,
            backgroundColor:
              props.activeIndex == 1
                ? 'rgba(19, 35, 27, 1)'
                : 'rgba(19, 35, 27, 0.25)',
          },
        ]}
      />
      <View style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f5fcff',
    marginBottom: 10,
    zIndex: 99,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(19, 35, 27, 0.25)',
    marginHorizontal: 10,
  },
});
export default Pagination;
