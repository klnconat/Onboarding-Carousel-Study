import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import {SearchBoxProps} from '../../types/SearchBoxProps';

import LeftLeaf from '../../assets/home/leftLeaf.svg';
import RightLeaf from '../../assets/home/rightLeaf.svg';

const SearchBox = (props: SearchBoxProps) => {
  return (
    <View style={styles.mainView} testID="SearchBox">
      <View style={{transform: [{rotate: '0deg'}]}}>
        <LeftLeaf style={styles.leafContainer} />
      </View>
      <View style={styles.searchSection}>
        <View style={styles.searchIcon}>{props.svg}</View>
        <TextInput
          style={styles.searchBox}
          placeholder={props.placeholder}
          placeholderTextColor="rgba(175, 175, 175, 1)"
        />
      </View>
      <View style={{transform: [{rotate: '0deg'}]}}>
        <RightLeaf />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(175, 175, 175, 1)',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 12,
    position: 'absolute',
    opacity: 0.9,
    zIndex: 1,
    bottom: 14,
    left: 24,
    right: 24,
  },
  leafContainer:{marginLeft: 15, marginBottom: 15},
  searchIcon: {
    marginRight: 8,
    paddingLeft: 8,
  },
  searchBox: {
    height: 40,
    fontFamily: 'Rubik',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 0.2,
    borderColor: 'rgba(175, 175, 175, 1)',
  },
});
export default SearchBox;
