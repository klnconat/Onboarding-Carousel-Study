import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type CustomProps = {
  imageUri: any;
  customStyle: any;
};

const Header = (props: CustomProps) => {
  return (
    <View style={styles.mainView}>
      <Image source={{uri: props.imageUri}} style={props.customStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginRight: 48,
    marginVertical: 12,
  },
});
export default Header;
